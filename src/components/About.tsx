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

        {/* Company Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />
            
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                
                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
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
              <Button variant="corporate" size="xl" className="bg-white text-primary hover:bg-white/90">
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