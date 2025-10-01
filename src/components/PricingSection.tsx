import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/BookingDialog";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "£499",
    description: "Perfect for small businesses just getting started",
    features: [
      "5-page responsive website",
      "Mobile-optimized design",
      "Basic SEO setup",
      "Contact form integration",
      "1 month support",
      "Social media links",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "£999",
    description: "Ideal for growing businesses that need more",
    features: [
      "10-page responsive website",
      "Custom design & branding",
      "Advanced SEO optimization",
      "Blog setup & CMS",
      "3 months support",
      "Analytics integration",
      "Email integration",
      "Speed optimization",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "£1,999+",
    description: "For businesses requiring advanced features",
    features: [
      "Unlimited pages",
      "Premium custom design",
      "E-commerce functionality",
      "Advanced integrations",
      "6 months support",
      "Priority support",
      "Performance monitoring",
      "Custom features",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            No hidden fees. No surprises. Just honest pricing for quality work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-primary bg-card shadow-2xl"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 gradient-primary rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="text-4xl font-bold mb-2">
                  {plan.price}
                </div>
                <p className="text-sm text-muted-foreground">one-time payment</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <BookingDialog>
                <Button
                  variant={plan.popular ? "cta" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </Button>
              </BookingDialog>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Let's talk about your specific requirements.
          </p>
          <BookingDialog>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              Schedule a Custom Quote →
            </Button>
          </BookingDialog>
        </div>
      </div>
    </section>
  );
}
