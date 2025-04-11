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
    <section id="contact" className="py-16 bg-white dark:bg-neutral-800 fade-in">
      <div className="container-custom">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="section-subtitle">Interested in working together? Let's connect!</p>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg border border-neutral-200 dark:border-neutral-600 h-full">
              <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-white">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary dark:text-primary-400 flex items-center justify-center mr-4 mt-0.5">
                    <FontAwesomeIcon icon={["fas", "envelope"]} />
                  </div>
                  <div>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-1">Email Address</p>
                    <p className="text-neutral-800 dark:text-white">{personalInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary dark:text-primary-400 flex items-center justify-center mr-4 mt-0.5">
                    <FontAwesomeIcon icon={["fas", "location-dot"]} />
                  </div>
                  <div>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-1">Location</p>
                    <p className="text-neutral-800 dark:text-white">{personalInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary dark:text-primary-400 flex items-center justify-center mr-4 mt-0.5">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </div>
                  <div>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-1">LinkedIn</p>
                    <a 
                      href={personalInfo.linkedin}
                      className="text-primary dark:text-primary-400 hover:underline" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/saidlfagrouche
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary dark:text-primary-400 flex items-center justify-center mr-4 mt-0.5">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </div>
                  <div>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-1">GitHub</p>
                    <a 
                      href={personalInfo.github}
                      className="text-primary dark:text-primary-400 hover:underline" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      github.com/slfagrouche
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form 
              onSubmit={handleSubmit}
              className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg border border-neutral-200 dark:border-neutral-600"
            >
              <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-white">Send Message</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-400 bg-white dark:bg-neutral-800" 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-400 bg-white dark:bg-neutral-800" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-400 bg-white dark:bg-neutral-800" 
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-400 bg-white dark:bg-neutral-800" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-400 bg-white dark:bg-neutral-800 resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 bg-primary hover:bg-primary-600 text-white rounded-md transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
