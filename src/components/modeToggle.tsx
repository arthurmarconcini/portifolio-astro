import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { MoonIcon, SunIcon } from "lucide-react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
