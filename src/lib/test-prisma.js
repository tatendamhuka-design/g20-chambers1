// test-prisma.js
import prisma from './src/lib/prisma.js'

try {
  const result = await prisma.$queryRaw`SELECT 1`
  console.log('✅ Database connection successful!')
  console.log('Result:', result)
} catch (e) {
  console.error('❌ Error:', e.message)
  console.error('Stack:', e.stack)
} finally {
  await prisma.$disconnect()
}