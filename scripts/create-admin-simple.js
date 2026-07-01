// scripts/create-admin-simple.js
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
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
  } catch (error) {
    console.error('❌ Error:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

main()