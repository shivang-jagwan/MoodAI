
import { Brain, Heart, Users, BookOpen, Wind, Moon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureTeasersProps {
  isDarkMode: boolean;
}

const FeatureTeasers = ({ isDarkMode }: FeatureTeasersProps) => {
  const features = [
    {
      icon: Brain,
      title: 'AI Therapy Chat',
      description: 'Context-aware, empathetic conversations available 24/7',
      color: 'purple',
      delay: '0s'
    },
    {
      icon: Heart,
      title: 'Mood Tracker',
      description: 'Visual insights into your emotional patterns and trends',
      color: 'pink',
      delay: '0.1s'
    },
    {
      icon: Users,
      title: 'Safe Space Community',
      description: 'Anonymous support groups with AI-moderated discussions',
      color: 'blue',
      delay: '0.2s'
    },
    {
      icon: BookOpen,
      title: 'Mind Journaling',
      description: 'Guided prompts and freeform writing for self-reflection',
      color: 'green',
      delay: '0.3s'
    },
    {
      icon: Wind,
      title: 'Breathing Exercises',
      description: 'Guided breathing sessions with calming animations',
      color: 'cyan',
      delay: '0.4s'
    },
    {
      icon: Moon,
      title: 'Dream Journal',
      description: 'Track sleep patterns and dream symbolism analysis',
      color: 'indigo',
      delay: '0.5s'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: isDarkMode 
        ? 'from-purple-600/20 to-purple-800/20 border-purple-500/30 shadow-purple-500/20 text-purple-400 hover:border-purple-400'
        : 'from-purple-100 to-purple-200 border-purple-300 shadow-purple-300/30 text-purple-600 hover:border-purple-500',
      pink: isDarkMode 
        ? 'from-pink-600/20 to-pink-800/20 border-pink-500/30 shadow-pink-500/20 text-pink-400 hover:border-pink-400'
        : 'from-pink-100 to-pink-200 border-pink-300 shadow-pink-300/30 text-pink-600 hover:border-pink-500',
      blue: isDarkMode 
        ? 'from-blue-600/20 to-blue-800/20 border-blue-500/30 shadow-blue-500/20 text-blue-400 hover:border-blue-400'
        : 'from-blue-100 to-blue-200 border-blue-300 shadow-blue-300/30 text-blue-600 hover:border-blue-500',
      green: isDarkMode 
        ? 'from-green-600/20 to-green-800/20 border-green-500/30 shadow-green-500/20 text-green-400 hover:border-green-400'
        : 'from-green-100 to-green-200 border-green-300 shadow-green-300/30 text-green-600 hover:border-green-500',
      cyan: isDarkMode 
        ? 'from-cyan-600/20 to-cyan-800/20 border-cyan-500/30 shadow-cyan-500/20 text-cyan-400 hover:border-cyan-400'
        : 'from-cyan-100 to-cyan-200 border-cyan-300 shadow-cyan-300/30 text-cyan-600 hover:border-cyan-500',
      indigo: isDarkMode 
        ? 'from-indigo-600/20 to-indigo-800/20 border-indigo-500/30 shadow-indigo-500/20 text-indigo-400 hover:border-indigo-400'
        : 'from-indigo-100 to-indigo-200 border-indigo-300 shadow-indigo-300/30 text-indigo-600 hover:border-indigo-500'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="features" className={`py-20 px-4 transition-all duration-1000 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-blue-50/30 via-purple-50/30 to-pink-50/30'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Your Mental Wellness{' '}
            <span className={isDarkMode 
              ? 'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'
            }>
              Toolkit
            </span>
          </h2>
          <p className={`text-xl transition-all duration-1000 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Discover tools designed to support your journey toward better mental health
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer border-2 bg-gradient-to-br ${getColorClasses(feature.color)} ${
                isDarkMode ? 'bg-gray-800/30' : 'bg-white/70'
              }`}
              style={{ animationDelay: feature.delay }}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 bg-gradient-to-br ${getColorClasses(feature.color)}`}>
                  <feature.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-lg leading-relaxed transition-all duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${getColorClasses(feature.color)}`}></div>
                
                {/* Coming Soon Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700/80 text-gray-300 border border-gray-600' 
                    : 'bg-white/80 text-gray-600 border border-gray-300'
                }`}>
                  Coming Soon
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 rounded-lg animate-pulse bg-gradient-to-r ${getColorClasses(feature.color)}`} style={{ padding: '2px' }}>
                    <div className={`h-full w-full rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTeasers;
