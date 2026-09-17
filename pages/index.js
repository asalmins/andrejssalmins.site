import React, { useState } from 'react';

export default function FinanceConsultancy() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: 'var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)', color: 'var(--text-primary)' }}>
      <style>{`
        :root {
          --surface-0: #f9f9f9;
          --surface-1: #ffffff;
          --surface-2: #ffffff;
          --text-primary: #000000;
          --text-secondary: #666666;
          --text-muted: #999999;
          --text-accent: #0066cc;
          --text-success: #228b22;
          --text-warning: #ff8c00;
          --bg-accent: #e6f0ff;
          --bg-success: #e8f5e9;
          --bg-warning: #fff3e0;
          --border: #e0e0e0;
          --radius: 8px;
        }
        
        @media (prefers-color-scheme: dark) {
          :root {
            --surface-0: #1a1a1a;
            --surface-1: #2a2a2a;
            --surface-2: #1f1f1f;
            --text-primary: #ffffff;
            --text-secondary: #b0b0b0;
            --text-muted: #808080;
            --text-accent: #4d94ff;
            --text-success: #66bb6a;
            --text-warning: #ffb74d;
            --bg-accent: #1a3a4d;
            --bg-success: #1b5e20;
            --bg-warning: #4d2600;
            --border: #404040;
          }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          background: var(--surface-0);
        }
      `}</style>

      <nav style={{
        position: 'sticky',
        top: 0,
        background: 'var(--surface-2)',
        borderBottom: '1px solid var(--border)',
        zIndex: 100,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '20px', fontWeight: 500 }}>Andrejs Salmins</div>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <button onClick={() => scrollToSection('services')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', fontSize: '16px' }}>Services</button>
          <button onClick={() => scrollToSection('about')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', fontSize: '16px' }}>About</button>
          <button onClick={() => scrollToSection('contact')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', fontSize: '16px' }}>Contact</button>
        </div>
      </nav>

      <section id="hero" style={{ padding: '6rem 2rem', textAlign: 'center', background: 'var(--surface-0)' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 500, marginBottom: '1rem', lineHeight: 1.2 }}>
          Strategic Finance & Accounting Consulting
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
          FP&A, revenue accounting, finance operations, and AI-powered automation for scaling companies. I help finance teams build better controls, reporting, forecasting, and decision-making infrastructure.
        </p>
        <button 
          onClick={() => scrollToSection('contact')}
          style={{
            padding: '12px 28px',
            background: 'var(--text-primary)',
            color: 'var(--surface-2)',
            border: 'none',
            borderRadius: 'var(--radius)',
            fontSize: '16px',
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          Let's talk
        </button>
      </section>

      <section id="services" style={{ padding: '4rem 2rem', background: 'var(--surface-2)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 500, marginBottom: '3rem', textAlign: 'center' }}>Services</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{
              background: 'var(--surface-1)',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid var(--border)'
            }}>
              <div style={{
                fontSize: '28px',
                marginBottom: '1rem',
                color: 'var(--text-accent)'
              }}>
                📊
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '1rem' }}>
                Finance & Accounting Operations
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Month-end close optimization, journal entries, reconciliations, accruals, revenue recognition (ASC 606), accounts payable, controls, and audit readiness. I help build scalable processes and systems that ensure accuracy and compliance.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', background: 'var(--bg-accent)', color: 'var(--text-accent)', padding: '4px 8px', borderRadius: 'var(--radius)' }}>Close processes</span>
                <span style={{ fontSize: '12px', background: 'var(--bg-accent)', color: 'var(--text-accent)', padding: '4px 8px', borderRadius: 'var(--radius)' }}>ASC 606</span>
                <span style={{ fontSize: '12px', background: 'var(--bg-accent)', color: 'var(--text-accent)', padding: '4px 8px', borderRadius: 'var(--radius)' }}>Controls</span>
              </div>
            </div>

            <div style={{
              background: 'var(--surface-1)',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid var(--border)'
            }}>
              <div style={{
                fontSize: '28px',
                marginBottom: '1rem',
                color: 'var(--text-success)'
              }}>
                📈
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '1rem' }}>
                FP&A & Business Analytics
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Budgeting, forecasting, scenario planning, rolling forecasts, KPI dashboards, revenue modeling, variance analysis, and board reporting. I connect accounting accuracy with business decision-making to improve forecasting and strategic planning.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', background: 'var(--bg-success)', color: 'var(--text-success)', padding: '4px 8px', borderRadius: 'var(--radius)' }}>Forecasting</span>
                <span style={{ fontSize: '12px', background: 'var(--bg-success)', color: 'var(--text-success)', padding: '4px 8px', borderRadius: 'var(--radius)' }}>KPI reporting</span>
                <span style={{ fontSize: '12px', background: 'var(--bg-success)', color: 'var(--text-success)', padding: '4px 8px', borderRadius: 'var(--radius)' }}>Modeling</span>
              </div>
            </div>

            <div style={{
              background: 'var(--surface-1)',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid var(--border)'
            }}>
              <div style={{
                fontSize: '28px',
                marginBottom: '1rem',
                color: 'var(--text-warning)'
              }}>
                🤖
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '1rem' }}>
                AI & Finance Automation
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Process automation, systems implementation (NetSuite, Salesforce, RevPro), Excel & Power BI automation, analytics workflows, and AI applications for finance. I design scalable infrastructure that reduces manual work and improves decision speed.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', background: 'var(--bg-warning)', color: 'var(--text-warning)', padding: '4px 8px', borderRadius: 'var(--radius)' }}>Automation</span>
                <span style={{ fontSize: '12px', background: 'var(--bg-warning)', color: 'var(--text-warning)', padding: '4px 8px', borderRadius: 'var(--radius)' }}>Systems</span>
                <span style={{ fontSize: '12px', background: 'var(--bg-warning)', color: 'var(--text-warning)', padding: '4px 8px', borderRadius: 'var(--radius)' }}>AI/ML</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" style={{ padding: '4rem 2rem', background: 'var(--surface-0)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 500, marginBottom: '2rem' }}>About</h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            I'm a strategic finance and accounting consultant with an MBA and 15+ years of experience across revenue management, FP&A, accounting operations, and finance systems. I work with scaling companies in tech, SaaS, and high-growth industries to build stronger finance foundations.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            My expertise spans the full finance stack — from day-to-day accounting accuracy and close processes, through FP&A forecasting and analytics, to systems and process automation with AI. I specialize in revenue recognition (ASC 606), order-to-cash operations, and helping finance teams scale without adding headcount.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-primary)' }}>
            I work best with companies that are ready to move beyond spreadsheets and build scalable finance infrastructure. Based in San Francisco, I'm available for consulting projects, interim leadership, and advisory work.
          </p>
        </div>
      </section>

      <section id="contact" style={{ padding: '4rem 2rem', background: 'var(--surface-2)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 500, marginBottom: '1rem', textAlign: 'center' }}>Get in touch</h2>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem' }}>
            Tell me about your finance challenges. I'll reach out within 24 hours.
          </p>
          
          {submitted && (
            <div style={{
              background: 'var(--bg-success)',
              color: 'var(--text-success)',
              padding: '1rem',
              borderRadius: 'var(--radius)',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              Thanks for reaching out! I'll get back to you soon.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                  background: 'var(--surface-0)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@company.com"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                  background: 'var(--surface-0)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                placeholder="What finance challenges are you facing?"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  background: 'var(--surface-0)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>
            
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                background: 'var(--text-primary)',
                color: 'var(--surface-2)',
                border: 'none',
                borderRadius: 'var(--radius)',
                fontSize: '16px',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        background: 'var(--surface-0)',
        borderTop: '1px solid var(--border)',
        color: 'var(--text-secondary)',
        fontSize: '14px'
      }}>
        <p>© 2024 Andrejs Salmins. Based in San Francisco.</p>
      </footer>
    </div>
  );
}
