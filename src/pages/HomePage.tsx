import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, FileText, MessageCircle, Shield, Globe, Heart } from 'lucide-react';
import { useLanguage } from '../App';

const HomePage = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      welcome: 'Welcome to SchemeBot',
      subtitle: 'Your AI-powered assistant for accessing government schemes and benefits',
      description: 'Empowering women across India with personalized guidance to discover and apply for government schemes that can transform their lives.',
      getStarted: 'Get Started',
      features: 'Key Features',
      multilingual: 'Multilingual Support',
      multilingualDesc: 'Available in 6+ Indian languages for better accessibility',
      personalized: 'Personalized Recommendations',
      personalizedDesc: 'Get scheme suggestions tailored to your profile and needs',
      stepByStep: 'Step-by-Step Guidance',
      stepByStepDesc: 'Detailed instructions for every application process',
      volunteerSupport: 'Community Support',
      volunteerSupportDesc: 'Connect with volunteers for additional assistance'
    },
    hi: {
      welcome: 'स्कीमबॉट में आपका स्वागत है',
      subtitle: 'सरकारी योजनाओं तक पहुंचने के लिए आपका AI-सहायक',
      description: 'भारत की महिलाओं को सरकारी योजनाओं की खोज और आवेदन के लिए व्यक्तिगत मार्गदर्शन प्रदान करना।',
      getStarted: 'शुरू करें',
      features: 'मुख्य विशेषताएं',
      multilingual: 'बहुभाषी समर्थन',
      multilingualDesc: 'बेहतर पहुंच के लिए 6+ भारतीय भाषाओं में उपलब्ध',
      personalized: 'व्यक्तिगत सुझाव',
      personalizedDesc: 'आपकी प्रोफ़ाइल और जरूरतों के अनुसार योजना सुझाव',
      stepByStep: 'चरणबद्ध मार्गदर्शन',
      stepByStepDesc: 'हर आवेदन प्रक्रिया के लिए विस्तृत निर्देश',
      volunteerSupport: 'सामुदायिक सहायता',
      volunteerSupportDesc: 'अतिरिक्त सहायता के लिए स्वयंसेवकों से जुड़ें'
    }
  };

  const t = translations[language] || translations.en;

  const features = [
    {
      icon: Globe,
      title: t.multilingual,
      description: t.multilingualDesc,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: FileText,
      title: t.personalized,
      description: t.personalizedDesc,
      color: 'text-emerald-600 bg-emerald-100'
    },
    {
      icon: Users,
      title: t.stepByStep,
      description: t.stepByStepDesc,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Heart,
      title: t.volunteerSupport,
      description: t.volunteerSupportDesc,
      color: 'text-pink-600 bg-pink-100'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.welcome}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
            
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
              {t.description}
            </p>
            
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link
                to="/chat"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t.getStarted}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/profile"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-600 text-lg font-medium rounded-xl text-emerald-600 bg-white hover:bg-emerald-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Create Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.features}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how SchemeBot makes accessing government benefits simple and accessible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-emerald-100">Government Schemes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">6</div>
              <div className="text-emerald-100">Languages Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-emerald-100">Women Helped</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Shield className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to discover your benefits?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of women who have successfully accessed government schemes through SchemeBot
          </p>
          <Link
            to="/profile"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-gray-900 bg-emerald-400 hover:bg-emerald-300 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;