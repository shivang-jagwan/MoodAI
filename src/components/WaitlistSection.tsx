
import { useState } from 'react';
import { Mail, User, Gift, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface WaitlistSectionProps {
  isDarkMode: boolean;
}

const WaitlistSection = ({ isDarkMode }: WaitlistSectionProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would normally send the data to your backend
      console.log('Waitlist signup:', { name, email });
    }
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className={`py-20 px-4 transition-all duration-1000 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-gray-900 via-green-900/10 to-gray-900' 
          : 'bg-gradient-to-b from-green-50/30 via-blue-50/30 to-purple-50/30'
      }`}>
        <div className="max-w-2xl mx-auto text-center">
          <Card className={`transition-all duration-500 ${
            isDarkMode 
              ? 'bg-gray-800/50 border-green-500/30 shadow-lg shadow-green-500/20' 
              : 'bg-white/70 border-green-300 shadow-lg shadow-green-300/30'
          }`}>
            <CardContent className="p-12">
              <div className={`w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30' 
                  : 'bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300/50'
              }`}>
                <Gift className={`w-10 h-10 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              </div>
              
              <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                🎉 You're in!
              </h3>
              
              <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Welcome to the Mood-AI early access list. Spread the word and climb the priority list!
              </p>

              <div className={`p-6 rounded-xl mb-8 ${
                isDarkMode 
                  ? 'bg-gray-700/50 border border-green-500/20' 
                  : 'bg-green-50 border border-green-200'
              }`}>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
                  💡 Pro Tip: Invite 3 friends for instant beta access!
                </p>
              </div>

              <Button
                onClick={() => setIsSubmitted(false)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                }`}
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share with Friends
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className={`py-20 px-4 transition-all duration-1000 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900' 
        : 'bg-gradient-to-b from-purple-50/30 via-blue-50/30 to-pink-50/30'
    }`}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Join the{' '}
          <span className={isDarkMode 
            ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' 
            : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'
          }>
            Revolution
          </span>
        </h2>

        <p className={`text-xl mb-12 transition-all duration-1000 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Be among the first to experience the future of mental wellness
        </p>

        <Card className={`transition-all duration-500 hover:shadow-2xl ${
          isDarkMode 
            ? 'bg-gray-800/50 border-purple-500/30 shadow-lg shadow-purple-500/20' 
            : 'bg-white/70 border-purple-300 shadow-lg shadow-purple-300/30'
        }`}>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <Input
                  type="text"
                  placeholder="Name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`pl-12 py-3 rounded-xl transition-all duration-300 focus:scale-105 ${
                    isDarkMode 
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500' 
                      : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                  }`}
                />
              </div>

              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <Input
                  type="email"
                  placeholder="Email (required)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`pl-12 py-3 rounded-xl transition-all duration-300 focus:scale-105 ${
                    isDarkMode 
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500' 
                      : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                  }`}
                />
              </div>

              <Button
                type="submit"
                className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25'
                } group`}
              >
                Join Early Access
                <Mail className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </form>

            <div className={`mt-8 p-4 rounded-xl ${
              isDarkMode 
                ? 'bg-gray-700/30 border border-purple-500/20' 
                : 'bg-purple-50 border border-purple-200'
            }`}>
              <p className={`text-sm ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                🚀 <strong>Referral Bonus:</strong> Invite 3 friends = instant beta access
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WaitlistSection;
