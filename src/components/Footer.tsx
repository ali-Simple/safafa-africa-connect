import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Send,
  FileText,
  Shield,
  Recycle
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Kraftliner", href: "#products" },
        { name: "Testliner", href: "#products" },
        { name: "White Top Kraftliner", href: "#products" },
        { name: "Semi-Chemical Fluting", href: "#products" },
        { name: "Coated Papers", href: "#products" },
        { name: "Corrugation Chemicals", href: "#products" }
      ]
    },
    {
      title: "Markets",
      links: [
        { name: "Nigeria", href: "#africa" },
        { name: "Ghana", href: "#africa" },
        { name: "Kenya", href: "#africa" },
        { name: "South Africa", href: "#africa" },
        { name: "Angola", href: "#africa" },
        { name: "All African Markets", href: "#africa" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Global Partnerships", href: "#partnerships" },
        { name: "Quality Standards", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "News & Updates", href: "#" },
        { name: "Careers", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Technical Data Sheets", href: "#" },
        { name: "Product Catalog", href: "#" },
        { name: "Shipping & Logistics", href: "#" },
        { name: "Quality Certificates", href: "#" },
        { name: "Payment Terms", href: "#" },
        { name: "Contact Support", href: "#contact" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t border-border">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Industry Insights
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest news on paper markets, African corrugation industry trends, 
              and exclusive offers from SAFAFA IMPEX.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address"
                type="email"
                className="flex-1"
              />
              <Button variant="corporate">
                Subscribe
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              No spam, unsubscribe anytime. Privacy policy applies.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="text-2xl font-bold text-gradient">
                    SAFAFA IMPEX
                  </div>
                  <div className="ml-2 text-sm text-muted-foreground font-medium">
                    LIMITED
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Your trusted partner in corrugation industry supply across Africa. 
                  Over a decade of excellence in delivering premium paper grades 
                  and chemicals from global mills to African manufacturers.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Business Bay, Dubai, UAE
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    +971-4-XXX-XXXX
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    info@safafaimpex.com
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Instagram className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Standards */}
        <div className="py-8 border-t border-border">
          <div className="text-center mb-6">
            <h4 className="font-semibold mb-4">Quality & Sustainability Standards</h4>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">FSC Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Recycle className="w-5 h-5 text-secondary" />
                <span className="text-sm text-muted-foreground">PEFC Chain of Custody</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">ISO 9001:2015</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-secondary" />
                <span className="text-sm text-muted-foreground">Dubai Chamber Member</span>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} SAFAFA IMPEX LIMITED. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;