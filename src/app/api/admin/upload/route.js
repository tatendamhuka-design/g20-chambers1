import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

export async function POST(request) {
  // 1. Check if the user is logged in (admin)
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // 2. Get the uploaded file and folder from the request
    const formData = await request.formData()
    const file = formData.get('file')
    const folder = formData.get('folder') || 'barristers' // Default to 'barristers'

    // 3. Validate the file
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    // Check if it's an image
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'File type not allowed. Please upload JPG, PNG, or WebP.' }, { status: 400 })
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'File too large. Maximum size is 5MB.' }, { status: 400 })
    }

    // 4. Create a unique filename
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const timestamp = Date.now()
    const originalName = file.name.replace(/\s/g, '-') // Remove spaces
    const filename = `${timestamp}-${originalName}`
    
    // 5. Define the upload directory (e.g., public/images/barristers)
    const uploadDir = path.join(process.cwd(), 'public', 'images', folder)
    
    // 6. Ensure the directory exists
    await mkdir(uploadDir, { recursive: true })

    // 7. Save the file
    const filePath = path.join(uploadDir, filename)
    await writeFile(filePath, buffer)

    // 8. Return the public URL
    const imageUrl = `/images/${folder}/${filename}`

    return NextResponse.json({ 
      success: true, 
      url: imageUrl,
      filename 
    })

  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Upload failed. Please try again.' }, { status: 500 })
  }
}