import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="bg-blue-600 text-white p-3 flex justify-between">
      <h1>MyApp</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
