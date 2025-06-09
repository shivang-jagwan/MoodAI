
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TestimonialsSectionProps {
  isDarkMode: boolean;
}

const TestimonialsSection = ({ isDarkMode }: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Finally, a mental health platform that understands Indian sensibilities. The AI chat feels so natural and non-judgmental.",
      author: "Priya, 24",
      location: "Mumbai",
      emoji: "😊",
      mood: "hopeful"
    },
    {
      text: "The mood tracking helped me identify patterns I never noticed. It's like having a personal therapist in my pocket.",
      author: "Arjun, 29",
      location: "Bangalore",
      emoji: "🌟",
      mood: "enlightened"
    },
    {
      text: "Being able to journal safely without fear of judgment has been transformative for my mental health journey.",
      author: "Neha, 26",
      location: "Delhi",
      emoji: "💚",
      mood: "grateful"
    },
    {
      text: "The breathing exercises during my anxiety attacks have been a game-changer. Simple yet incredibly effective.",
      author: "Rohit, 31",
      location: "Pune",
      emoji: "🧘‍♂️",
      mood: "calm"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getMoodColor = (mood: string) => {
    const colors = {
      hopeful: isDarkMode ? 'text-blue-400' : 'text-blue-600',
      enlightened: isDarkMode ? 'text-yellow-400' : 'text-yellow-600',
      grateful: isDarkMode ? 'text-green-400' : 'text-green-600',
      calm: isDarkMode ? 'text-purple-400' : 'text-purple-600'
    };
    return colors[mood as keyof typeof colors] || (isDarkMode ? 'text-gray-400' : 'text-gray-600');
  };

  return (
    <section className={`py-20 px-4 transition-all duration-1000 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900' 
        : 'bg-gradient-to-b from-blue-50/30 via-indigo-50/30 to-purple-50/30'
    }`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Stories of{' '}
          <span className={isDarkMode 
            ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
          }>
            Transformation
          </span>
        </h2>

        <p className={`text-xl mb-12 transition-all duration-1000 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Real experiences from our early testers
        </p>

        <div className="relative">
          <Card className={`transition-all duration-500 hover:shadow-2xl ${
            isDarkMode 
              ? 'bg-gray-800/50 border-blue-500/30 shadow-lg shadow-blue-500/20' 
              : 'bg-white/70 border-blue-300 shadow-lg shadow-blue-300/30'
          }`}>
            <CardContent className="p-12">
              {/* Stars */}
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 mx-1 fill-current ${
                      isDarkMode ? 'text-yellow-400' : 'text-yellow-500'
                    }`} 
                  />
                ))}
              </div>

              {/* Emoji */}
              <div className="text-6xl mb-8 animate-bounce" style={{ animationDuration: '2s' }}>
                {testimonials[currentIndex].emoji}
              </div>

              {/* Quote */}
              <blockquote className={`text-2xl md:text-3xl font-medium mb-8 leading-relaxed transition-all duration-500 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div className={`transition-all duration-500 ${
                getMoodColor(testimonials[currentIndex].mood)
              }`}>
                <p className="text-lg font-semibold">
                  {testimonials[currentIndex].author}
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="sm"
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-3 transition-all duration-300 hover:scale-110 ${
              isDarkMode 
                ? 'border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white bg-gray-800/50' 
                : 'border-gray-300 hover:border-blue-500 text-gray-700 hover:text-gray-900 bg-white/50'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="sm"
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-3 transition-all duration-300 hover:scale-110 ${
              isDarkMode 
                ? 'border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white bg-gray-800/50' 
                : 'border-gray-300 hover:border-blue-500 text-gray-700 hover:text-gray-900 bg-white/50'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? (isDarkMode ? 'bg-blue-400' : 'bg-blue-600')
                  : (isDarkMode ? 'bg-gray-600' : 'bg-gray-300')
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
