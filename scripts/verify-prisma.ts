import { prisma } from '../src/lib/prisma'

async function verify() {
  try {
    const users = await prisma.user.findMany()
    console.log(`✅ Connected. Found ${users.length} user(s) in seed database.`)
  } catch (error) {
    console.error('❌ Failed to connect to Prisma Postgres:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

verify()
