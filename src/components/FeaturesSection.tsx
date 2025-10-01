import { Zap, Smartphone, Search, Palette, Code, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with cutting-edge performance that keeps visitors engaged.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Perfect display on all devices - phones, tablets, and desktops.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built-in SEO best practices to help you rank higher on Google.",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "Unique designs tailored to your brand identity and business goals.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Modern, maintainable code built with the latest web technologies.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Focused",
    description: "Designed to turn visitors into customers with strategic CTAs.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Webitta
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We combine stunning design with powerful functionality to create websites that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
