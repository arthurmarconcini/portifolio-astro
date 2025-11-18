import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // Faz uma requisição GET para a API do GitHub import.meta.env.PUBLIC_GITHUB_URL
    const response = await fetch(
      "https://api.github.com/users/arthurmarconcini/repos?per_page=100"
    ).then((response) => response.json());

    console.log(response);

    // Mapeia os dados da resposta para o formato desejado
    const repositories = response.map((repo) => {
      // Prioritize OpenGraph image to avoid broken links from raw.githubusercontent
      const screenshot_url = `https://opengraph.githubassets.com/1/arthurmarconcini/${repo.name}`;

      const tags = [];
      if (repo.language) tags.push(repo.language);
      if (repo.topics && Array.isArray(repo.topics)) {
        tags.push(...repo.topics);
      }

      // Remove duplicates
      const uniqueTags = [...new Set(tags)];

      return {
        title: repo.name,
        description: repo.description || "",
        created_at: repo.created_at,
        github_url: repo.html_url,
        screenshot_url: screenshot_url,
        url: repo.homepage,
        tags: uniqueTags,
      };
    });

    // Limpa o banco de dados antes de inserir os novos dados
    await prisma.project.deleteMany();

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
