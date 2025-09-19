import React, { useState } from 'react';

const Home = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    city: '',
    state: '',
    company: '',
    yearStarted: '',
    healthInsurance: '',
    supplementalInsurance: '',
    medications: '',
    ailments: '',
    bankAccount: '',
    retirementAccount: '',
    assets: '',
    debt: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep(prev => Math.min(prev + 1, 3)); // Max step is now 3
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  // Calculate progress percentage (3 steps total)
  const progress = (step / 3) * 100;

  return (
    <div className='min-h-screen flex flex-col items-center justify-start p-6 bg-gray-100'>
      {/* Progress Bar */}
      <div className='w-full max-w-md mb-6'>
        <div className='w-full bg-gray-300 rounded-full h-2'>
          <div
            className='bg-blue-600 h-2 rounded-full transition-all duration-300'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Form */}
      <div className='w-full space-y-12 max-w-md bg-white p-6 rounded-lg shadow-md'>
        {step === 1 && (
          <>
            <h2 className='text-lg font-semibold mb-4'>Create your profile</h2>
            <div className='space-y-4'>
              <input
                type='text'
                name='firstName'
                placeholder='First name'
                value={formData.firstName}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-lg'
              />
              <input
                type='text'
                name='lastName'
                placeholder='Last name'
                value={formData.lastName}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-lg'
              />
              <input
                type='date'
                name='dob'
                placeholder='DOB'
                value={formData.dob}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-lg'
              />
              <input
                type='text'
                name='city'
                placeholder='City'
                value={formData.city}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-lg'
              />
              <input
                type='text'
                name='state'
                placeholder='State'
                value={formData.state}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-lg'
              />
              <input
                type='text'
                name='company'
                placeholder='Company'
                value={formData.company}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-lg'
              />
              <input
                type='text'
                name='yearStarted'
                placeholder='Year started'
                value={formData.yearStarted}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-lg'
              />
              <button
                onClick={nextStep}
                className='mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:opacity-90 transition'
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className='text-lg font-semibold mb-4'>Medical Information</h2>
            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='healthInsurance'
                  className='block text-sm font-medium text-gray-700'
                >
                  Have Health Insurance?
                </label>
                <input
                  id='healthInsurance'
                  type='text'
                  name='healthInsurance'
                  placeholder='ex: Aetna'
                  value={formData.healthInsurance}
                  onChange={handleChange}
                  className='mt-1 w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div>
                <label
                  htmlFor='supplementalInsurance'
                  className='block text-sm font-medium text-gray-700'
                >
                  Have Supplemental Insurance?
                </label>
                <input
                  id='supplementalInsurance'
                  type='text'
                  name='supplementalInsurance'
                  placeholder='ex: Medicaid'
                  value={formData.supplementalInsurance}
                  onChange={handleChange}
                  className='mt-1 w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div>
                <label
                  htmlFor='medications'
                  className='block text-sm font-medium text-gray-700'
                >
                  Taking any Medications?
                </label>
                <input
                  id='medications'
                  type='text'
                  name='medications'
                  placeholder='Any...'
                  value={formData.medications}
                  onChange={handleChange}
                  className='mt-1 w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div>
                <label
                  htmlFor='ailments'
                  className='block text-sm font-medium text-gray-700'
                >
                  Have any known Ailments?
                </label>
                <input
                  id='ailments'
                  type='text'
                  name='ailments'
                  placeholder='Any...'
                  value={formData.ailments}
                  onChange={handleChange}
                  className='mt-1 w-full px-4 py-2 border rounded-lg'
                />
              </div>
              <div className='flex justify-between mt-4'>
                <button
                  onClick={prevStep}
                  className='w-1/2 mr-2 bg-gray-400 text-white py-2 rounded-lg hover:opacity-90 transition'
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className='w-1/2 ml-2 bg-blue-600 text-white py-2 rounded-lg hover:opacity-90 transition'
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className='text-lg font-semibold mb-4'>
              Financial Information
            </h2>
            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='bankAccount'
                  className='block text-sm font-medium text-gray-700'
                >
                  Have a Bank account?
                </label>
                <input
                  id='bankAccount'
                  type='text'
                  name='bankAccount'
                  placeholder='ex: Capital One'
                  value={formData.bankAccount}
                  onChange={handleChange}
                  className='mt-1 w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div>
                <label
                  htmlFor='retirementAccount'
                  className='block text-sm font-medium text-gray-700'
                >
                  Have a Retirement account?
                </label>
                <input
                  id='retirementAccount'
                  type='text'
                  name='retirementAccount'
                  placeholder='ex: 401K plan'
                  value={formData.retirementAccount}
                  onChange={handleChange}
                  className='mt-1 w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div>
                <label
                  htmlFor='assets'
                  className='block text-sm font-medium text-gray-700'
                >
                  What are your current Assets?
                </label>
                <input
                  id='assets'
                  type='text'
                  name='assets'
                  placeholder='ex: Own a business'
                  value={formData.assets}
                  onChange={handleChange}
                  className='mt-1 w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div>
                <label
                  htmlFor='debt'
                  className='block text-sm font-medium text-gray-700'
                >
                  Have any Debt?
                </label>
                <input
                  id='debt'
                  type='text'
                  name='debt'
                  placeholder='ex: <$5,000'
                  value={formData.debt}
                  onChange={handleChange}
                  className='mt-1 w-full px-4 py-2 border rounded-lg'
                />
              </div>

              <div className='flex justify-between mt-4'>
                <button
                  onClick={prevStep}
                  className='w-1/2 mr-2 bg-gray-400 text-white py-2 rounded-lg hover:opacity-90 transition'
                >
                  Back
                </button>
                <button
                  onClick={() => alert(JSON.stringify(formData, null, 2))}
                  className='w-1/2 ml-2 bg-blue-600 text-white py-2 rounded-lg hover:opacity-90 transition'
                >
                  Submit
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
