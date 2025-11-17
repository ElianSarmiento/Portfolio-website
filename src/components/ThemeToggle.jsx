import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const applyTheme = (theme) => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
      }
      localStorage.setItem("theme", theme);
    };

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      applyTheme(storedTheme);
      return;
    }

    const prefersDarkOnSmallScreens =
      window.matchMedia("(max-width: 640px)").matches;

    applyTheme(prefersDarkOnSmallScreens ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-4 right-4 sm:top-5 sm:right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden hidden sm:block"
      )}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300 " />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
