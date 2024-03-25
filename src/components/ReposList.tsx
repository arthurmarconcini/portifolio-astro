import { firstCharToUpperCase } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import type { Project } from "@prisma/client";
import { Button } from "./ui/button";
import ProjectCard from "./ProjectCard";

interface ReposListProps {
  repos: Project[];
}

export const ReposList = ({ repos }: ReposListProps) => {
  const top5repos = repos?.slice(0, 5);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 w-full">
        {top5repos.map((repo, index) => (
          <ProjectCard key={index} project={repo} />
        ))}

        {/* {top5repos.map((repos, index) => (
          <Card
            key={repos.id}
            className="first:bg-gradient-to-tr first:from-fuchsia-500 first:via-violet-600 first:to-cyan-500 hover:opacity-95 n"
          >
            <a href={repos.github_url} target="_blank" className="relative">
              {index === 0 ? (
                <span className="absolute top-6 left-2 animate-bounce text-slate-900 font-bold antialiased">
                  NEW
                </span>
              ) : null}

              <CardContent className="pt-4 pb-4">
                <h1 className="font-bold text-lg text-center">
                  {firstCharToUpperCase(repos.title)}
                </h1>
                <p className="text-center">{repos.description}</p>
                <span className="text-xs text-slate-300 font-bold antialiased">
                  {formatDistanceToNow(repos.created_at, {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </span>
              </CardContent>
            </a>
          </Card>
        ))} */}
      </div>
      <a href="/projetos" className="w-full">
        <Button variant={"link"} className="w-full text-xl">
          Carregar mais!
        </Button>
      </a>
    </div>
  );
};
