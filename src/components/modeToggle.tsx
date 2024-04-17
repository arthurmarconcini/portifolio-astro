import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { MoonIcon, SunIcon } from "lucide-react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if the user has set the dark mode preference in localStorage
    const darkMode = window.localStorage.getItem("dark-mode");

    if (darkMode !== null) {
      return darkMode === "dark";
    }

    window.localStorage.setItem("dark-mode", "dark");

    return true;
  });

  const toggleDarkMode = () => {
    if (isDarkMode) {
      window.localStorage.setItem("dark-mode", "");
    } else {
      window.localStorage.setItem("dark-mode", "dark");
    }

    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex flex-col items-center sm:flex-row gap-2 absolute top-10 right-10">
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
