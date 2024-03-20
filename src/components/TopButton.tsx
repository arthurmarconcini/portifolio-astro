import { useState } from "react";
import { Button } from "./ui/button";

import { ArrowUpFromLine } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div>
      {isVisible && (
        <Button
          variant={"link"}
          onClick={scrollToTop}
          className="fixed bottom-20 right-10 rounded-full"
        >
          <ArrowUpFromLine />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
