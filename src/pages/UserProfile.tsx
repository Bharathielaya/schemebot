import React, { useState } from 'react';
import { Save, User, MapPin, DollarSign, GraduationCap, Briefcase, Calendar } from 'lucide-react';

const UserProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: 25,
    location: '',
    state: '',
    district: '',
    incomeLevel: 'below-2-lakh',
    education: 'high-school',
    skills: [],
    maritalStatus: 'single',
    hasChildren: false,
    childrenCount: 0,
    employment: 'unemployed',
    hasAadhaar: true,
    hasBankAccount: true
  });

  const [customSkill, setCustomSkill] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSkillAdd = () => {
    if (customSkill.trim() && !formData.skills.includes(customSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, customSkill.trim()]
      }));
      setCustomSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile saved:', formData);
    // Handle form submission
  };

  const skillSuggestions = [
    'Tailoring', 'Cooking', 'Computer Skills', 'Teaching', 'Handicrafts',
    'Agriculture', 'Beauty & Wellness', 'Driving', 'Sales', 'Nursing'
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Create Your Profile</h1>
              <p className="text-emerald-100">
                Help us provide personalized scheme recommendations
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Personal Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <User className="w-5 h-5 mr-2 text-emerald-600" />
              Personal Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age *
                </label>
                <div className="relative">
                  <input
                    type="range"
                    name="age"
                    min="18"
                    max="65"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>18</span>
                    <span className="font-medium text-emerald-600">{formData.age} years</span>
                    <span>65</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-emerald-600" />
              Location Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                >
                  <option value="">Select State</option>
                  <option value="andhra-pradesh">Andhra Pradesh</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                  <option value="telangana">Telangana</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="west-bengal">West Bengal</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  District *
                </label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                >
                  <option value="">Select District</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="chennai">Chennai</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="kolkata">Kolkata</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Area/Village
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter your area"
                />
              </div>
            </div>
          </div>

          {/* Economic Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-emerald-600" />
              Economic Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Household Income *
                </label>
                <select
                  name="incomeLevel"
                  value={formData.incomeLevel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                >
                  <option value="below-1-lakh">Below ₹1 Lakh (BPL)</option>
                  <option value="1-2-lakh">₹1-2 Lakh</option>
                  <option value="2-5-lakh">₹2-5 Lakh</option>
                  <option value="5-8-lakh">₹5-8 Lakh</option>
                  <option value="above-8-lakh">Above ₹8 Lakh</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Status *
                </label>
                <select
                  name="employment"
                  value={formData.employment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                >
                  <option value="unemployed">Unemployed</option>
                  <option value="self-employed">Self Employed</option>
                  <option value="private-job">Private Job</option>
                  <option value="government-job">Government Job</option>
                  <option value="student">Student</option>
                  <option value="homemaker">Homemaker</option>
                </select>
              </div>
            </div>
          </div>

          {/* Education & Skills */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2 text-emerald-600" />
              Education & Skills
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Education Level *
                </label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  required
                >
                  <option value="no-formal">No Formal Education</option>
                  <option value="primary">Primary (1-5)</option>
                  <option value="middle">Middle School (6-8)</option>
                  <option value="high-school">High School (9-10)</option>
                  <option value="intermediate">Intermediate (11-12)</option>
                  <option value="graduate">Graduate</option>
                  <option value="post-graduate">Post Graduate</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skills & Expertise
                </label>
                
                {/* Skill Suggestions */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {skillSuggestions.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => {
                        if (!formData.skills.includes(skill)) {
                          setFormData(prev => ({
                            ...prev,
                            skills: [...prev.skills, skill]
                          }));
                        }
                      }}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
                    >
                      + {skill}
                    </button>
                  ))}
                </div>

                {/* Custom Skill Input */}
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={customSkill}
                    onChange={(e) => setCustomSkill(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Add custom skill"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleSkillAdd())}
                  />
                  <button
                    type="button"
                    onClick={handleSkillAdd}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Add
                  </button>
                </div>

                {/* Selected Skills */}
                {formData.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="ml-2 text-emerald-600 hover:text-emerald-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Family Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-emerald-600" />
              Family Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Marital Status
                </label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>

              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="hasChildren"
                    checked={formData.hasChildren}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"
                  />
                  <span className="text-sm font-medium text-gray-700">I have children</span>
                </label>
                
                {formData.hasChildren && (
                  <div className="mt-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Children
                    </label>
                    <input
                      type="number"
                      name="childrenCount"
                      value={formData.childrenCount}
                      onChange={handleInputChange}
                      min="1"
                      max="10"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Document Verification */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-emerald-600" />
              Document Information
            </h2>
            
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="hasAadhaar"
                  checked={formData.hasAadhaar}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"
                />
                <span className="text-sm font-medium text-gray-700">I have Aadhaar Card</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="hasBankAccount"
                  checked={formData.hasBankAccount}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"
                />
                <span className="text-sm font-medium text-gray-700">I have Bank Account</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 border-t border-gray-200">
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Save className="w-5 h-5" />
              <span>Save Profile & Get Recommendations</span>
            </button>
            
            <p className="text-sm text-gray-500 text-center mt-3">
              Your information is secure and will only be used to provide personalized scheme recommendations.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;