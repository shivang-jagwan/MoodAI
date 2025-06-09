
import { useState, useEffect } from 'react';
import { Brain, Heart, Users, BookOpen, Wind, Moon, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';

const Features = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const features = [
    {
      icon: Brain,
      title: 'AI Therapy Chat',
      summary: 'Context-aware, empathetic conversations available 24/7',
      description: 'Our advanced AI understands cultural nuances and provides personalized therapeutic conversations in multiple Indian languages. Get instant support whenever you need it.',
      useCase: 'Perfect for late-night anxiety, relationship issues, or when you need someone to talk to without judgment.',
      color: 'purple',
      animation: 'Typing indicators, emotion recognition, and contextual responses'
    },
    {
      icon: Heart,
      title: 'Mood Tracker',
      summary: 'Visual heatmap, emotion logging, trends over time',
      description: 'Track your emotional patterns with beautiful visualizations. Identify triggers, monitor progress, and gain insights into your mental health journey.',
      useCase: 'Ideal for understanding mood patterns, sharing progress with therapists, or preparing for medical consultations.',
      color: 'pink',
      animation: 'Interactive mood calendar, trend graphs, and pattern recognition'
    },
    {
      icon: Users,
      title: 'Safe Space Community',
      summary: 'Anonymous rooms, AI moderation, post reactions',
      description: 'Connect with others in moderated support groups. Share experiences, find solidarity, and heal together in a safe, anonymous environment.',
      useCase: 'Great for finding peer support, sharing experiences, and learning from others with similar challenges.',
      color: 'blue',
      animation: 'Real-time chat, emoji reactions, and community badges'
    },
    {
      icon: BookOpen,
      title: 'Mind Journaling',
      summary: 'Freeform, guided prompts, export-to-PDF',
      description: 'Express yourself through guided journaling exercises and freeform writing. Export your thoughts as PDFs and track your personal growth.',
      useCase: 'Perfect for self-reflection, processing emotions, and maintaining a private record of your mental health journey.',
      color: 'green',
      animation: 'Writing prompts, mood-based themes, and progress tracking'
    },
    {
      icon: Wind,
      title: 'Breathing Exercises',
      summary: 'Guided sessions, soothing animations',
      description: 'Calm your mind with guided breathing exercises featuring beautiful animations and gentle audio cues designed to reduce stress and anxiety.',
      useCase: 'Essential for panic attacks, pre-presentation nerves, or daily stress management.',
      color: 'cyan',
      animation: 'Breathing circle animations, nature sounds, and progressive relaxation'
    },
    {
      icon: Moon,
      title: 'Dream Journal',
      summary: 'Symbol tracking, mood association, surreal UI',
      description: 'Record and analyze your dreams with our unique symbol-tracking system. Discover connections between your dreams and emotional state.',
      useCase: 'Valuable for understanding subconscious patterns, improving sleep quality, and exploring your inner psyche.',
      color: 'indigo',
      animation: 'Dream symbol library, lunar phase tracking, and mood correlations'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: isDarkMode 
        ? 'from-purple-600/20 to-purple-800/20 border-purple-500/30 shadow-purple-500/20 text-purple-400'
        : 'from-purple-100 to-purple-200 border-purple-300 shadow-purple-300/30 text-purple-600',
      pink: isDarkMode 
        ? 'from-pink-600/20 to-pink-800/20 border-pink-500/30 shadow-pink-500/20 text-pink-400'
        : 'from-pink-100 to-pink-200 border-pink-300 shadow-pink-300/30 text-pink-600',
      blue: isDarkMode 
        ? 'from-blue-600/20 to-blue-800/20 border-blue-500/30 shadow-blue-500/20 text-blue-400'
        : 'from-blue-100 to-blue-200 border-blue-300 shadow-blue-300/30 text-blue-600',
      green: isDarkMode 
        ? 'from-green-600/20 to-green-800/20 border-green-500/30 shadow-green-500/20 text-green-400'
        : 'from-green-100 to-green-200 border-green-300 shadow-green-300/30 text-green-600',
      cyan: isDarkMode 
        ? 'from-cyan-600/20 to-cyan-800/20 border-cyan-500/30 shadow-cyan-500/20 text-cyan-400'
        : 'from-cyan-100 to-cyan-200 border-cyan-300 shadow-cyan-300/30 text-cyan-600',
      indigo: isDarkMode 
        ? 'from-indigo-600/20 to-indigo-800/20 border-indigo-500/30 shadow-indigo-500/20 text-indigo-400'
        : 'from-indigo-100 to-indigo-200 border-indigo-300 shadow-indigo-300/30 text-indigo-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className={`min-h-screen transition-all duration-1000 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50'}`}>
      <BackgroundAnimation isDarkMode={isDarkMode} />
      <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
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

          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Mental Wellness{' '}
            <span className={isDarkMode 
              ? 'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'
            }>
              Toolkit
            </span>
          </h1>

          <p className={`text-xl md:text-2xl mb-12 transition-all duration-1000 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Comprehensive AI-powered tools designed for your mental health journey
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className={`group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border-2 bg-gradient-to-br ${getColorClasses(feature.color)} ${
                  isDarkMode ? 'bg-gray-800/30' : 'bg-white/70'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 md:p-12">
                  <div className={`grid md:grid-cols-3 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                    {/* Icon and Title */}
                    <div className={`text-center md:text-left ${index % 2 === 1 ? 'md:col-start-3' : ''}`}>
                      <div className={`w-20 h-20 mx-auto md:mx-0 mb-6 rounded-3xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 bg-gradient-to-br ${getColorClasses(feature.color)}`}>
                        <feature.icon className="w-10 h-10" />
                      </div>
                      
                      <h3 className={`text-3xl font-bold mb-4 transition-all duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {feature.title}
                      </h3>
                      
                      <p className={`text-lg font-medium mb-6 ${getColorClasses(feature.color).split(' ')[4]}`}>
                        {feature.summary}
                      </p>

                      <Button
                        disabled
                        className={`group/btn transition-all duration-300 hover:scale-105 ${
                          isDarkMode 
                            ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 border border-gray-600' 
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-600 border border-gray-300'
                        }`}
                      >
                        Try Now
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                      
                      <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        Coming Soon - Join waitlist!
                      </p>
                    </div>

                    {/* Content */}
                    <div className={`md:col-span-2 space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                      <div>
                        <h4 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          How it works
                        </h4>
                        <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature.description}
                        </p>
                      </div>

                      <div>
                        <h4 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          Perfect for
                        </h4>
                        <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature.useCase}
                        </p>
                      </div>

                      <div className={`p-4 rounded-xl ${
                        isDarkMode 
                          ? 'bg-gray-700/30 border border-gray-600/30' 
                          : 'bg-white/50 border border-gray-200'
                      }`}>
                        <h4 className={`text-lg font-semibold mb-2 ${getColorClasses(feature.color).split(' ')[4]}`}>
                          🎬 Interactive Demo Preview
                        </h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {feature.animation}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${getColorClasses(feature.color)}`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Features;
