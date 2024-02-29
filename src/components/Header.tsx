import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div className="mt-8 mx-auto w-full justify-center flex gap-2">
      <Button variant="secondary">Home</Button>
      <Button variant="secondary">Blog</Button>
      <Button variant="secondary">Projetos</Button>
    </div>
  );
};
