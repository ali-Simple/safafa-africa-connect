import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  Building2,
  Globe
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    productInterest: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Our team will contact you within 24 hours to discuss your requirements.",
      duration: 5000,
    });
    
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      productInterest: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Building2,
      title: "Dubai Headquarters",
      details: [
        "SAFAFA IMPEX LIMITED",
        "Business Bay, Dubai, UAE",
        "P.O. Box: XXXXX"
      ]
    },
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: [
        "+971-4-XXX-XXXX",
        "+971-50-XXX-XXXX (WhatsApp)",
        "Available 24/7 for urgent inquiries"
      ]
    },
    {
      icon: Mail,
      title: "Email Communication",
      details: [
        "info@safafaimpex.com",
        "sales@safafaimpex.com",
        "technical@safafaimpex.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Sunday - Thursday: 9:00 AM - 6:00 PM",
        "Friday - Saturday: Closed",
        "Emergency support available"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to partner with Africa's leading corrugation material supplier? 
            Contact our expert team for customized solutions and competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm mb-1">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Actions */}
              <Card className="card-elegant hero-gradient text-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Quick Connect
                  </h3>
                  <div className="space-y-3">
                    <Button 
                      variant="corporate" 
                      className="w-full bg-white text-primary hover:bg-white/90"
                      onClick={() => window.open('https://wa.me/971XXXXXXXX', '_blank')}
                    >
                      WhatsApp Chat
                    </Button>
                    <Button 
                      variant="corporate-outline" 
                      className="w-full border-white text-white hover:bg-white hover:text-primary"
                      onClick={() => window.location.href = 'tel:+971XXXXXXXX'}
                    >
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Send className="w-6 h-6 mr-3 text-primary" />
                  Send Us Your Inquiry
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and our sales team will respond within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your company name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+XXX XXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Select onValueChange={(value) => handleInputChange('country', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nigeria">Nigeria</SelectItem>
                          <SelectItem value="ghana">Ghana</SelectItem>
                          <SelectItem value="kenya">Kenya</SelectItem>
                          <SelectItem value="south-africa">South Africa</SelectItem>
                          <SelectItem value="angola">Angola</SelectItem>
                          <SelectItem value="mozambique">Mozambique</SelectItem>
                          <SelectItem value="ethiopia">Ethiopia</SelectItem>
                          <SelectItem value="tanzania">Tanzania</SelectItem>
                          <SelectItem value="uganda">Uganda</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="product">Product Interest</Label>
                      <Select onValueChange={(value) => handleInputChange('productInterest', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select product category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kraftliner">Kraftliner</SelectItem>
                          <SelectItem value="testliner">Testliner</SelectItem>
                          <SelectItem value="white-top">White Top Kraftliner</SelectItem>
                          <SelectItem value="scf">Semi-Chemical Fluting</SelectItem>
                          <SelectItem value="coated">Coated Papers</SelectItem>
                          <SelectItem value="chemicals">Corrugation Chemicals</SelectItem>
                          <SelectItem value="mixed">Mixed Requirements</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please describe your requirements, including quantities, specifications, and delivery timeline..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="corporate" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Submitting...</>
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. 
                    We'll use your information solely to respond to your inquiry.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="card-elegant overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
                <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">Visit Our Dubai Office</h3>
                <p className="text-muted-foreground">
                  Located in the heart of Dubai's business district, easily accessible 
                  for meetings and site visits. Schedule an appointment today.
                </p>
              </div>
              <div className="h-64 bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Google Maps integration would be embedded here</p>
                  <p className="text-sm">Business Bay, Dubai, UAE</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;