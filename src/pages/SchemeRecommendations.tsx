import React, { useState } from 'react';
import { Search, Filter, Heart, DollarSign, GraduationCap, Briefcase, Baby, Home, Star, ExternalLink, CheckCircle } from 'lucide-react';

interface Scheme {
  id: string;
  name: string;
  description: string;
  category: string;
  eligibility: string[];
  benefits: string;
  documents: string[];
  matchScore: number;
  isBookmarked: boolean;
  applicationDeadline?: string;
  beneficiaries: number;
  avgProcessingTime: string;
}

const SchemeRecommendations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');
  
  const schemes: Scheme[] = [
    {
      id: '1',
      name: 'Pradhan Mantri MUDRA Yojana',
      description: 'Provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises for income generating activities.',
      category: 'entrepreneurship',
      eligibility: ['Women entrepreneurs', 'Age 18-65', 'No existing large loans'],
      benefits: 'Loan up to ₹10 lakh with low interest rates',
      documents: ['Aadhaar Card', 'PAN Card', 'Business Plan', 'Bank Statements'],
      matchScore: 95,
      isBookmarked: false,
      applicationDeadline: 'Open throughout the year',
      beneficiaries: 285000000,
      avgProcessingTime: '15-30 days'
    },
    {
      id: '2',
      name: 'Beti Bachao Beti Padhao',
      description: 'Aims to improve the child sex ratio and enable education of girl children through awareness and quality education.',
      category: 'education',
      eligibility: ['Families with girl children', 'Below poverty line families preferred'],
      benefits: 'Educational scholarships and cash incentives',
      documents: ['Birth Certificate', 'School Admission Proof', 'Income Certificate'],
      matchScore: 88,
      isBookmarked: true,
      beneficiaries: 640000,
      avgProcessingTime: '7-14 days'
    },
    {
      id: '3',
      name: 'Janani Suraksha Yojana',
      description: 'Provides cash assistance to pregnant women for institutional delivery to reduce maternal and infant mortality.',
      category: 'healthcare',
      eligibility: ['Pregnant women', 'BPL families', 'Age 19+ for first two live births'],
      benefits: '₹1,400 (rural) / ₹1,000 (urban) cash assistance',
      documents: ['Pregnancy Certificate', 'Aadhaar Card', 'BPL Certificate'],
      matchScore: 82,
      isBookmarked: false,
      beneficiaries: 118000000,
      avgProcessingTime: '5-10 days'
    },
    {
      id: '4',
      name: 'Mahila Shakti Kendra',
      description: 'Empowers rural women through community participation and skill development at village level.',
      category: 'empowerment',
      eligibility: ['Rural women', 'Age 18-50', 'Willing to participate in community activities'],
      benefits: 'Skill training, employment opportunities, leadership development',
      documents: ['Aadhaar Card', 'Address Proof', 'Community Participation Certificate'],
      matchScore: 76,
      isBookmarked: false,
      beneficiaries: 150000,
      avgProcessingTime: '21-45 days'
    },
    {
      id: '5',
      name: 'Pradhan Mantri Awas Yojana (PMAY)',
      description: 'Provides affordable housing for women and economically weaker sections.',
      category: 'housing',
      eligibility: ['Women as co-owner/owner', 'Household income < ₹18 lakh', 'First-time home buyer'],
      benefits: 'Subsidy up to ₹2.67 lakh on home loans',
      documents: ['Income Certificate', 'Property Documents', 'Aadhaar Card', 'Bank Statements'],
      matchScore: 70,
      isBookmarked: true,
      beneficiaries: 12000000,
      avgProcessingTime: '30-60 days'
    },
    {
      id: '6',
      name: 'Stand Up India Scheme',
      description: 'Facilitates bank loans between ₹10 lakh to ₹1 crore to women and SC/ST entrepreneurs.',
      category: 'entrepreneurship',
      eligibility: ['Women entrepreneurs', 'New business venture', 'Manufacturing/Service/Trading sector'],
      benefits: 'Bank loans ₹10 lakh to ₹1 crore with government guarantee',
      documents: ['Business Plan', 'Aadhaar Card', 'Educational Certificates', 'Experience Proof'],
      matchScore: 92,
      isBookmarked: false,
      beneficiaries: 134000,
      avgProcessingTime: '45-90 days'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Schemes', icon: Star },
    { id: 'entrepreneurship', name: 'Entrepreneurship', icon: Briefcase },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'housing', name: 'Housing', icon: Home },
    { id: 'empowerment', name: 'Empowerment', icon: Baby }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedSchemes = [...filteredSchemes].sort((a, b) => {
    switch (sortBy) {
      case 'relevance':
        return b.matchScore - a.matchScore;
      case 'beneficiaries':
        return b.beneficiaries - a.beneficiaries;
      case 'processing-time':
        return a.avgProcessingTime.localeCompare(b.avgProcessingTime);
      default:
        return 0;
    }
  });

  const toggleBookmark = (schemeId: string) => {
    // Handle bookmark toggle
    console.log('Toggle bookmark for scheme:', schemeId);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Scheme Recommendations</h1>
        <p className="text-lg text-gray-600">
          Personalized government schemes based on your profile
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search schemes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="beneficiaries">Sort by Popularity</option>
              <option value="processing-time">Sort by Processing Time</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Found <span className="font-semibold text-gray-900">{sortedSchemes.length}</span> schemes matching your criteria
        </p>
      </div>

      {/* Scheme Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sortedSchemes.map(scheme => (
          <div key={scheme.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
            {/* Card Header */}
            <div className="p-6 pb-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    scheme.matchScore >= 90 ? 'bg-green-500' :
                    scheme.matchScore >= 80 ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}></div>
                  <span className="text-sm font-medium text-gray-600">
                    {scheme.matchScore}% Match
                  </span>
                </div>
                <button
                  onClick={() => toggleBookmark(scheme.id)}
                  className={`p-2 rounded-full transition-colors ${
                    scheme.isBookmarked
                      ? 'text-red-500 bg-red-50 hover:bg-red-100'
                      : 'text-gray-400 bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${scheme.isBookmarked ? 'fill-current' : ''}`} />
                </button>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{scheme.name}</h3>
              <p className="text-gray-600 line-clamp-3 mb-4">{scheme.description}</p>

              {/* Benefits */}
              <div className="flex items-start space-x-2 mb-4">
                <DollarSign className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm font-medium text-gray-900">{scheme.benefits}</p>
              </div>

              {/* Eligibility Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {scheme.eligibility.slice(0, 3).map((criteria, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {criteria}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 py-3 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-500">Beneficiaries</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {scheme.beneficiaries.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Processing Time</p>
                  <p className="text-sm font-semibold text-gray-900">{scheme.avgProcessingTime}</p>
                </div>
              </div>
            </div>

            {/* Card Actions */}
            <div className="px-6 py-4 bg-gray-50 rounded-b-xl">
              <div className="flex space-x-3">
                <button className="flex-1 bg-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  View Details
                </button>
              </div>
              
              {scheme.applicationDeadline && (
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Application: {scheme.applicationDeadline}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {sortedSchemes.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No schemes found</h3>
          <p className="text-gray-500 mb-4">
            Try adjusting your search criteria or explore different categories.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default SchemeRecommendations;