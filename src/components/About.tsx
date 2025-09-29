import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Target, Eye, Award } from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Established in Dubai as a premier paper trading company"
    },
    {
      year: "2016",
      title: "African Expansion",
      description: "First major contracts in Nigeria and Ghana markets"
    },
    {
      year: "2019",
      title: "Global Partnerships",
      description: "Strategic partnerships with Sappi, Klabin, and WestRock"
    },
    {
      year: "2022",
      title: "Market Leadership",
      description: "Serving 15+ African countries with premium materials"
    },
    {
      year: "2024",
      title: "Sustainability Focus",
      description: "Leading eco-friendly supply chain initiatives"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-gradient">SAFAFA IMPEX</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over a decade of excellence in global paper trading, with deep expertise 
            in the African corrugation industry and unwavering commitment to quality.
          </p>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="card-elegant text-center p-8">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-muted-foreground">
                To be Africa's most trusted supplier of premium corrugation materials, 
                enabling our clients to build sustainable packaging solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="card-elegant text-center p-8">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-muted-foreground">
                To revolutionize the corrugation supply chain across Africa through 
                innovation, reliability, and sustainable business practices.
              </p>
            </CardContent>
          </Card>

          <Card className="card-elegant text-center p-8">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Values</h3>
              <p className="text-muted-foreground">
                Excellence, integrity, and sustainability guide every partnership 
                we build and every product we deliver across global markets.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Timeline - Horizontal */}
        <div className="w-full">
          <h3 className="text-3xl font-bold text-center mb-16">Our Journey</h3>
          
          {/* Horizontal Timeline Container */}
          <div className="relative overflow-x-auto pb-8">
            <div className="flex min-w-max px-8 relative">
              {/* Horizontal Timeline Line */}
              <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-secondary/40 rounded-full shadow-lg" />
              
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className="relative flex-shrink-0 w-80 mr-8 last:mr-0 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline Dot with Advanced Animation */}
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background shadow-xl transition-all duration-500 group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-primary/40" />
                      <div className="absolute inset-0 w-8 h-8 bg-primary/30 rounded-full animate-ping" />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="text-center mb-6">
                    <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      {milestone.year}
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <Card className="card-elegant mt-16 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/10">
                    <CardContent className="p-6 text-center">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-card border-2 border-border rotate-45" />
                      <h4 className="text-xl font-bold mb-3 text-gradient group-hover:scale-105 transition-transform duration-300">
                        {milestone.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {milestone.description}
                      </p>
                      
                      {/* Decorative Elements */}
                      <div className="mt-4 flex justify-center space-x-1 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                        <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-1 h-1 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Progress Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                </div>
              ))}
            </div>
            
            {/* Gradient Overlays for Scroll Indication */}
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
          </div>
          
          {/* Journey Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Years of Excellence</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">African Countries</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Satisfied Clients</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="card-elegant max-w-4xl mx-auto hero-gradient text-white">
            <CardContent className="p-12">
              <Building2 className="w-16 h-16 mx-auto mb-6 text-white/80" />
              <h3 className="text-3xl font-bold mb-4">
                Ready to Partner with Industry Leaders?
              </h3>
              <p className="text-xl mb-8 text-white/90">
                Join hundreds of corrugation manufacturers who trust SAFAFA IMPEX 
                for their premium material needs across Africa.
              </p>
              <Button 
                variant="corporate" 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Partnership
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;