import type { Project } from "@prisma/client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const now = new Date();
  const sevenDaysAgo = new Date(now);
  sevenDaysAgo.setDate(now.getDate() - 7);

  return (
    <a
      href={project.github_url}
      target="_blank"
      className="group w-80 md:w-96 lg:w-[32rem]"
    >
      <Card className="group-hover:border-violet-600 transition relative">
        {project.created_at >= sevenDaysAgo ? (
          <span className="absolute top-2 right-2 animate-bounce text-slate-900 font-bold antialiased">
            NEW
          </span>
        ) : null}
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{project.description}</p>
        </CardContent>
        <CardFooter>
          <span>
            {formatDistanceToNow(project.created_at, {
              locale: ptBR,
              addSuffix: true,
            })}
          </span>
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProjectCard;
