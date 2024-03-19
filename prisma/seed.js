import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const artstore = await prisma.project.create({
    data: {
      title: "Artstore",
      description: "E-commerce website for selling all",
      github_url: "https://github.com/arthurmarconcini/artstore",
    },
  });

  const expert_notes = await prisma.project.create({
    data: {
      title: "Expert Notes",
      description: "A simple note taking app",
      github_url: "https://github.com/arthurmarconcini/expert-notes",
    },
  });

  const expenses = await prisma.project.create({
    data: {
      title: "Expenses",
      description: "A simple expense tracking app",
      github_url: "https://github.com/arthurmarconcini/expenses",
    },
  });

  const delivery_backoffice = await prisma.project.create({
    data: {
      title: "Delivery Backoffice",
      description: "A delivery backoffice for a small company",
      github_url: "https://github.com/arthurmarconcini/delivery_backoffice",
    },
  });

  const ignews = await prisma.project.create({
    data: {
      title: "Ignews",
      description: "A simple news app",
      github_url: "https://github.com/arthurmarconcini/ignews",
    },
  });

  const upfi = await prisma.project.create({
    data: {
      title: "Upfi",
      description: "A fast and secure file sharing app",
      github_url: "https://github.com/arthurmarconcini/upfi",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
