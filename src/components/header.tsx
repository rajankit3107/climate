import { useTheme } from "@/context/theme-provider";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { CitySearch } from "./city-search";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto container flex h-16 items-center justify-between px-4">
        <Link to={"/"} className="transition-transform hover:scale-105">
          <img
            src={isDark ? "/logo.png" : "/logo2.png"}
            alt="Climate logo"
            className="h-12 w-auto"
          />
        </Link>
        <div className="flex items-center gap-6">
          {/* Search  */}
          <CitySearch />
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="rounded-full p-2 hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            <div className={`transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`}>
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-blue-500" />
              )}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
