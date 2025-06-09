
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X, Star, Heart, Users, Brain, BookOpen, Wind, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CrisisSection from '@/components/CrisisSection';
import FeatureTeasers from '@/components/FeatureTeasers';
import WaitlistSection from '@/components/WaitlistSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import BackgroundAnimation from '@/components/BackgroundAnimation';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen transition-all duration-1000 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50'}`}>
      <BackgroundAnimation isDarkMode={isDarkMode} />
      <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HeroSection isDarkMode={isDarkMode} />
      <CrisisSection isDarkMode={isDarkMode} />
      <FeatureTeasers isDarkMode={isDarkMode} />
      <WaitlistSection isDarkMode={isDarkMode} />
      <TestimonialsSection isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Index;
