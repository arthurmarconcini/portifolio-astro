import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowUpFromLine } from "lucide-react";

const debounce = (func: () => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const debouncedToggleVisibility = debounce(toggleVisibility, 200);
    window.addEventListener("scroll", debouncedToggleVisibility);
    return () => {
      window.removeEventListener("scroll", debouncedToggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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