import type { Project } from "@prisma/client";
import { Button } from "./ui/button";
import ProjectCard from "./ProjectCard";
import Search from "./search";
import { useState } from "react";

interface ReposListProps {
  repos: Project[];
  isPaginated?: boolean;
}

export const ReposList = ({ repos, isPaginated = false }: ReposListProps) => {
  const [term, setTerm] = useState("");
  const top5repos = repos?.slice(0, 5);
  const renderRepos =
    term !== ""
      ? repos.filter((repo) => repo.title.includes(term))
      : isPaginated
      ? repos
      : top5repos;

  function handleSearch(value: string) {
    setTerm(value);
  }

  return (
    <div className="flex flex-col gap-4">
      <h1>Últimos projetos</h1>
      <Search handleSearch={handleSearch} />
      {renderRepos.length === 0 && (
        <div className="w-80 md:w-96 lg:w-[32rem]">
          <h1 className="font-bold text-lg text-slate-800">
            Nenhum encontrado!
          </h1>
        </div>
      )}
      <div className="flex flex-col gap-2 w-full">
        {renderRepos.map((repo, index) => (
          <ProjectCard key={index} project={repo} />
        ))}
      </div>
      {!isPaginated && (
        <a href="/projetos" className="w-full">
          <Button variant={"link"} className="w-full justify-start text-xl">
            Ir para todos os projetos!
          </Button>
        </a>
      )}
    </div>
  );
};