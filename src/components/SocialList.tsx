import { LinkedinIcon, Instagram, GithubIcon } from "lucide-react";
import { Button } from "./ui/button";

export const SocialList = () => {
  return (
    <div className="flex gap-2">
      <Button asChild variant="outline" className="p-6">
        <a href="https://www.linkedin.com/in/arthurmarconcini" target="_blank">
          <LinkedinIcon />
        </a>
      </Button>

      <Button asChild variant="outline" className="p-6">
        <a href="https://www.github.com/arthurmarconcini" target="_blank">
          <GithubIcon />
        </a>
      </Button>

      <Button asChild variant="outline" className="p-6">
        <a href="https://www.instagram.com/arthurmarconcini" target="_blank">
          <Instagram />
        </a>
      </Button>
    </div>
  );
};
