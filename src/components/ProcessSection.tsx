import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/BookingDialog";
import { MessageSquare, Paintbrush, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consultation",
    description: "We discuss your vision, goals, and requirements in detail.",
  },
  {
    icon: Paintbrush,
    number: "02",
    title: "Design",
    description: "Our designers create stunning mockups tailored to your brand.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    description: "We build your website with clean, efficient code.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description: "Your website goes live, ready to attract customers.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple & Streamlined{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From first consultation to final launch, we make the entire process smooth and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-secondary border-2 border-primary flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <BookingDialog>
            <Button variant="cta" size="xl">
              Start Your Project Today
            </Button>
          </BookingDialog>
        </div>
      </div>
    </section>
  );
}
