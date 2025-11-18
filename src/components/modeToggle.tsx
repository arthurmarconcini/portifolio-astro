import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DarkModeToggle = () => {
  const [theme, setTheme] = React.useState<"light" | "dark" | "system">("light")

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    const savedTheme = localStorage.getItem("dark-mode")
    if (savedTheme === "dark") {
        setTheme("dark")
    } else if (savedTheme === "light") {
        setTheme("light")
    } else {
        setTheme("system")
    }
  }, [])

  const setThemeState = (t: "light" | "dark" | "system") => {
      setTheme(t);
      if (t === "system") {
          localStorage.removeItem("dark-mode");
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
              document.documentElement.classList.add("dark");
          } else {
              document.documentElement.classList.remove("dark");
          }
      } else {
          localStorage.setItem("dark-mode", t);
          if (t === "dark") {
              document.documentElement.classList.add("dark");
          } else {
              document.documentElement.classList.remove("dark");
          }
      }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Alternar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setThemeState("light")}>
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("dark")}>
          Escuro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("system")}>
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DarkModeToggle;
