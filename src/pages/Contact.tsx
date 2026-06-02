import { ThemeProvider } from "@/hooks/useTheme";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TopNav } from "@/components/TopNav";
import { ContactSection } from "@/components/sections/ContactSection";

const Contact = () => {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <TopNav />
      <ContactSection />
    </ThemeProvider>
  );
};

export default Contact;
