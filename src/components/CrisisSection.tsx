
import { useState, useEffect } from 'react';
import { TrendingUp, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CrisisSectionProps {
  isDarkMode: boolean;
}

const CrisisSection = ({ isDarkMode }: CrisisSectionProps) => {
  const [counters, setCounters] = useState({
    suffering: 0,
    psychiatrists: 0,
    livesToSave: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCounters(prev => ({
          suffering: Math.min(prev.suffering + 3, 197),
          psychiatrists: Math.min(prev.psychiatrists + 0.01, 0.75),
          livesToSave: Math.min(prev.livesToSave + 500, 32800)
        }));
      }, 50);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`py-20 px-4 transition-all duration-1000 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-900 via-red-900/10 to-gray-900' 
        : 'bg-gradient-to-b from-red-50/30 via-orange-50/30 to-yellow-50/30'
    }`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          India's{' '}
          <span className={isDarkMode ? 'text-red-400' : 'text-red-600'}>
            Silent Crisis
          </span>
        </h2>

        <p className={`text-xl mb-16 transition-all duration-1000 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Behind every statistic is a human story waiting to be heard
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Statistic 1 */}
          <div className={`p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
            isDarkMode 
              ? 'bg-gray-800/50 border border-red-500/20 shadow-lg shadow-red-500/10' 
              : 'bg-white/70 border border-red-200 shadow-lg shadow-red-200/50'
          }`}>
            <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
              isDarkMode 
                ? 'bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30' 
                : 'bg-gradient-to-r from-red-100 to-orange-100 border border-red-300/50'
            }`}>
              <Users className={`w-8 h-8 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} />
            </div>
            <h3 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
              {counters.suffering.toFixed(0)}M
            </h3>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Indians silently suffer from mental distress
            </p>
          </div>

          {/* Statistic 2 */}
          <div className={`p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
            isDarkMode 
              ? 'bg-gray-800/50 border border-orange-500/20 shadow-lg shadow-orange-500/10' 
              : 'bg-white/70 border border-orange-200 shadow-lg shadow-orange-200/50'
          }`}>
            <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
              isDarkMode 
                ? 'bg-gradient-to-r from-orange-600/20 to-yellow-600/20 border border-orange-500/30' 
                : 'bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-300/50'
            }`}>
              <TrendingUp className={`w-8 h-8 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`} />
            </div>
            <h3 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>
              {counters.psychiatrists.toFixed(2)}
            </h3>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Psychiatrists per 100K population
            </p>
          </div>

          {/* Statistic 3 */}
          <div className={`p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
            isDarkMode 
              ? 'bg-gray-800/50 border border-green-500/20 shadow-lg shadow-green-500/10' 
              : 'bg-white/70 border border-green-200 shadow-lg shadow-green-200/50'
          }`}>
            <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
              isDarkMode 
                ? 'bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30' 
                : 'bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300/50'
            }`}>
              <Heart className={`w-8 h-8 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
            </div>
            <h3 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
              {counters.livesToSave.toLocaleString()}
            </h3>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Lives we aim to save yearly
            </p>
          </div>
        </div>

        <Button
          onClick={scrollToFeatures}
          className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
            isDarkMode 
              ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg shadow-green-500/25' 
              : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/25'
          } group`}
        >
          How Mood-AI Helps
          <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default CrisisSection;
