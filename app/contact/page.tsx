'use client';
// pages/contact.tsx
import { useState, FC } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send, Twitter, Facebook } from 'lucide-react';
import styles from './Contact.module.css';

// Define a type for our form's state
interface FormData {
  name: string;
  phone: string;
  message: string;
}

const Contact: FC = () => {
  // Apply the FormData type to our useState hook
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '', message: '' });

  // Add types for the event handler's event object
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Add types for the form submission event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className={styles.pageWrapper}>
      <Navigation />
      
      <main>
        {/* --- Hero Section --- */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1>Contact Us</h1>
            <p>Home &gt; Contact Us</p>
          </div>
        </section>

        {/* --- Main Content Section --- */}
        <section className={styles.mainContentSection}>
          <div className={styles.contentGrid}>
            
            {/* Left Info Block */}
            <div className={styles.infoBlock}>
              <h2>We are next to your single call, feel free to get informed</h2>
              
              <div className={styles.infoItem}>
                <MapPin size={24} className={styles.icon} />
                <div>
                  <strong>Address</strong>
                  <p>Trans Nepal Tower, Piyush Marg, Anamnagar-09, Nepal</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <Phone size={24} className={styles.icon} />
                <div>
                  <strong>Contact</strong>
                  <p>Telephone: +977 21 501441</p>
                  <p>Fax: +977 21 501470</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Clock size={24} className={styles.icon} />
                <div>
                  <strong>Working hours</strong>
                  <p>10:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className={styles.socials}>
                <strong>Stay connected</strong>
                <div className={styles.socialIcons}>
                  <a href="#"><Twitter size={20} /></a>
                  <a href="#"><Facebook size={20} /></a>
                </div>
              </div>
            </div>

            {/* Right Form Block */}
            <div className={styles.formBlock}>
              <h3>Ready to Start?</h3>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Send Message</label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleInputChange} required></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>
                  Send <Send size={18} />
                </button>
              </form>
            </div>

          </div>
        </section>
        
        {/* --- Map Section --- */}
        <section className={styles.mapSection}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.748727186835!2d85.3285644150531!3d27.6941579828004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a0a65f68b3%3A0x8c17a461e5a5a2e!2sTrans%20Nepal%20Freight%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1663411516881!5m2!1sen!2snp" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Contact;
