import React, { useState } from 'react';
import { Send, MapPin, Phone, Heart, Users, FileText, Clock, CheckCircle } from 'lucide-react';

const VolunteerRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    state: '',
    district: '',
    supportType: 'application-help',
    preferredLanguage: 'english',
    urgencyLevel: 'medium',
    description: '',
    specificScheme: '',
    preferredContact: 'phone',
    availability: 'weekdays'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer request submitted:', formData);
    setIsSubmitted(true);
  };

  const supportTypes = [
    { id: 'application-help', name: 'Application Assistance', description: 'Help with filling forms and documentation' },
    { id: 'eligibility-check', name: 'Eligibility Verification', description: 'Check if you qualify for specific schemes' },
    { id: 'document-guidance', name: 'Document Preparation', description: 'Guidance on required documents' },
    { id: 'translation-help', name: 'Translation Support', description: 'Help with forms in local language' },
    { id: 'tech-support', name: 'Technical Support', description: 'Help with online applications' },
    { id: 'general-guidance', name: 'General Consultation', description: 'Overall scheme guidance and advice' }
  ];

  const urgencyLevels = [
    { id: 'low', name: 'Low Priority', color: 'bg-gray-100 text-gray-700', description: 'Can wait 7-10 days' },
    { id: 'medium', name: 'Medium Priority', color: 'bg-yellow-100 text-yellow-700', description: 'Needed within 3-5 days' },
    { id: 'high', name: 'High Priority', color: 'bg-red-100 text-red-700', description: 'Urgent - needed within 1-2 days' }
  ];

  const recentRequests = [
    { id: 1, type: 'Application Help', status: 'In Progress', volunteer: 'Priya Sharma', time: '2 hours ago' },
    { id: 2, type: 'Document Guidance', status: 'Completed', volunteer: 'Raj Kumar', time: '1 day ago' },
    { id: 3, type: 'Translation Support', status: 'Matched', volunteer: 'Anita Singh', time: '3 days ago' }
  ];

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-4 md:p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Request Submitted Successfully!</h1>
          <p className="text-gray-600 mb-6">
            We've received your volunteer request and are matching you with the best available volunteer in your area.
          </p>
          <div className="bg-emerald-50 rounded-lg p-4 mb-6">
            <p className="text-emerald-800 font-medium">What happens next?</p>
            <ul className="text-emerald-700 text-sm mt-2 space-y-1">
              <li>• We'll match you with a qualified volunteer (within 2-4 hours)</li>
              <li>• The volunteer will contact you via your preferred method</li>
              <li>• You can track the status of your request below</li>
            </ul>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Submit Another Request
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors">
              Track Request Status
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Request Volunteer Support</h1>
        <p className="text-lg text-gray-600">
          Get personalized help from trained volunteers in your community
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            {/* Personal Information */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-emerald-600" />
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Language
                  </label>
                  <select
                    name="preferredLanguage"
                    value={formData.preferredLanguage}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="english">English</option>
                    <option value="hindi">हिंदी (Hindi)</option>
                    <option value="tamil">தமிழ் (Tamil)</option>
                    <option value="telugu">తెలుగు (Telugu)</option>
                    <option value="bengali">বাংলা (Bengali)</option>
                    <option value="marathi">मराठी (Marathi)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-emerald-600" />
                Location Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

            {/* Support Request */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-emerald-600" />
                Support Request Details
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Support Needed *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {supportTypes.map(type => (
                      <label
                        key={type.id}
                        className={`flex items-start space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                          formData.supportType === type.id
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="supportType"
                          value={type.id}
                          checked={formData.supportType === type.id}
                          onChange={handleInputChange}
                          className="mt-1 w-4 h-4 text-emerald-600"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{type.name}</div>
                          <div className="text-sm text-gray-600">{type.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Scheme (if applicable)
                  </label>
                  <select
                    name="specificScheme"
                    value={formData.specificScheme}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select a scheme</option>
                    <option value="mudra-yojana">Pradhan Mantri MUDRA Yojana</option>
                    <option value="beti-bachao">Beti Bachao Beti Padhao</option>
                    <option value="janani-suraksha">Janani Suraksha Yojana</option>
                    <option value="stand-up-india">Stand Up India Scheme</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority Level *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {urgencyLevels.map(level => (
                      <label
                        key={level.id}
                        className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                          formData.urgencyLevel === level.id
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="urgencyLevel"
                          value={level.id}
                          checked={formData.urgencyLevel === level.id}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-emerald-600"
                        />
                        <div>
                          <div className={`text-sm font-medium px-2 py-1 rounded ${level.color}`}>
                            {level.name}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">{level.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe your specific needs *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Please describe what specific help you need, any challenges you're facing, and any other relevant details..."
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact Preferences */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-emerald-600" />
                Contact Preferences
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="phone">Phone Call</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="email">Email</option>
                    <option value="in-person">In-Person Meeting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Available Times
                  </label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="weekdays">Weekdays (9 AM - 5 PM)</option>
                    <option value="evenings">Evenings (5 PM - 8 PM)</option>
                    <option value="weekends">Weekends</option>
                    <option value="anytime">Anytime</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="border-t border-gray-200 pt-6">
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                <span>Submit Support Request</span>
              </button>
              
              <p className="text-sm text-gray-500 text-center mt-3">
                We typically match requests with volunteers within 2-4 hours during business hours.
              </p>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Support Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Support Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Active Volunteers</span>
                <span className="font-semibold text-emerald-600">247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg Response Time</span>
                <span className="font-semibold text-emerald-600">2.3 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Success Rate</span>
                <span className="font-semibold text-emerald-600">94%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Languages Supported</span>
                <span className="font-semibold text-emerald-600">6+</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Support Requests</h3>
            <div className="space-y-3">
              {recentRequests.map(request => (
                <div key={request.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-sm text-gray-900">{request.type}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      request.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      request.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {request.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Volunteer: {request.volunteer}
                  </p>
                  <p className="text-xs text-gray-500">{request.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-6">
            <h3 className="font-semibold text-emerald-900 mb-3">Need Immediate Help?</h3>
            <p className="text-emerald-800 text-sm mb-4">
              For urgent matters, you can contact our support team directly.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-emerald-700">
                <Phone className="w-4 h-4" />
                <span>+91 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-700">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 9 AM - 6 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerRequest;