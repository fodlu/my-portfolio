import FaqEach from './FaqEach';
import Tags from '../Tags';
import './faq.css';

const faq = [
  {
    question: 'Are you available for frelance and full-time opportunities?',
    answer:
      'Yes, I am open to freelance contracts, contract-to-hire, and ful-time roles. I am based in Nigeria and available for remote works globally.',
  },
  {
    question: 'What technologies and tools do you specialize in??',
    answer:
      'My core stack is Reactjs, Next.js, Typescript for frontend and Node.js, Express, PostgreSQL, and MongoDB for the backend. I also work with Docker, Git, REST APIs, Paystack, and cloud platforms like Vercel and Render.',
  },
  {
    question: 'What kind of projects do you build?',
    answer:
      'I build scalable web applications including SaaS platforms, e-commerce stores, dashboards, and fintech products. My focus is on performance, secuirity , and great user experience.',
  },
  {
    question: 'What is your typical process and timeline for a project?',
    answer:
      'I follow 4-steps process: Discover - Design and planning - Development - Deployment and support. Timeline vary by scope, but i provide a clear roadmap and milestone before we start.',
  },
  {
    question: 'Do you provide maintenance support after launch?',
    answer:
      'Yes, I offer post-launch support, bug-fixes, and features updates. we can also set up a monthly retainer for ongoing maintenance.',
  },
  {
    question: 'How do we get started working together?',
    answer:
      'The best way to reach out to me via the "Contact Me" button above. Tell me about your project goal and I will respond within 24 hours with the next steps',
  },
];

export default function FAQ() {
  return (
    <div className="faqs" id="faqs">
      <Tags>Frequently Asked Questions</Tags>
      {faq.map((item, index) => (
        <FaqEach item={item} key={index} />
      ))}
    </div>
  );
}
