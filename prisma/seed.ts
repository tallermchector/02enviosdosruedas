import { prisma } from '../src/lib/prisma'
import { ServiceType } from '../generated/prisma/client'

async function main() {
  // Clear existing
  await prisma.post.deleteMany()
  await prisma.user.deleteMany()
  await prisma.priceRange.deleteMany()

  // Create seed users & posts
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

  // Create seed price ranges
  const priceRanges = [
    // LOW_COST
    {
      serviceType: ServiceType.LOW_COST,
      distanciaMinKm: 0,
      distanciaMaxKm: 3,
      precioRango: 3000,
      descripcion: "LOW_COST: 0 a 3 km",
    },
    {
      serviceType: ServiceType.LOW_COST,
      distanciaMinKm: 3,
      distanciaMaxKm: 5,
      precioRango: 4000,
      descripcion: "LOW_COST: 3 a 5 km",
    },
    {
      serviceType: ServiceType.LOW_COST,
      distanciaMinKm: 5,
      distanciaMaxKm: 7,
      precioRango: 5300,
      descripcion: "LOW_COST: 5 a 7 km",
    },
    {
      serviceType: ServiceType.LOW_COST,
      distanciaMinKm: 7,
      distanciaMaxKm: 10,
      precioRango: 7000,
      descripcion: "LOW_COST: 7 a 10 km (Precio base)",
    },
    {
      serviceType: ServiceType.LOW_COST,
      distanciaMinKm: 10,
      distanciaMaxKm: 9999,
      precioRango: 700,
      descripcion: "LOW_COST: km adicional excedente (10+ km)",
    },

    // EXPRESS
    {
      serviceType: ServiceType.EXPRESS,
      distanciaMinKm: 0,
      distanciaMaxKm: 3,
      precioRango: 3700,
      descripcion: "EXPRESS: 0 a 3 km",
    },
    {
      serviceType: ServiceType.EXPRESS,
      distanciaMinKm: 3,
      distanciaMaxKm: 5,
      precioRango: 4600,
      descripcion: "EXPRESS: 3 a 5 km",
    },
    {
      serviceType: ServiceType.EXPRESS,
      distanciaMinKm: 5,
      distanciaMaxKm: 7,
      precioRango: 6100,
      descripcion: "EXPRESS: 5 a 7 km",
    },
    {
      serviceType: ServiceType.EXPRESS,
      distanciaMinKm: 7,
      distanciaMaxKm: 10,
      precioRango: 8200,
      descripcion: "EXPRESS: 7 a 10 km (Precio base)",
    },
    {
      serviceType: ServiceType.EXPRESS,
      distanciaMinKm: 10,
      distanciaMaxKm: 9999,
      precioRango: 1000,
      descripcion: "EXPRESS: km adicional excedente (10+ km)",
    },
  ]

  for (const range of priceRanges) {
    await prisma.priceRange.create({
      data: range
    })
  }

  console.log('✅ Seeding completed: created users, posts, and price ranges.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
