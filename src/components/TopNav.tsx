import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
];

export function TopNav() {
  const location = useLocation();
  return (
    <nav className="fixed top-0 right-0 z-50 p-4 md:p-6">
      <ul className="flex items-center gap-4 md:gap-6">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-gold"
                  : "text-muted-foreground hover:text-gold"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
