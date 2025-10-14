import type { Project } from "@prisma/client";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Search from "./search";
import { Button } from "./ui/button";

// Debounce hook
function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

interface ReposListProps {
  initialProjects: Project[];
}

export const ReposList = ({ initialProjects }: ReposListProps) => {
  const [term, setTerm] = useState("");
  const debouncedTerm = useDebounce(term, 500);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialProjects.length === 6);
  const [loading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const loadMoreProjects = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const nextPage = page + 1;
    try {
      const response = await fetch(`/api/projects?page=${nextPage}&limit=6`);
      const newProjects = await response.json();
      if (newProjects.length > 0) {
        setProjects((prevProjects) => [...prevProjects, ...newProjects]);
        setPage(nextPage);
        if (newProjects.length < 6) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const searchProjects = async (searchTerm: string) => {
    setIsSearching(true);
    setLoading(true);
    try {
      const response = await fetch(`/api/projects?term=${searchTerm}`);
      const searchedProjects = await response.json();
      setProjects(searchedProjects);
      setHasMore(false); // No pagination for search results
    } catch (error) {
      console.error("Failed to search projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const resetSearch = () => {
    setIsSearching(false);
    setProjects(initialProjects);
    setPage(1);
    setHasMore(initialProjects.length === 6);
  };

  useEffect(() => {
    if (debouncedTerm) {
      searchProjects(debouncedTerm);
    } else {
      resetSearch();
    }
  }, [debouncedTerm]);

  const handleSearch = (value: string) => {
    setTerm(value);
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="text-2xl font-bold">Meus Projetos</h1>
      <Search handleSearch={handleSearch} />
      {projects.length === 0 && (term !== "" || isSearching) && (
        <div className="w-full">
          <h1 className="font-bold text-lg text-slate-800">
            Nenhum projeto encontrado!
          </h1>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-center">
        {!isSearching && hasMore && (
          <Button onClick={loadMoreProjects} disabled={loading}>
            {loading ? "Carregando..." : "Mostrar mais projetos"}
          </Button>
        )}
      </div>
    </div>
  );
};