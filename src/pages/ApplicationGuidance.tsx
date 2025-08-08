import React, { useState } from 'react';
import { CheckCircle, Clock, FileText, AlertCircle, Volume2, VolumeX, Play, ArrowRight, Download } from 'lucide-react';

const ApplicationGuidance = () => {
  const [selectedScheme, setSelectedScheme] = useState('mudra-yojana');
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);

  const schemes = [
    { id: 'mudra-yojana', name: 'Pradhan Mantri MUDRA Yojana' },
    { id: 'beti-bachao', name: 'Beti Bachao Beti Padhao' },
    { id: 'janani-suraksha', name: 'Janani Suraksha Yojana' },
    { id: 'stand-up-india', name: 'Stand Up India Scheme' }
  ];

  const applicationSteps = {
    'mudra-yojana': [
      {
        id: 1,
        title: 'Check Eligibility Criteria',
        description: 'Verify that you meet all the basic requirements for MUDRA loan',
        details: [
          'You should be 18 years or above',
          'Your business should be in manufacturing, trading, or service sector',
          'You should not have defaulted on any previous loans',
          'Your business should not be already availing loan above ₹10 lakh from any bank'
        ],
        estimatedTime: '10 minutes',
        documents: [],
        tips: 'Keep your business plan ready as it will be required in later steps'
      },
      {
        id: 2,
        title: 'Prepare Required Documents',
        description: 'Gather all necessary documents for your loan application',
        details: [
          'Identity proof (Aadhaar Card, PAN Card, Voter ID)',
          'Address proof (Aadhaar Card, Utility bills)',
          'Business registration documents',
          'Last 6 months bank statements',
          'Business plan with projected cash flows',
          'Quotations from suppliers (for equipment purchase)'
        ],
        estimatedTime: '1-2 hours',
        documents: ['identity-proof', 'address-proof', 'business-plan', 'bank-statements'],
        tips: 'Ensure all documents are recent and properly attested'
      },
      {
        id: 3,
        title: 'Choose Your Lender',
        description: 'Select a bank or financial institution for your MUDRA loan',
        details: [
          'Public sector banks (SBI, PNB, Bank of Baroda, etc.)',
          'Private sector banks (HDFC, ICICI, Axis, etc.)',
          'Regional Rural Banks (RRBs)',
          'Microfinance Institutions (MFIs)',
          'Non-Banking Financial Companies (NBFCs)'
        ],
        estimatedTime: '30 minutes',
        documents: [],
        tips: 'Compare interest rates and processing fees across different lenders'
      },
      {
        id: 4,
        title: 'Fill Application Form',
        description: 'Complete the loan application form with accurate information',
        details: [
          'Personal information (Name, age, contact details)',
          'Business details (Type, experience, turnover)',
          'Loan requirement (Amount, purpose, tenure)',
          'Financial information (Income, expenses, existing loans)',
          'Guarantor details (if required)'
        ],
        estimatedTime: '45 minutes',
        documents: ['application-form'],
        tips: 'Double-check all information before submission to avoid delays'
      },
      {
        id: 5,
        title: 'Submit Application',
        description: 'Submit your completed application with all required documents',
        details: [
          'Visit the selected bank branch',
          'Submit application form with documents',
          'Pay processing fee (if applicable)',
          'Get acknowledgment receipt',
          'Note down application reference number'
        ],
        estimatedTime: '1-2 hours',
        documents: [],
        tips: 'Keep copies of all submitted documents and receipts for your records'
      },
      {
        id: 6,
        title: 'Verification Process',
        description: 'Bank will verify your documents and conduct due diligence',
        details: [
          'Document verification',
          'Credit score check',
          'Business premises visit',
          'Reference verification',
          'Technical evaluation (for equipment loans)'
        ],
        estimatedTime: '7-15 days',
        documents: [],
        tips: 'Be available for any additional documentation or clarification requests'
      },
      {
        id: 7,
        title: 'Loan Approval & Disbursement',
        description: 'Upon approval, sign loan documents and receive funds',
        details: [
          'Loan sanction letter review',
          'Sign loan agreement and security documents',
          'Complete insurance formalities (if required)',
          'Provide post-dated cheques (if required)',
          'Loan disbursement to your account'
        ],
        estimatedTime: '2-3 days',
        documents: ['loan-agreement', 'security-documents'],
        tips: 'Read all loan terms carefully before signing the agreement'
      }
    ]
  };

  const currentSchemeSteps = applicationSteps[selectedScheme] || [];

  const toggleStepCompletion = (stepId: number) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const getStepStatus = (stepId: number) => {
    if (completedSteps.includes(stepId)) return 'completed';
    if (stepId === currentStep) return 'current';
    if (stepId < currentStep) return 'completed';
    return 'pending';
  };

  const progressPercentage = (completedSteps.length / currentSchemeSteps.length) * 100;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Application Guidance</h1>
        <p className="text-lg text-gray-600">
          Step-by-step instructions to help you apply successfully
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Scheme Selector */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Select Scheme</h3>
            <div className="space-y-2">
              {schemes.map(scheme => (
                <button
                  key={scheme.id}
                  onClick={() => {
                    setSelectedScheme(scheme.id);
                    setCurrentStep(1);
                    setCompletedSteps([]);
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedScheme === scheme.id
                      ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-200'
                      : 'hover:bg-gray-50 border-2 border-transparent'
                  }`}
                >
                  <div className="font-medium text-sm">{scheme.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Progress Overview */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">Progress</h3>
              <button
                onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
                className={`p-2 rounded-lg transition-colors ${
                  isVoiceEnabled
                    ? 'bg-emerald-100 text-emerald-600'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {isVoiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Completed</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
            
            <div className="text-sm text-gray-600">
              {completedSteps.length} of {currentSchemeSteps.length} steps completed
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Step Navigation */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center space-x-4 overflow-x-auto pb-2">
              {currentSchemeSteps.map((step, index) => {
                const status = getStepStatus(step.id);
                return (
                  <div key={step.id} className="flex items-center space-x-2 flex-shrink-0">
                    <button
                      onClick={() => setCurrentStep(step.id)}
                      className={`flex items-center justify-center w-8 h-8 rounded-full border-2 font-medium text-sm transition-colors ${
                        status === 'completed'
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : status === 'current'
                          ? 'border-emerald-600 text-emerald-600 bg-white'
                          : 'border-gray-300 text-gray-400 bg-white'
                      }`}
                    >
                      {status === 'completed' ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        step.id
                      )}
                    </button>
                    {index < currentSchemeSteps.length - 1 && (
                      <div className={`w-8 h-0.5 ${
                        status === 'completed' ? 'bg-emerald-600' : 'bg-gray-300'
                      }`}></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Current Step Details */}
          {currentSchemeSteps.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              {currentSchemeSteps
                .filter(step => step.id === currentStep)
                .map(step => (
                  <div key={step.id} className="p-6">
                    {/* Step Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            completedSteps.includes(step.id)
                              ? 'bg-emerald-600 text-white'
                              : 'bg-emerald-100 text-emerald-600'
                          }`}>
                            {completedSteps.includes(step.id) ? (
                              <CheckCircle className="w-6 h-6" />
                            ) : (
                              <span className="font-semibold">{step.id}</span>
                            )}
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{step.estimatedTime}</span>
                          </div>
                          {step.documents.length > 0 && (
                            <div className="flex items-center space-x-1">
                              <FileText className="w-4 h-4" />
                              <span>{step.documents.length} documents required</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {isVoiceEnabled && (
                        <button className="p-2 bg-emerald-100 text-emerald-600 rounded-lg hover:bg-emerald-200 transition-colors">
                          <Play className="w-5 h-5" />
                        </button>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="space-y-6">
                      {/* Details */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">What you need to do:</h3>
                        <div className="space-y-2">
                          {step.details.map((detail, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700">{detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Documents */}
                      {step.documents.length > 0 && (
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-3">Required Documents:</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {step.documents.map((doc, index) => (
                              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                <FileText className="w-5 h-5 text-gray-400" />
                                <span className="text-sm font-medium text-gray-700 capitalize">
                                  {doc.replace('-', ' ')}
                                </span>
                                <button className="ml-auto text-emerald-600 hover:text-emerald-700">
                                  <Download className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tips */}
                      {step.tips && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-blue-900 mb-1">Pro Tip</h4>
                              <p className="text-blue-800 text-sm">{step.tips}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Step Actions */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => toggleStepCompletion(step.id)}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                            completedSteps.includes(step.id)
                              ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <CheckCircle className={`w-4 h-4 ${
                            completedSteps.includes(step.id) ? 'fill-current' : ''
                          }`} />
                          <span>
                            {completedSteps.includes(step.id) ? 'Completed' : 'Mark as Complete'}
                          </span>
                        </button>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {step.id > 1 && (
                          <button
                            onClick={() => setCurrentStep(step.id - 1)}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            Previous
                          </button>
                        )}
                        {step.id < currentSchemeSteps.length && (
                          <button
                            onClick={() => setCurrentStep(step.id + 1)}
                            className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                          >
                            <span>Next Step</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationGuidance;