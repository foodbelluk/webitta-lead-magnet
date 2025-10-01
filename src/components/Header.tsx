import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/BookingDialog";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Webitta Logo" className="h-8" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("features")} className="text-sm hover:text-primary transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection("process")} className="text-sm hover:text-primary transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-sm hover:text-primary transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-sm hover:text-primary transition-colors">
              Testimonials
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <BookingDialog>
              <Button variant="cta">
                Book Appointment
              </Button>
            </BookingDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection("features")} 
              className="text-left hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("process")} 
              className="text-left hover:text-primary transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection("pricing")} 
              className="text-left hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")} 
              className="text-left hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <BookingDialog>
              <Button variant="cta" className="w-full">
                Book Appointment
              </Button>
            </BookingDialog>
          </nav>
        </div>
      )}
    </header>
  );
}
