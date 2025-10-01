import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/BookingDialog";
import { ExternalLink } from "lucide-react";
import restaurantImg from "@/assets/project-restaurant.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import corporateImg from "@/assets/project-corporate.jpg";
import fitnessImg from "@/assets/project-fitness.jpg";
import realestateImg from "@/assets/project-realestate.jpg";
import healthcareImg from "@/assets/project-healthcare.jpg";

const projects = [
  {
    name: "Celestial Delicacies",
    category: "Restaurant",
    image: restaurantImg,
    description: "Modern restaurant website with online ordering system",
  },
  {
    name: "StyleHub Boutique",
    category: "E-commerce",
    image: ecommerceImg,
    description: "Full-featured online fashion store with cart functionality",
  },
  {
    name: "TechCorp Solutions",
    category: "Corporate",
    image: corporateImg,
    description: "Professional corporate website with service showcase",
  },
  {
    name: "FitZone Gym",
    category: "Fitness",
    image: fitnessImg,
    description: "Dynamic fitness center site with class booking",
  },
  {
    name: "Premier Properties",
    category: "Real Estate",
    image: realestateImg,
    description: "Luxury real estate platform with property search",
  },
  {
    name: "CareFirst Medical",
    category: "Healthcare",
    image: healthcareImg,
    description: "Healthcare website with appointment scheduling",
  },
];

export function PortfolioSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Recent{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Take a look at some of the beautiful websites we've created for businesses just like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Overlay content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary rounded-full text-primary-foreground font-medium">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Want to see your business featured here?
          </p>
          <BookingDialog>
            <Button variant="cta" size="lg">
              Start Your Project
            </Button>
          </BookingDialog>
        </div>
      </div>
    </section>
  );
}
