import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Factory, Truck, Award } from "lucide-react";

const GlobalPartnerships = () => {
  const partners = [
    {
      name: "Sappi",
      country: "South Africa",
      specialty: "Premium Kraftliner & Coated Papers",
      relationship: "Strategic Partner"
    },
    {
      name: "Klabin",
      country: "Brazil", 
      specialty: "Kraftliner & White Top Kraftliner",
      relationship: "Preferred Supplier"
    },
    {
      name: "WestRock",
      country: "USA",
      specialty: "Recycled Testliner & SCF",
      relationship: "Global Partner"
    },
    {
      name: "Smurfit Kappa",
      country: "Ireland",
      specialty: "Sustainable Packaging Materials",
      relationship: "Long-term Partner"
    },
    {
      name: "DS Smith",
      country: "UK",
      specialty: "Recycled Corrugation Materials",
      relationship: "Strategic Alliance"
    },
    {
      name: "Stora Enso",
      country: "Finland",
      specialty: "Virgin Fiber Products",
      relationship: "Premium Partner"
    },
    {
      name: "Elof Hansson",
      country: "Sweden",
      specialty: "Nordic Paper Grades",
      relationship: "Trading Partner"
    },
    {
      name: "Fortex",
      country: "Turkey",
      specialty: "Mediterranean Region Supply",
      relationship: "Regional Partner"
    }
  ];

  const stats = [
    {
      icon: Globe,
      value: "25+",
      label: "Global Mill Partners",
      description: "Sourcing from world's leading manufacturers"
    },
    {
      icon: Factory,
      value: "15",
      label: "Production Facilities",
      description: "Direct relationships with mill production"
    },
    {
      icon: Truck,
      value: "500K+",
      label: "Tons Supplied Annually",
      description: "Consistent high-volume supply capability"
    },
    {
      icon: Award,
      value: "99.8%",
      label: "On-Time Delivery",
      description: "Reliable logistics and supply chain"
    }
  ];

  return (
    <section id="partnerships" className="py-20 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Global <span className="text-gradient">Partnerships</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic alliances with the world's leading paper mills ensure consistent 
            quality, competitive pricing, and reliable supply to our African clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="card-elegant text-center group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Trusted Mill Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="card-elegant group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {partner.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{partner.country}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {partner.relationship}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {partner.specialty}
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="text-xs text-secondary font-medium">Active Partnership</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-elegant hero-gradient text-white">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <Globe className="w-16 h-16 mx-auto mb-6 text-white/80" />
                <h3 className="text-3xl font-bold mb-4">
                  Why Global Mills Choose SAFAFA IMPEX
                </h3>
                <p className="text-xl text-white/90">
                  Our deep African market knowledge and logistics expertise make us 
                  the preferred partner for international mills expanding into Africa.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Factory className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Market Access</h4>
                  <p className="text-white/80 text-sm">
                    Direct access to established distribution networks across 15+ African countries
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Logistics Excellence</h4>
                  <p className="text-white/80 text-sm">
                    Efficient supply chain management from mill gate to client door
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Trust & Reliability</h4>
                  <p className="text-white/80 text-sm">
                    Decade-long track record of successful partnerships and timely payments
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GlobalPartnerships;