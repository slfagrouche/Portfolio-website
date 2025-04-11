import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { personalInfo } from "@/lib/constants";
import { apiRequest } from "@/lib/queryClient";
import { ContactFormData } from "@/types";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I'll get back to you soon!",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 beige-section-alt fade-in">
      <div className="container-custom">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="section-subtitle">Interested in working together? Let's connect!</p>
        
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="md:w-1/2">
            <div className="beige-card p-6 h-full backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100 font-serif">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary flex items-center justify-center mr-4 mt-0.5 shadow-sm">
                      <FontAwesomeIcon icon={["fas", "envelope"]} className="text-lg" />
                    </div>
                    <div>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1 font-medium">Email Address</p>
                      <p className="text-neutral-900 dark:text-neutral-100">{personalInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary flex items-center justify-center mr-4 mt-0.5 shadow-sm">
                      <FontAwesomeIcon icon={["fas", "location-dot"]} className="text-lg" />
                    </div>
                    <div>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1 font-medium">Location</p>
                      <p className="text-neutral-900 dark:text-neutral-100">{personalInfo.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary flex items-center justify-center mr-4 mt-0.5 shadow-sm">
                      <FontAwesomeIcon icon={["fab", "linkedin"]} className="text-lg" />
                    </div>
                    <div>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1 font-medium">LinkedIn</p>
                      <a 
                        href={personalInfo.linkedin}
                        className="text-primary dark:text-primary hover:underline group flex items-center" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <span className="group-hover:underline">linkedin.com/in/saidlfagrouche</span>
                        <FontAwesomeIcon 
                          icon={["fas", "arrow-up-right-from-square"]} 
                          className="ml-1.5 text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                        />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary flex items-center justify-center mr-4 mt-0.5 shadow-sm">
                      <FontAwesomeIcon icon={["fab", "github"]} className="text-lg" />
                    </div>
                    <div>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1 font-medium">GitHub</p>
                      <a 
                        href={personalInfo.github}
                        className="text-primary dark:text-primary hover:underline group flex items-center" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <span className="group-hover:underline">github.com/slfagrouche</span>
                        <FontAwesomeIcon 
                          icon={["fas", "external-link-alt"]} 
                          className="ml-1.5 text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form 
              onSubmit={handleSubmit}
              className="beige-card p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100 font-serif">Send Message</h3>
              
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1.5">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="beige-input w-full" 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1.5">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="beige-input w-full" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="beige-input w-full" 
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1.5">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="beige-input w-full" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-1.5">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="beige-input w-full resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 beige-button font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
