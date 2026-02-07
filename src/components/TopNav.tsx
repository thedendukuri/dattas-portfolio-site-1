import { NavLink } from "./NavLink";

interface TopNavProps {
  onNavigate: (index: number) => void;
}

const navItems = [
  { label: "About Me", sectionIndex: 0 },
  { label: "Projects", sectionIndex: 2 },
  { label: "Contact", sectionIndex: 4 },
];

export function TopNav({ onNavigate }: TopNavProps) {
  return (
    <nav className="fixed top-0 right-0 z-50 p-4 md:p-6">
      <ul className="flex items-center gap-4 md:gap-6">
        {navItems.map((item) => (
          <li key={item.label}>
            <button
              onClick={() => onNavigate(item.sectionIndex)}
              className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
