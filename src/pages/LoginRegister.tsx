import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Globe, ArrowRight, Shield, Heart, Users } from 'lucide-react';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { isLogin, formData });
    // Handle authentication logic here
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false
    });
  };

  const features = [
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Available in 6+ Indian languages'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is protected with bank-level security'
    },
    {
      icon: Heart,
      title: 'Community Driven',
      description: 'Supported by trained volunteers across India'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Get help from experienced advisors'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-3">
              <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">SchemeBot</span>
            </Link>
            <p className="text-gray-600 mt-2">
              {isLogin ? 'Welcome back!' : 'Join thousands of women accessing government schemes'}
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {isLogin ? 'Sign In' : 'Create Account'}
              </h2>
              <p className="text-gray-600 mt-1">
                {isLogin 
                  ? 'Enter your credentials to access your account' 
                  : 'Get started with your personalized scheme recommendations'
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field (Register only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Enter your full name"
                    required={!isLogin}
                  />
                </div>
              )}

              {/* Phone Field (Register only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Enter your phone number"
                    required={!isLogin}
                  />
                </div>
              )}

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder={isLogin ? 'Enter your password' : 'Create a strong password'}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {!isLogin && (
                  <p className="text-xs text-gray-500 mt-1">
                    Password must be at least 8 characters long
                  </p>
                )}
              </div>

              {/* Confirm Password (Register only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Confirm your password"
                    required={!isLogin}
                  />
                </div>
              )}

              {/* Terms and Conditions (Register only) */}
              {!isLogin && (
                <div>
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 mt-1"
                      required={!isLogin}
                    />
                    <span className="text-sm text-gray-600">
                      I agree to the{' '}
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 underline">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>
              )}

              {/* Forgot Password (Login only) */}
              {isLogin && (
                <div className="text-right">
                  <a href="#" className="text-sm text-emerald-600 hover:text-emerald-700 underline">
                    Forgot your password?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Alternative Action */}
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-gray-600">
                  {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="text-emerald-600 hover:text-emerald-700 font-medium underline"
                  >
                    {isLogin ? 'Sign up here' : 'Sign in here'}
                  </button>
                </p>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">
              By continuing, you acknowledge that you have read and agree to our data practices.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Features */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-emerald-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">
              Empowering Women Through Technology
            </h3>
            <p className="text-emerald-100 text-lg leading-relaxed">
              Join thousands of women who have successfully accessed government schemes 
              and transformed their lives with SchemeBot's AI-powered assistance.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                  <p className="text-emerald-100 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">📊</span>
              </div>
              <div>
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-emerald-100 text-sm">Women Empowered</div>
              </div>
            </div>
            <p className="text-emerald-100 text-sm">
              "SchemeBot helped me discover and successfully apply for a business loan. 
              It changed my life!" - Priya S., Mumbai
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 right-32 w-16 h-16 bg-white/10 rounded-full"></div>
      </div>
    </div>
  );
};

export default LoginRegister;