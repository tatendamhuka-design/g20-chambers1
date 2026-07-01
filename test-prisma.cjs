// test-prisma.cjs
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function test() {
  try {
    const result = await prisma.$queryRaw`SELECT 1`
    console.log('✅ Database connection successful!')
    console.log('Result:', result)
  } catch (e) {
    console.error('❌ Error:', e.message)
  } finally {
    await prisma.$disconnect()
  }
}

test()