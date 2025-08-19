import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: "AI Readiness Assessment", path: "/services#audit" },
    { name: "Strategy & Roadmap", path: "/services#strategy" },
    { name: "Implementation", path: "/services#implementation" },
  ];
  
  const company = [
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  
  return (
    <footer className="bg-deep-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <Image 
                  src="/images/catalyst-circuit-logo.svg" 
                  alt="IgnitionAI Logo" 
                  fill
                  sizes="40px"
                />
              </div>
              <span className="text-xl font-bold">
                <span>Ignition</span>
                <span className="font-light">AI</span>
              </span>
            </div>
            <p className="text-cool-gray mb-4">
              Spark intelligent transformation for your business with AI solutions designed for measurable ROI.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.path}
                    className="text-cool-gray hover:text-ignition-orange transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="text-cool-gray hover:text-ignition-orange transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Contact Us</h3>
            <p className="text-cool-gray mb-2">Ready to spark transformation?</p>
            <Link href="/contact" className="inline-block bg-ignition-orange text-white px-4 py-2 rounded font-montserrat font-medium transition-all hover:brightness-110 hover:shadow-lg mb-4">
              Book Free AI Audit
            </Link>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-cool-gray">
          <p>&copy; {currentYear} IgnitionAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
