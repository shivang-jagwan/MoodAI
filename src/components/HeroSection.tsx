
import { useState } from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  isDarkMode: boolean;
}

const HeroSection = ({ isDarkMode }: HeroSectionProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-20 left-10 w-6 h-6 rounded-full animate-pulse ${
          isDarkMode ? 'bg-purple-500/30' : 'bg-purple-400/20'
        }`} style={{ animationDelay: '0s' }}></div>
        <div className={`absolute top-40 right-20 w-4 h-4 rounded-full animate-pulse ${
          isDarkMode ? 'bg-blue-500/30' : 'bg-blue-400/20'
        }`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute bottom-40 left-20 w-8 h-8 rounded-full animate-pulse ${
          isDarkMode ? 'bg-pink-500/30' : 'bg-pink-400/20'
        }`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute bottom-20 right-10 w-5 h-5 rounded-full animate-pulse ${
          isDarkMode ? 'bg-indigo-500/30' : 'bg-indigo-400/20'
        }`} style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Sparkles Icon */}
        <div className="flex justify-center mb-8">
          <div className={`p-4 rounded-full transition-all duration-500 hover:scale-110 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30' 
              : 'bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-300/50'
          }`}>
            <Sparkles className={`w-12 h-12 transition-all duration-500 ${
              isDarkMode ? 'text-purple-400' : 'text-purple-600'
            }`} />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          What would you like to{' '}
          <span 
            className={`relative inline-block transition-all duration-500 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent'
            }`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            explore
            {isHovering && (
              <span className={`absolute -inset-2 rounded-lg animate-pulse ${
                isDarkMode ? 'bg-purple-500/20' : 'bg-purple-300/20'
              }`}></span>
            )}
          </span>{' '}
          today?
        </h1>

        {/* Subtext */}
        <p className={`text-xl md:text-2xl mb-12 transition-all duration-1000 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Your personalized mental-wellness tools, just a click away.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            onClick={scrollToWaitlist}
            className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg shadow-purple-500/25' 
                : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg shadow-purple-500/25'
            } group`}
          >
            Join Waitlist
            <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
          
          <Button
            onClick={scrollToFeatures}
            variant="outline"
            className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 ${
              isDarkMode 
                ? 'border-gray-700 hover:border-purple-500 text-gray-300 hover:text-white hover:bg-purple-500/10' 
                : 'border-gray-300 hover:border-purple-500 text-gray-700 hover:text-gray-900 hover:bg-purple-50'
            } group`}
          >
            Explore Dashboard
            <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center animate-bounce">
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDarkMode ? 'border-gray-600' : 'border-gray-400'
          }`}>
            <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
              isDarkMode ? 'bg-purple-400' : 'bg-purple-600'
            }`}></div>
          </div>
          <p className={`mt-2 text-sm ${
            isDarkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
