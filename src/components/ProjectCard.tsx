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
import { firstCharToUpperCase } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a href={project.github_url} target="_blank" className="group">
      <Card className="group-hover:border-violet-600 transition">
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
