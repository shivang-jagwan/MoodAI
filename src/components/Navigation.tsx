
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const Navigation = ({ isDarkMode, setIsDarkMode }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'About', path: '/about' },
    { name: 'Support Us', path: '/support' },
    { name: 'Join Waitlist', path: '/waitlist' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gray-900/80 border-gray-700/50' 
        : 'bg-white/80 border-gray-200/50'
    } border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/25' 
                : 'bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/25'
            }`}>
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Mood<span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-white/50'
                } group`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                  isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`transition-all duration-300 hover:scale-110 ${
                isDarkMode 
                  ? 'border-gray-700 hover:border-purple-500 text-gray-300 hover:text-white' 
                  : 'border-gray-300 hover:border-purple-500 text-gray-700 hover:text-gray-900'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {/* Login Button */}
            <Button
              variant="outline"
              size="sm"
              className={`hidden md:flex items-center space-x-2 transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'border-gray-700 hover:border-purple-500 text-gray-300 hover:text-white' 
                  : 'border-gray-300 hover:border-purple-500 text-gray-700 hover:text-gray-900'
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden transition-all duration-300 ${
                isDarkMode 
                  ? 'border-gray-700 hover:border-purple-500 text-gray-300 hover:text-white' 
                  : 'border-gray-300 hover:border-purple-500 text-gray-700 hover:text-gray-900'
              }`}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden transition-all duration-300 border-t ${
            isDarkMode ? 'border-gray-700 bg-gray-900/95' : 'border-gray-200 bg-white/95'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md transition-all duration-300 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                variant="outline"
                size="sm"
                className={`w-full mt-4 justify-center ${
                  isDarkMode 
                    ? 'border-gray-700 hover:border-purple-500 text-gray-300 hover:text-white' 
                    : 'border-gray-300 hover:border-purple-500 text-gray-700 hover:text-gray-900'
                }`}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
