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
import { Button } from "./ui/button";
import { Link } from "lucide-react";

import { Badge } from "./ui/badge";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const now = new Date();
  const sevenDaysAgo = new Date(now);
  sevenDaysAgo.setDate(now.getDate() - 7);

  return (
    <Card className="group hover:border-violet-600 transition relative flex flex-col">
      {project.created_at >= sevenDaysAgo ? (
        <span className="absolute top-2 right-2 bg-violet-600 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
          NEW
        </span>
      ) : null}

      <div className="w-full aspect-video overflow-hidden rounded-t-lg bg-gray-100 dark:bg-gray-900 relative group-hover:shadow-lg transition-all">
        {project.screenshot_url ? (
          <img
            src={project.screenshot_url}
            alt={`Screenshot of ${project.title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-sm">No image</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col gap-4">
          <p>{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags && project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4 mt-auto">
          <div className="flex justify-between w-full">
            <a href={project.github_url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">GitHub</Button>
            </a>
            {project.url && project.url.startsWith("http") && (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Button>
                  <Link className="w-4 h-4 mr-2" />
                  Site
                </Button>
              </a>
            )}
          </div>
          <span className="text-sm text-gray-500">
            {formatDistanceToNow(project.created_at, {
              locale: ptBR,
              addSuffix: true,
            })}
          </span>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProjectCard;
