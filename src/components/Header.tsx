import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./modeToggle";

interface HeaderProps {
  path: string;
}

export const Header = ({ path }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 flex justify-between items-center">
      <a href="/" className="text-2xl font-bold">
        Arthur Marconcini
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-4">
        <a href="/">
          <Button
            asChild
            variant="secondary"
            className={path === "/" ? "bg-purple-500" : ""}
          >
            <p>Home</p>
          </Button>
        </a>
        <a href="/projetos">
          <Button
            asChild
            variant="secondary"
            className={path.startsWith("/projetos") ? "bg-purple-500" : ""}
          >
            <p>Projetos</p>
          </Button>
        </a>
        <div className="opacity-50 cursor-not-allowed">
          <Button asChild variant="secondary" disabled>
            <p>Blog</p>
          </Button>
        </div>
        <DarkModeToggle />
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Button onClick={() => setIsOpen(!isOpen)} variant="ghost">
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-900 z-10">
          <nav className="flex flex-col items-center gap-4 p-4">
            <a href="/">
              <Button
                asChild
                variant="secondary"
                className={path === "/" ? "bg-purple-500" : ""}
              >
                <p>Home</p>
              </Button>
            </a>
            <a href="/projetos">
              <Button
                asChild
                variant="secondary"
                className={path.startsWith("/projetos") ? "bg-purple-500" : ""}
              >
                <p>Projetos</p>
              </Button>
            </a>
            <div className="opacity-50 cursor-not-allowed">
              <Button asChild variant="secondary" disabled>
                <p>Blog</p>
              </Button>
            </div>
            <DarkModeToggle />
          </nav>
        </div>
      )}
    </header>
  );
};