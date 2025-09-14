import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Beaker, 
  Package, 
  Recycle,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const Products = () => {
  const paperProducts = [
    {
      name: "Kraftliner",
      description: "High-strength virgin fiber liner for premium corrugated boxes",
      gsm: "125-200 GSM",
      applications: ["Export packaging", "Heavy-duty boxes", "Industrial packaging"],
      sustainability: "FSC Certified"
    },
    {
      name: "Testliner",
      description: "Recycled fiber liner offering excellent printing surface",
      gsm: "100-200 GSM",
      applications: ["General packaging", "Retail boxes", "E-commerce packaging"],
      sustainability: "100% Recycled"
    },
    {
      name: "White Top Kraftliner",
      description: "Premium bleached top surface for superior print quality",
      gsm: "125-300 GSM",
      applications: ["High-end packaging", "Branded boxes", "Premium displays"],
      sustainability: "FSC Certified"
    },
    {
      name: "Semi-Chemical Fluting (SCF)",
      description: "High-performance fluting medium with excellent stiffness",
      gsm: "100-160 GSM",
      applications: ["Heavy-duty corrugation", "Industrial boxes", "Export packaging"],
      sustainability: "PEFC Certified"
    },
    {
      name: "Coated Papers",
      description: "Specialized coated papers for enhanced print and performance",
      gsm: "150-400 GSM",
      applications: ["Luxury packaging", "Laminated boards", "Specialty applications"],
      sustainability: "Chain of Custody"
    }
  ];

  const chemicals = [
    {
      name: "Corrugation Starch",
      description: "High-quality adhesive starch for corrugated board production",
      purity: "99%+",
      packaging: "25kg bags, 1MT big bags",
      applications: ["Board bonding", "Surface sizing", "Strength enhancement"]
    },
    {
      name: "Borax Decahydrate",
      description: "Premium grade borax for starch modification and pH control",
      purity: "99.5%+",
      packaging: "25kg bags, bulk containers",
      applications: ["Starch cooking", "pH adjustment", "Viscosity control"]
    },
    {
      name: "Caustic Soda",
      description: "Industrial grade sodium hydroxide for pulp processing",
      purity: "98%+",
      packaging: "25kg bags, 1MT containers",
      applications: ["Pulp bleaching", "pH control", "Waste treatment"]
    },
    {
      name: "Specialty Additives",
      description: "Custom formulated additives for enhanced performance",
      purity: "Varies",
      packaging: "Custom packaging",
      applications: ["Wet strength", "Barrier properties", "Surface modification"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of paper grades and chemicals sourced from world's 
            leading mills to meet every corrugation industry requirement.
          </p>
        </div>

        {/* Paper Products Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">Paper Grades</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paperProducts.map((product, index) => (
              <Card key={index} className="card-elegant group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <Badge variant="secondary">{product.gsm}</Badge>
                  </div>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Package className="w-4 h-4 mr-2 text-primary" />
                      Applications
                    </h4>
                    <ul className="space-y-2">
                      {product.applications.map((app, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 mr-2 text-secondary" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Recycle className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-medium text-secondary">
                        {product.sustainability}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Chemicals Section */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Beaker className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold">Corrugation Chemicals</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {chemicals.map((chemical, index) => (
              <Card key={index} className="card-elegant group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{chemical.name}</CardTitle>
                    <Badge variant="outline">{chemical.purity}</Badge>
                  </div>
                  <p className="text-muted-foreground">{chemical.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">
                        Packaging
                      </h4>
                      <p className="text-sm">{chemical.packaging}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">
                        Applications
                      </h4>
                      <ul className="space-y-1">
                        {chemical.applications.map((app, i) => (
                          <li key={i} className="text-sm flex items-center">
                            <CheckCircle className="w-3 h-3 mr-2 text-secondary" />
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="group-hover:text-primary w-full">
                    Request Technical Data
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="card-elegant max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                Need Custom Specifications?
              </h3>
              <p className="text-xl mb-8 text-muted-foreground">
                Our technical team works with global mills to source products 
                that meet your exact requirements and industry standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="corporate" size="lg">
                  Request Custom Quote
                </Button>
                <Button variant="corporate-outline" size="lg">
                  Download Product Catalog
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Products;