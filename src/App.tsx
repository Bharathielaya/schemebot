import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, User, MessageCircle, FileText, Users, Settings } from 'lucide-react';
import HomePage from './pages/HomePage';
import ChatbotInterface from './pages/ChatbotInterface';
import UserProfile from './pages/UserProfile';
import SchemeRecommendations from './pages/SchemeRecommendations';
import ApplicationGuidance from './pages/ApplicationGuidance';
import VolunteerRequest from './pages/VolunteerRequest';
import AdminDashboard from './pages/AdminDashboard';
import LoginRegister from './pages/LoginRegister';

// Language Context
interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  languages: { code: string; name: string; flag: string }[];
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  languages: []
});

export const useLanguage = () => useContext(LanguageContext);

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, languages } = useLanguage();

  const navItems = [
    { path: '/', name: 'Home', icon: FileText },
    { path: '/chat', name: 'Chat', icon: MessageCircle },
    { path: '/profile', name: 'Profile', icon: User },
    { path: '/schemes', name: 'Schemes', icon: FileText },
    { path: '/guidance', name: 'Guidance', icon: Users },
    { path: '/volunteer', name: 'Support', icon: Users },
    { path: '/admin', name: 'Admin', icon: Settings },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">SchemeBot</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(({ path, name, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{name}</span>
              </Link>
            ))}
          </div>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white"
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            {navItems.map(({ path, name, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 text-base font-medium transition-colors ${
                  location.pathname === path
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

function App() {
  const [language, setLanguage] = useState('en');
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' }
  ];

  const languageContextValue = {
    language,
    setLanguage,
    languages
  };

  return (
    <LanguageContext.Provider value={languageContextValue}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/*" element={
              <>
                <Navigation />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/chat" element={<ChatbotInterface />} />
                  <Route path="/profile" element={<UserProfile />} />
                  <Route path="/schemes" element={<SchemeRecommendations />} />
                  <Route path="/guidance" element={<ApplicationGuidance />} />
                  <Route path="/volunteer" element={<VolunteerRequest />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                </Routes>
              </>
            } />
          </Routes>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;