import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, TrendingUp, Star } from "lucide-react";
import africaImage from "@/assets/africa-network.jpg";

const AfricaMarkets = () => {
  const countries = [
    {
      name: "Nigeria",
      region: "West Africa",
      clients: "25+",
      volume: "150K+ tons/year",
      specialties: ["Kraftliner", "Testliner", "Chemicals"],
      growth: "+35%"
    },
    {
      name: "Ghana",
      region: "West Africa", 
      clients: "15+",
      volume: "80K+ tons/year",
      specialties: ["White Top Kraftliner", "SCF"],
      growth: "+28%"
    },
    {
      name: "Angola",
      region: "Central Africa",
      clients: "12+",
      volume: "65K+ tons/year", 
      specialties: ["Kraftliner", "Coated Papers"],
      growth: "+42%"
    },
    {
      name: "Mozambique",
      region: "East Africa",
      clients: "8+",
      volume: "45K+ tons/year",
      specialties: ["Testliner", "Fluting"],
      growth: "+31%"
    },
    {
      name: "Kenya",
      region: "East Africa",
      clients: "18+",
      volume: "95K+ tons/year",
      specialties: ["Premium Grades", "Chemicals"],
      growth: "+25%"
    },
    {
      name: "South Africa",
      region: "Southern Africa",
      clients: "22+",
      volume: "120K+ tons/year",
      specialties: ["All Grades", "Specialty Chemicals"],
      growth: "+18%"
    }
  ];

  const testimonials = [
    {
      company: "Packpro Industries",
      country: "Angola - Lobito",
      quote: "SAFAFA IMPEX has been our trusted partner for premium kraftliner supply. Their consistency in quality and delivery has enabled our 40% growth over the past 3 years.",
      executive: "Alim Devjani",
      position: "Procurement"
    },
    {
      company: "FSF Global",
      country: "Angola - Luanda", 
      quote: "The technical support and customized chemical formulations from SAFAFA have revolutionized our production efficiency. Truly a world-class supplier.",
      executive: "Fatema Bhojani",
      position: "Procurement Head"
    },
    {
      company: "West African Corrugated",
      country: "Ghana",
      quote: "In a challenging market, SAFAFA's reliability stands out. They understand African logistics and deliver when others cannot.",
      executive: "Kwame Asante",
      position: "CEO"
    }
  ];

  return (
    <section id="africa" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Leading <span className="text-gradient">African Markets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep market expertise and established relationships across Africa's 
            fastest-growing corrugation manufacturing hubs.
          </p>
        </div>

        {/* Africa Map Visual */}
        <div className="relative mb-16">
          <Card className="card-elegant overflow-hidden">
            <div className="relative h-96 md:h-[500px]">
              <img 
                src={africaImage}
                alt="SAFAFA IMPEX African Market Network"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-secondary">100+</div>
                    <div className="text-sm text-muted-foreground">Active Clients</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary">500K+</div>
                    <div className="text-sm text-muted-foreground">Tons/Year</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-secondary">30%</div>
                    <div className="text-sm text-muted-foreground">Avg Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Markets */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Key Market Presence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <Card key={index} className="card-elegant group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      {country.name}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {country.region}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Clients</div>
                      <div className="text-lg font-semibold">{country.clients}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Volume</div>
                      <div className="text-lg font-semibold">{country.volume}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground mb-2">Specialties</div>
                    <div className="flex flex-wrap gap-1">
                      {country.specialties.map((specialty, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-secondary" />
                      <span className="text-secondary font-semibold">{country.growth}</span>
                      <span className="text-xs text-muted-foreground">YoY Growth</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">What Our African Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{testimonial.executive}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{testimonial.company}</div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {testimonial.country}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Africa Trusts SAFAFA */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-elegant bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/20">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <Users className="w-16 h-16 mx-auto mb-6 text-secondary" />
                <h3 className="text-3xl font-bold mb-4">
                  Why Africa Trusts SAFAFA IMPEX
                </h3>
                <p className="text-xl text-muted-foreground">
                  A decade of building lasting partnerships through reliability, 
                  local expertise, and unwavering commitment to African growth.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Local Market Knowledge</h4>
                    <p className="text-sm text-muted-foreground">
                      Deep understanding of African logistics, regulations, and business culture
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Consistent Growth</h4>
                    <p className="text-sm text-muted-foreground">
                      Supporting client expansion with reliable supply and competitive pricing
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Long-term Relationships</h4>
                    <p className="text-sm text-muted-foreground">
                      Building partnerships that grow with your business for sustainable success
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quality Assurance</h4>
                    <p className="text-sm text-muted-foreground">
                      Rigorous quality control and technical support for optimal results
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button variant="sustainability" size="lg">
                  Partner With Us in Africa
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AfricaMarkets;