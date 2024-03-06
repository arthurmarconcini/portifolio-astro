import { firstCharToUpperCase } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import type { Repository } from "@/types/repos";

interface ReposListProps {
  repository: Repository[];
}

export const ReposList = (props: ReposListProps) => {
  if (!props.repository.length) return <div>Nao a nada</div>;

  return (
    <div className="flex flex-col gap-2 w-full max-w-2xl">
      {props.repository.map((repos, index) => (
        <Card className="first:bg-gradient-to-tr first:from-fuchsia-500 first:via-violet-600 first:to-cyan-500 hover:opacity-95 n">
          <a href={repos.html_url} target="_blank" className="relative">
            {index === 0 ? (
              <span className="absolute top-6 left-2 animate-bounce text-slate-900 font-bold antialiased">
                NEW
              </span>
            ) : null}

            <CardContent className="pt-4 pb-4">
              <h1 className="font-bold text-lg text-center">
                {firstCharToUpperCase(repos.name)}
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
      ))}
    </div>
  );
};
