import React, { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {
      firstName: formData.firstName.trim() ? '' : 'First name is required',
      lastName: formData.lastName.trim() ? '' : 'Last name is required',
      email: formData.email.trim() 
        ? (validateEmail(formData.email) ? '' : 'Please enter a valid email')
        : 'Email is required',
      message: formData.message.trim() ? '' : 'Message is required'
    };
    
    setErrors(newErrors);
    
    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (!hasErrors) {
      // Simulate submission
      setIsSubmitting(true);
      
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1000);
    }
  };

  if (isSuccess) {
    return (
      <div 
        className="rounded-3xl p-16 text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(234, 228, 219, 0.85) 0%, rgba(214, 191, 167, 0.75) 100%)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px rgba(42, 36, 30, 0.08), 0 2px 8px rgba(42, 36, 30, 0.04)'
        }}
      >
        <div className="mb-6">
          <svg 
            width="64" 
            height="64" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="mx-auto"
          >
            <circle cx="12" cy="12" r="10" stroke="#9AA17C" strokeWidth="1.5" />
            <path d="M8 12l2.5 2.5L16 9" stroke="#9AA17C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        
        <h3 className="mb-4" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '2.25rem',
          fontWeight: 400,
          color: '#2A241E',
          letterSpacing: '-0.01em'
        }}>
          Thanks—your message is on its way.
        </h3>
        
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1.0625rem',
          lineHeight: '1.75',
          color: '#6E6A5B',
          letterSpacing: '-0.003em'
        }}>
          We'll get back to you within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <div 
      className="rounded-3xl p-12"
      style={{
        background: 'linear-gradient(135deg, rgba(234, 228, 219, 0.85) 0%, rgba(214, 191, 167, 0.75) 100%)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 32px rgba(42, 36, 30, 0.08), 0 2px 8px rgba(42, 36, 30, 0.04)'
      }}
    >
      <form onSubmit={handleSubmit} noValidate>
        {/* First Row - Three Fields */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* First Name */}
          <div>
            <label 
              htmlFor="firstName"
              className="block mb-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#2A241E',
                letterSpacing: '0.015em'
              }}
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full px-4 py-3 rounded-xl transition-all duration-200"
              style={{
                background: '#F5F1EC',
                border: errors.firstName ? '1px solid #C44536' : '1px solid transparent',
                color: '#2A241E',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9375rem',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.border = '1px solid #2A241E';
                e.target.style.boxShadow = '0 0 0 1px #2A241E';
              }}
              onBlur={(e) => {
                if (!errors.firstName) {
                  e.target.style.border = '1px solid transparent';
                  e.target.style.boxShadow = 'none';
                }
              }}
            />
            {errors.firstName && (
              <p className="mt-2" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8125rem',
                color: '#C44536',
                letterSpacing: '0.01em'
              }}>
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label 
              htmlFor="lastName"
              className="block mb-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#2A241E',
                letterSpacing: '0.015em'
              }}
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full px-4 py-3 rounded-xl transition-all duration-200"
              style={{
                background: '#F5F1EC',
                border: errors.lastName ? '1px solid #C44536' : '1px solid transparent',
                color: '#2A241E',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9375rem',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.border = '1px solid #2A241E';
                e.target.style.boxShadow = '0 0 0 1px #2A241E';
              }}
              onBlur={(e) => {
                if (!errors.lastName) {
                  e.target.style.border = '1px solid transparent';
                  e.target.style.boxShadow = 'none';
                }
              }}
            />
            {errors.lastName && (
              <p className="mt-2" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8125rem',
                color: '#C44536',
                letterSpacing: '0.01em'
              }}>
                {errors.lastName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label 
              htmlFor="email"
              className="block mb-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#2A241E',
                letterSpacing: '0.015em'
              }}
            >
              Email <span style={{ color: '#C44536' }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-xl transition-all duration-200"
              style={{
                background: '#F5F1EC',
                border: errors.email ? '1px solid #C44536' : '1px solid transparent',
                color: '#2A241E',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9375rem',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.border = '1px solid #2A241E';
                e.target.style.boxShadow = '0 0 0 1px #2A241E';
              }}
              onBlur={(e) => {
                if (!errors.email) {
                  e.target.style.border = '1px solid transparent';
                  e.target.style.boxShadow = 'none';
                }
              }}
            />
            {errors.email && (
              <p className="mt-2" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8125rem',
                color: '#C44536',
                letterSpacing: '0.01em'
              }}>
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Second Row - Message */}
        <div className="mb-8">
          <label 
            htmlFor="message"
            className="block mb-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#2A241E',
              letterSpacing: '0.015em'
            }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what's on your mind..."
            rows={6}
            className="w-full px-4 py-3 rounded-xl transition-all duration-200 resize-none"
            style={{
              background: '#F5F1EC',
              border: errors.message ? '1px solid #C44536' : '1px solid transparent',
              color: '#2A241E',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              outline: 'none',
              lineHeight: '1.6'
            }}
            onFocus={(e) => {
              e.target.style.border = '1px solid #2A241E';
              e.target.style.boxShadow = '0 0 0 1px #2A241E';
            }}
            onBlur={(e) => {
              if (!errors.message) {
                e.target.style.border = '1px solid transparent';
                e.target.style.boxShadow = 'none';
              }
            }}
          />
          {errors.message && (
            <p className="mt-2" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.8125rem',
              color: '#C44536',
              letterSpacing: '0.01em'
            }}>
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 rounded-xl transition-all duration-300"
          style={{
            background: isSubmitting ? '#CBBBA0' : '#9AA17C',
            color: '#EAE4DB',
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.0625rem',
            fontWeight: 500,
            letterSpacing: '0.025em',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            boxShadow: '0 4px 16px rgba(154, 161, 124, 0.24)',
            border: 'none',
            opacity: isSubmitting ? 0.6 : 1
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.background = '#8A916F';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(154, 161, 124, 0.32)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.background = '#9AA17C';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(154, 161, 124, 0.24)';
            }
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
