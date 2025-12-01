import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Forms = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate(); // Initialize useNavigate hook

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
    vehicleOwnership: '',
    vehicleMakeModel: '',
    carInsurance: '',
    atvBoatMotorcycle: '',
    homeOwnership: '',
    homeownerInsurance: '',
    socialMedia: '',
    website: '',
    streamingService: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep(prev => Math.min(prev + 1, 5)); // Max step is now 5
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSave = () => {
    alert(JSON.stringify(formData, null, 2)); // Show form data in an alert
    navigate('/'); // Navigate to home after saving
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100'>
      {/* Progress Bar */}
      <div className='w-full max-w-2xl mb-6 flex justify-between'>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            className={`flex-1 h-2 mx-1 rounded-full ${
              step >= item ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>

      {/* Form Header with Back Button */}
      <div className='w-full max-w-2xl flex items-center justify-between mb-4'>
        <Link to='/' className='text-[#4A90E2] hover:text-[#2E6AA7] font-semibold flex items-center'>
          <span className='mr-2'>←</span> Back Home
        </Link>
        <h1 className='text-2xl font-bold text-[#2E6AA7]'>Your Plans</h1>
      </div>

      {/* Form */}
      <div className='w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between h-full'>
        {step === 1 && (
          <>
            <h2 className='text-xl font-semibold mb-6'>Create your profile</h2>
            <div className='space-y-4'>
              <p>First name</p>
              <input
                type='text'
                name='firstName'
                placeholder='First name'
                value={formData.firstName}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>Last name</p>
              <input
                type='text'
                name='lastName'
                placeholder='Last name'
                value={formData.lastName}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>DOB</p>
              <input
                type='date'
                name='dob'
                placeholder='DOB'
                value={formData.dob}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>City</p>
              <input
                type='text'
                name='city'
                placeholder='City'
                value={formData.city}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>State</p>
              <input
                type='text'
                name='state'
                placeholder='State'
                value={formData.state}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>Company</p>
              <input
                type='text'
                name='company'
                placeholder='Company'
                value={formData.company}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>Year started</p>
              <input
                type='text'
                name='yearStarted'
                placeholder='Year started'
                value={formData.yearStarted}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <button
                onClick={nextStep}
                className='mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:opacity-90 transition'
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className='text-xl font-semibold mb-6'>Medical Information</h2>
            <div className='space-y-4'>
              <p>Health Insurance</p>
              <input
                type='text'
                name='healthInsurance'
                placeholder='Health Insurance'
                value={formData.healthInsurance}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>Supplemental Insurance</p>
              <input
                type='text'
                name='supplementalInsurance'
                placeholder='Supplemental Insurance'
                value={formData.supplementalInsurance}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>Medications</p>
              <input
                type='text'
                name='medications'
                placeholder='Medications'
                value={formData.medications}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>Ailments</p>
              <input
                type='text'
                name='ailments'
                placeholder='Ailments'
                value={formData.ailments}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <div className='flex justify-between mt-6'>
                <button
                  onClick={prevStep}
                  className='w-1/2 mr-2 bg-gray-400 text-white py-3 rounded-lg hover:opacity-90 transition'
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className='w-1/2 ml-2 bg-blue-600 text-white py-3 rounded-lg hover:opacity-90 transition'
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className='text-xl font-semibold mb-6'>
              Financial Information
            </h2>
            <div className='space-y-4'>
              <p>Bank Account</p>
              <input
                type='text'
                name='bankAccount'
                placeholder='Bank Account'
                value={formData.bankAccount}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>Retirement Account</p>
              <input
                type='text'
                name='retirementAccount'
                placeholder='Retirement Account'
                value={formData.retirementAccount}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>Assets</p>
              <input
                type='text'
                name='assets'
                placeholder='Assets'
                value={formData.assets}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>Debt</p>
              <input
                type='text'
                name='debt'
                placeholder='Debt'
                value={formData.debt}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <div className='flex justify-between mt-6'>
                <button
                  onClick={prevStep}
                  className='w-1/2 mr-2 bg-gray-400 text-white py-3 rounded-lg hover:opacity-90 transition'
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className='w-1/2 ml-2 bg-blue-600 text-white py-3 rounded-lg hover:opacity-90 transition'
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h2 className='text-xl font-semibold mb-6'>
              Home & Auto Information
            </h2>
            <div className='space-y-4'>
              <p>Do you Own or Lease your vehicle?</p>
              <input
                type='text'
                name='vehicleOwnership'
                placeholder='Do you Own or Lease your vehicle?'
                value={formData.vehicleOwnership}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>What Make & Model?</p>
              <input
                type='text'
                name='vehicleMakeModel'
                placeholder='What Make & Model?'
                value={formData.vehicleMakeModel}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>Car Insurance?</p>
              <input
                type='text'
                name='carInsurance'
                placeholder='Car Insurance?'
                value={formData.carInsurance}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>Have an ATV/Boat/Motorcycle?</p>
              <input
                type='text'
                name='atvBoatMotorcycle'
                placeholder='Have an ATV/Boat/Motorcycle?'
                value={formData.atvBoatMotorcycle}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>Do you Own or Rent your home?</p>
              <input
                type='text'
                name='homeOwnership'
                placeholder='Do you Own or Rent your home?'
                value={formData.homeOwnership}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>Have Homeowner/Renter Insurance?</p>
              <input
                type='text'
                name='homeownerInsurance'
                placeholder='Have Homeowner/Renter Insurance?'
                value={formData.homeownerInsurance}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <div className='flex justify-between mt-6'>
                <button
                  onClick={prevStep}
                  className='w-1/2 mr-2 bg-gray-400 text-white py-3 rounded-lg hover:opacity-90 transition'
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className='w-1/2 ml-2 bg-blue-600 text-white py-3 rounded-lg hover:opacity-90 transition'
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <h2 className='text-xl font-semibold mb-6'>Social Information</h2>
            <div className='space-y-4'>
              <p>Have Social media?</p>
              <input
                type='text'
                name='socialMedia'
                placeholder='Social media?'
                value={formData.socialMedia}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>Have a Website?</p>
              <input
                type='text'
                name='website'
                placeholder='Website?'
                value={formData.website}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <p>Subscribed to a Streaming service?</p>
              <input
                type='text'
                name='streamingService'
                placeholder='Streaming service?'
                value={formData.streamingService}
                onChange={handleChange}
                className='w-full px-4 py-3 border rounded-lg'
              />
              <div className='flex justify-between mt-6'>
                <button
                  onClick={prevStep}
                  className='w-1/2 mr-2 bg-gray-400 text-white py-3 rounded-lg hover:opacity-90 transition'
                >
                  Back
                </button>
                <button
                  onClick={handleSave}
                  className='w-1/2 ml-2 bg-blue-600 text-white py-3 rounded-lg hover:opacity-90 transition'
                >
                  Save
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Forms;
