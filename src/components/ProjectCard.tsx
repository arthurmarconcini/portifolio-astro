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

      {project.screenshot_url ? (
        <img
          src={project.screenshot_url}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 rounded-t-lg flex items-center justify-center">
          <p className="text-gray-500">No image available</p>
        </div>
      )}

      <div className="flex flex-col flex-grow">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p>{project.description}</p>
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
