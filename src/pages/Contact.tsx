import React from 'react';
import { Typography, Container, Card, Input, Textarea, Button } from '../components/ui';
import { useTheme } from '../hooks/useTheme';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Social Media Icons
const FacebookIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Contact: React.FC = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [infoRef, isInfoVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [formRef, isFormVisible] = useIntersectionObserver({ threshold: 0.1 });
  
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [isGenerated, setIsGenerated] = React.useState(false);

  const generateEmailLink = () => {
    const { name, email, phone, subject, message } = formData;
    
    const emailSubject = subject || 'Message from COCOPURE Website';
    const emailBody = `Hi COCOPURE Team!

${message}

---
Contact Details:
Name: ${name}
Email: ${email}${phone ? `\nPhone: ${phone}` : ''}

Best regards,
${name}`;

    const mailtoLink = `mailto:hellococopure@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    return mailtoLink;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Start generating animation
    setIsGenerating(true);
    
    // Simulate email generation process
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
      
      // Generate and open mailto link
      const mailtoLink = generateEmailLink();
      window.location.href = mailtoLink;
      
      // Reset to normal state after a moment
      setTimeout(() => {
        setIsGenerated(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
      
      <div 
        className="py-8 relative overflow-hidden"
        style={{
          background: currentTheme === 'vibrant'
            ? 'linear-gradient(135deg, #6366f1 0%, #43b8f4 25%, #10b981 50%, #fbbf24 75%, #f59e0b 100%)'
            : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 50%, #e5e7eb 75%, #f3f4f6 100%)',
        }}
      >
        {/* Enhanced Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className={`absolute top-20 left-10 w-32 h-32 rounded-full opacity-8 ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-gray-300'} animate-pulse`} />
          <div className={`absolute top-40 right-20 w-24 h-24 rounded-full opacity-6 ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-gray-400'} animate-pulse`} style={{ animationDelay: '1s' }} />
          <div className={`absolute bottom-20 left-1/4 w-20 h-20 rounded-full opacity-10 ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-gray-500'} animate-pulse`} style={{ animationDelay: '2s' }} />
          <div className={`absolute bottom-40 right-1/3 w-28 h-28 rounded-full opacity-5 ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-gray-400'} animate-pulse`} style={{ animationDelay: '3s' }} />
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full opacity-12 ${currentTheme === 'vibrant' ? 'bg-white' : 'bg-gray-600'} animate-pulse`} style={{ animationDelay: '4s' }} />
        </div>

      <Container>
        <div className="max-w-4xl mx-auto">
          <div 
            ref={headerRef}
            className={`text-center mb-12 transition-all duration-1000 ${
              isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Typography variant="h1" className={`mb-4 ${currentTheme === 'vibrant' ? 'text-brand-forest' : 'text-gray-800'}`}>
              Get In Touch! 🌟
            </Typography>
            <Typography variant="body-large" color="textSecondary" className="max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have questions, feedback or just want to say hello, 
              we're here to help make your COCOPURE experience amazing.
            </Typography>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div 
              ref={infoRef}
              className={`space-y-6 transition-all duration-1000 ${
                isInfoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <Card className={`hover:shadow-xl transition-all duration-300 border-l-4 ${
                currentTheme === 'vibrant' ? 'border-brand-forest hover:border-brand-yellow' : 'border-gray-400 hover:border-gray-600'
              }`}>
                <Typography variant="h4" className={`mb-6 ${currentTheme === 'vibrant' ? 'text-brand-forest' : 'text-gray-800'}`}>
                  🏢 KG Global Food & Beverages Inc.
                </Typography>
                <div className="space-y-6">
                  <div className={`p-3 rounded-lg transition-colors duration-300 hover:${currentTheme === 'vibrant' ? 'bg-brand-light-gray' : 'bg-gray-50'}`}>
                    <Typography variant="small" weight="medium" className={`mb-2 flex items-center ${currentTheme === 'vibrant' ? 'text-brand-forest' : 'text-gray-700'}`}>
                      <span className="text-xl mr-2">📧</span> Email
                    </Typography>
                    <a 
                      href="mailto:hellococopure@gmail.com"
                      className={`block transition-colors duration-300 hover:${currentTheme === 'vibrant' ? 'text-brand-forest' : 'text-gray-900'} hover:underline`}
                    >
                      <Typography variant="body" color="textSecondary">hellococopure@gmail.com</Typography>
                    </a>
                  </div>
                  <div className={`p-3 rounded-lg transition-colors duration-300 hover:${currentTheme === 'vibrant' ? 'bg-brand-light-gray' : 'bg-gray-50'}`}>
                    <Typography variant="small" weight="medium" className={`mb-2 flex items-center ${currentTheme === 'vibrant' ? 'text-brand-forest' : 'text-gray-700'}`}>
                      <span className="text-xl mr-2">📞</span> Phone
                    </Typography>
                    <a 
                      href="tel:+639175160804"
                      className={`block transition-colors duration-300 hover:${currentTheme === 'vibrant' ? 'text-brand-forest' : 'text-gray-900'} hover:underline`}
                    >
                      <Typography variant="body" color="textSecondary">+63 917-516-0804</Typography>
                    </a>
                  </div>
                </div>
              </Card>

              <Card className={`hover:shadow-xl transition-all duration-300 border-l-4 ${
                currentTheme === 'vibrant' ? 'border-brand-yellow hover:border-brand-red' : 'border-gray-400 hover:border-gray-600'
              }`}>
                <Typography variant="h5" className={`mb-6 ${currentTheme === 'vibrant' ? 'text-brand-forest' : 'text-gray-800'}`}>
                  🌐 Follow Us On Social Media
                </Typography>
                <div className="space-y-4">
                  <a 
                    href="https://www.facebook.com/hellococopure" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`block p-4 rounded-xl transition-all duration-300 cursor-pointer group relative overflow-hidden ${
                      currentTheme === 'vibrant' 
                        ? 'hover:bg-gradient-to-r from-blue-50 to-brand-light-gray hover:shadow-md border border-transparent hover:border-blue-200' 
                        : 'hover:bg-gradient-to-r from-blue-50 to-gray-50 hover:shadow-md border border-transparent hover:border-blue-200'
                    } hover:scale-105 transform`}
                  >
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 ${
                          currentTheme === 'vibrant' 
                            ? 'bg-blue-500 group-hover:bg-blue-600 group-hover:shadow-lg text-white' 
                            : 'bg-blue-500 group-hover:bg-blue-600 group-hover:shadow-lg text-white'
                        }`}>
                          <FacebookIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <Typography variant="small" weight="medium" className="group-hover:text-blue-700 transition-colors duration-300">
                            @hellococopure
                          </Typography>
                          <Typography variant="small" color="textSecondary" className="group-hover:text-blue-600 transition-colors duration-300">
                            Follow us for updates & promotions
                          </Typography>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                        <span className="text-blue-600 text-sm font-bold">→</span>
                      </div>
                    </div>
                  </a>

                  <a 
                    href="https://www.instagram.com/hellococopure/#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`block p-4 rounded-xl transition-all duration-300 cursor-pointer group relative overflow-hidden ${
                      currentTheme === 'vibrant' 
                        ? 'hover:bg-gradient-to-r from-pink-50 to-brand-light-gray hover:shadow-md border border-transparent hover:border-pink-200' 
                        : 'hover:bg-gradient-to-r from-pink-50 to-gray-50 hover:shadow-md border border-transparent hover:border-pink-200'
                    } hover:scale-105 transform`}
                  >
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 ${
                          currentTheme === 'vibrant' 
                            ? 'bg-gradient-to-br from-pink-500 to-purple-600 group-hover:from-pink-600 group-hover:to-purple-700 group-hover:shadow-lg text-white' 
                            : 'bg-gradient-to-br from-pink-500 to-purple-600 group-hover:from-pink-600 group-hover:to-purple-700 group-hover:shadow-lg text-white'
                        }`}>
                          <InstagramIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <Typography variant="small" weight="medium" className="group-hover:text-pink-700 transition-colors duration-300">
                            @hellococopure
                          </Typography>
                          <Typography variant="small" color="textSecondary" className="group-hover:text-pink-600 transition-colors duration-300">
                            See our latest products & lifestyle content
                          </Typography>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-all duration-300 group-hover:scale-110">
                        <span className="text-pink-600 text-sm font-bold">→</span>
                      </div>
                    </div>
                  </a>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div 
              ref={formRef}
              className={`lg:col-span-2 transition-all duration-1000 ${
                isFormVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <Card className={`hover:shadow-xl transition-all duration-300 border-t-4 ${
                currentTheme === 'vibrant' ? 'border-brand-yellow' : 'border-gray-400'
              }`}>
                <Typography variant="h4" className={`mb-6 flex items-center ${currentTheme === 'vibrant' ? 'text-brand-forest' : 'text-gray-800'}`}>
                  <span className="text-2xl mr-3">✉️</span>
                  Send us a Message
                </Typography>
                <Typography variant="body" color="textSecondary" className="mb-8">
                  Have a question, suggestion or just want to say hi? We'd love to hear from you! 
                  Fill out the form below and we'll get back to you as soon as possible.
                </Typography>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="transform transition-all duration-300 hover:scale-105">
                      <Input
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="transform transition-all duration-300 hover:scale-105">
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="transform transition-all duration-300 hover:scale-105">
                      <Input
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+63 XXX-XXX-XXXX"
                      />
                    </div>
                    <div className="transform transition-all duration-300 hover:scale-105">
                      <Input
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>
                  
                  <div className="transform transition-all duration-300 hover:scale-[1.02]">
                    <Textarea
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can help you... We'd love to hear your thoughts, questions, or feedback! 💬"
                    />
                  </div>
                  
                  <div className="flex justify-center pt-4">
                    <Button 
                      type="submit" 
                      variant={currentTheme === 'vibrant' ? 'primary' : 'accent'}
                      size="lg"
                      disabled={isGenerating}
                      className={`transform transition-all duration-500 hover:shadow-lg relative overflow-hidden ${
                        isGenerating 
                          ? 'scale-105 animate-pulse' 
                          : isGenerated 
                            ? 'scale-110 bg-green-500 hover:bg-green-600' 
                            : 'hover:scale-110'
                      }`}
                    >
                      <span className={`flex items-center transition-all duration-300 ${
                        isGenerating ? 'opacity-0' : 'opacity-100'
                      }`}>
                        <span className="mr-2">
                          {isGenerated ? '✅' : '🚀'}
                        </span>
                        {isGenerated ? 'Email Ready! Check Your Email App' : 'Generate Email & Send'}
                      </span>
                      
                      {/* Loading animation */}
                      {isGenerating && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            <span className="ml-2 text-white font-medium">Preparing your email...</span>
                          </div>
                        </div>
                      )}
                      
                      {/* Success sparkles */}
                      {isGenerated && (
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute top-2 left-4 text-yellow-300 animate-ping">✨</div>
                          <div className="absolute top-3 right-6 text-yellow-200 animate-ping" style={{ animationDelay: '0.5s' }}>⭐</div>
                          <div className="absolute bottom-2 left-8 text-yellow-400 animate-ping" style={{ animationDelay: '1s' }}>💫</div>
                          <div className="absolute bottom-3 right-4 text-yellow-300 animate-ping" style={{ animationDelay: '1.5s' }}>✨</div>
                        </div>
                      )}
                    </Button>
                  </div>
                  
                  {/* Progress indicator */}
                  {isGenerating && (
                    <div className="mt-6 text-center">
                      <Typography variant="small" color="textSecondary" className="mb-2">
                        🔮 Crafting your perfect email...
                      </Typography>
                      <div className={`w-full max-w-xs mx-auto h-2 rounded-full overflow-hidden ${currentTheme === 'vibrant' ? 'bg-brand-light-gray' : 'bg-gray-200'}`}>
                        <div className={`h-full rounded-full animate-pulse ${currentTheme === 'vibrant' ? 'bg-brand-forest' : 'bg-gray-600'}`} 
                             style={{ 
                               width: '100%',
                               animation: 'progress 2s ease-in-out'
                             }}>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Success message */}
                  {isGenerated && (
                    <div className="mt-6 text-center animate-fade-in">
                      <div className={`inline-flex items-center px-4 py-2 rounded-full ${currentTheme === 'vibrant' ? 'bg-green-100 text-green-800' : 'bg-green-50 text-green-700'}`}>
                        <span className="mr-2">🎉</span>
                        <Typography variant="small" weight="medium">
                          Your email app should open shortly with your message ready to send!
                        </Typography>
                      </div>
                    </div>
                  )}
                </form>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
};

export default Contact;