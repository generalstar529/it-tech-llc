import { Link } from "wouter";
import { SiX, SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-semibold mb-3">IT Tech LLC</h3>
            <p className="text-sm text-muted-foreground">
              Empowering businesses through innovative technology solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Links</h3>
            <ul className="space-y-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#services", label: "Services" },
                { href: "#team", label: "Team" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Tech Street</li>
              <li>Silicon Valley, CA 94025</li>
              <li>contact@ittech.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Social</h3>
            <div className="flex space-x-4">
              {[
                { icon: SiX, href: "https://x.com" },
                { icon: SiLinkedin, href: "https://linkedin.com" },
                { icon: SiGithub, href: "https://github.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground max-w-6xl mx-auto">
          © {new Date().getFullYear()} IT Tech LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
