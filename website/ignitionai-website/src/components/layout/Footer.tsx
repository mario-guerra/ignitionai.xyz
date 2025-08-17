import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: "AI Needs Audit", path: "/services#audit" },
    { name: "Solution Design", path: "/services#design" },
    { name: "Implementation", path: "/services#implementation" },
  ];
  
  const company = [
    { name: "About Us", path: "/about" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  
  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
    { name: "GitHub", url: "https://github.com", icon: "github" },
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
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cool-gray hover:text-ignition-orange transition-colors"
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
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
            <p className="text-cool-gray">info@ignitionai.xyz</p>
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

// Helper function for social icons
const getSocialIcon = (icon: string) => {
  switch (icon) {
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 00.1.47V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      );
    case 'twitter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19.1 8.7c0-.3 0-.5-.1-.7 0-.1-.1-.1-.1-.2v-.2c-.2-.8-.5-1.4-.9-2-.4-.6-.9-1.1-1.4-1.5-.6-.4-1.2-.7-1.9-.9-.7-.2-1.4-.3-2.1-.3-.8 0-1.5.1-2.2.3-.7.2-1.4.5-2 .9-.6.4-1.1.9-1.5 1.5-.4.6-.7 1.2-.9 1.9-.2.7-.3 1.5-.3 2.3 0 .8.1 1.5.3 2.3.2.7.5 1.3.9 1.9.4.6.9 1.1 1.5 1.5.6.4 1.3.7 2 .9.7.2 1.4.3 2.2.3.8 0 1.5-.1 2.1-.3.7-.2 1.3-.5 1.9-.9.6-.4 1.1-.9 1.4-1.5.4-.6.7-1.2.9-2 .2-.7.3-1.5.3-2.3 0-.8-.1-1.5-.3-2.3zM17 8.4c.4.5.6 1 .8 1.6.1.6.2 1.3.2 1.9 0 .7-.1 1.3-.3 1.9-.2.6-.5 1.1-.8 1.5-.4.4-.8.8-1.3 1.1-.5.3-1 .5-1.6.7-.6.1-1.2.2-1.9.2-.7 0-1.3-.1-1.9-.2-.6-.1-1.2-.4-1.6-.7-.5-.3-.9-.7-1.3-1.1-.3-.4-.6-.9-.8-1.5-.2-.6-.3-1.2-.3-1.9 0-.7.1-1.3.3-1.9.2-.6.5-1.1.8-1.6.4-.4.8-.8 1.3-1.1.5-.3 1-.5 1.6-.7.6-.1 1.3-.2 1.9-.2.7 0 1.3.1 1.9.2.6.1 1.2.4 1.7.7.4.3.8.7 1.3 1.1z"></path>
        </svg>
      );
    case 'github':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"></path>
        </svg>
      );
    default:
      return null;
  }
};

export default Footer;
