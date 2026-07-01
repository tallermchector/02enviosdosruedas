import { prisma } from '../src/lib/prisma'

async function main() {
  // Clear existing
  await prisma.post.deleteMany()
  await prisma.user.deleteMany()

  // Create seed rows
  const alice = await prisma.user.create({
    data: {
      email: 'alice@enviosdosruedas.com',
      posts: {
        create: [
          { title: 'Primer Envío Express Coordinado!' },
          { title: 'Entrega en 45 minutos en el Centro' }
        ]
      }
    }
  })

  const bob = await prisma.user.create({
    data: {
      email: 'bob@enviosdosruedas.com',
      posts: {
        create: [
          { title: 'Excelente servicio lowcost para mi comercio' }
        ]
      }
    }
  })

  console.log('✅ Seeding completed: created users and posts.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
