// scripts/create-admin.js
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

async function main() {
  const prisma = new PrismaClient()
  
  try {
    const hashedPassword = await bcrypt.hash('admin123', 10)

    const admin = await prisma.admin.create({
      data: {
        email: 'admin@g20chambers.co.za',
        password: hashedPassword,
        name: 'Admin',
      },
    })

    console.log('✅ Admin created successfully!')
    console.log(`📧 Email: ${admin.email}`)
    console.log(`🔑 Password: admin123`)
    console.log('🔗 Login at: http://localhost:3000/admin/login')
  } catch (error) {
    console.error('❌ Error creating admin:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

main()