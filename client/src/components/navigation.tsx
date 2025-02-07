import { cn } from "@/lib/utils";

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "team", label: "Our Team" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            IT Tech LLC
          </span>
        </div>
        <div className="flex gap-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                "text-foreground/60 hover:text-foreground"
              )}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}