
import { Link } from 'react-router-dom';
import { Mail, Heart, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer = ({ isDarkMode }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const supportLinks = [
    { name: 'Support Us', path: '/support' },
    { name: 'Join Waitlist', path: '/waitlist' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <footer className={`transition-all duration-1000 border-t ${
      isDarkMode 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-white/80 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 group mb-6">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/25' 
                  : 'bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/25'
              }`}>
                <span className="text-white font-bold">M</span>
              </div>
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Mood<span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>AI</span>
              </span>
            </Link>
            
            <p className={`text-sm leading-relaxed mb-6 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Democratizing mental wellness for 1.4B Indians through AI-powered compassionate care.
            </p>

            <div className="flex items-center space-x-2">
              <Mail className={`w-4 h-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <a 
                href="mailto:support@moodai.in" 
                className={`text-sm transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-purple-400' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                support@moodai.in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className={`text-lg font-semibold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-sm transition-all duration-300 hover:translate-x-1 ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-purple-400' 
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-1">
            <h4 className={`text-lg font-semibold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-sm transition-all duration-300 hover:translate-x-1 ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-purple-400' 
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h4 className={`text-lg font-semibold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                    isDarkMode 
                      ? 'bg-gray-800 hover:bg-purple-600 text-gray-400 hover:text-white shadow-purple-500/20' 
                      : 'bg-gray-100 hover:bg-purple-500 text-gray-600 hover:text-white shadow-purple-500/20'
                  }`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center ${
          isDarkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © {currentYear} MoodAI. Made with{' '}
            <Heart className={`inline w-4 h-4 mx-1 fill-current ${
              isDarkMode ? 'text-red-400' : 'text-red-500'
            }`} />
            for India's mental wellness.
          </p>
          
          <p className={`text-sm mt-4 md:mt-0 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Empowering minds, one conversation at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
