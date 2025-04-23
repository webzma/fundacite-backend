import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const municipalities = [
    {
      name: "Arístides Bastidas",
      parishes: ["San Pablo"],
    },
    {
      name: "Bolívar",
      parishes: ["Aroa"],
    },
    {
      name: "Bruzual",
      parishes: ["Chivacoa", "Campo Elías"],
    },
    {
      name: "Cocorote",
      parishes: ["Cocorote"],
    },
    {
      name: "Independence",
      parishes: ["Independence"],
    },
    {
      name: "José Antonio Páez",
      parishes: ["Sabana de Parra"],
    },
    {
      name: "La Trinidad",
      parishes: ["Boraure"],
    },
    {
      name: "Manuel Monge",
      parishes: ["Yumare"],
    },
    {
      name: "Nirgua",
      parishes: ["Nirgua", "Salóm", "Temerla"],
    },
    {
      name: "Peña",
      parishes: ["Yaritagua", "San Andrés"],
    },
    {
      name: "San Felipe",
      parishes: ["San Felipe", "Albarico", "San Javier"],
    },
    {
      name: "Sucre",
      parishes: ["Guama"],
    },
    {
      name: "Urachiche",
      parishes: ["Urachiche"],
    },
    {
      name: "Veroes",
      parishes: ["Farriar", "El Guayabo"],
    },
  ];

  for (const m of municipalities) {
    await prisma.municipality.create({
      data: {
        name: m.name,
        parishes: {
          create: m.parishes.map((name) => ({ name })),
        },
      },
    });
  }

  console.log("Municipalities and parishes of Yaracuy have been loaded.");
}

main()
  .catch((e) => {
    console.error("Error while seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
