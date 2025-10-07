import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { MoonIcon, SunIcon } from "lucide-react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  const toggleDarkMode = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    if (newIsDarkMode) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("dark-mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("dark-mode", "light");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleDarkMode}
        className="bg-gray-200 dark:bg-gray-700 "
      />
      {!isDarkMode ? <SunIcon /> : <MoonIcon />}
    </div>
  );
};

export default DarkModeToggle;
