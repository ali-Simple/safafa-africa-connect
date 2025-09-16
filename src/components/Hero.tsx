import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-safafa.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="SAFAFA IMPEX - Corrugation Industry Excellence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Trusted Partner in
              <span className="block text-secondary-light">
                Corrugation Industry
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
              Supplying premium paper grades and chemicals across Africa for over a decade. 
              From Dubai to every corner of Africa - we deliver excellence in corrugation materials.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 mb-12" style={{ animationDelay: "0.4s" }}>
            <Button variant="corporate" size="xl" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="#contact">
                Request Quote
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="corporate-outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="#products">Explore Products</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-slide-up grid grid-cols-1 md:grid-cols-3 gap-8" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center space-x-4 text-white">
              <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <div className="text-3xl font-bold">15+</div>
                <div className="text-white/80">African Countries</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <div className="text-3xl font-bold">100+</div>
                <div className="text-white/80">Global Clients</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <div className="text-3xl font-bold">10+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;