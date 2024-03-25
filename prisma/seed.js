import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // Faz uma requisição GET para a API do GitHub
    const response = await fetch(`${import.meta.env.PUBLIC_GITHUB_URL}`).then(
      (response) => response.json()
    );

    console.log(response);

    // Mapeia os dados da resposta para o formato desejado
    const repositories = response.map((repo) => ({
      title: repo.name,
      description: repo.description || "",
      created_at: repo.created_at,
      github_url: repo.html_url,
    }));

    // Cria os registros no banco de dados usando o Prisma
    await prisma.project.createMany({
      data: repositories,
      skipDuplicates: true, // Ignora registros duplicados com base no campo "id"
    });

    console.log("Seed concluído com sucesso!");
  } catch (error) {
    console.error("Erro ao executar o seed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
