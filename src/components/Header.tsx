import { Button } from "./ui/button";

export const Header = () => {
  return (
    <ul className="mt-8 flex flex-1 justify-center items-center gap-4">
      <li>
        <a href="/">
          <Button asChild variant="secondary">
            <p>Home</p>
          </Button>
        </a>
      </li>

      <li>
        <a href="/projetos">
          <Button asChild variant="secondary">
            <p>Projetos</p>
          </Button>
        </a>
      </li>
      <li className="opacity-50 cursor-not-allowed">
        <Button asChild variant="secondary" disabled>
          <p>Blog</p>
        </Button>
      </li>
    </ul>
  );
};
