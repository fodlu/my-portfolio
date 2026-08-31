import ProjectCard from '../../components/ProjectCard';
import './projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Employee Management System (EMS)',
      description:
        'A comprehensive workforce management platform featuring role-based authentication, real-time staff clock-in/out tracking, automated leave workflows, and dynamic payslip generation. Streamlines daily operational attendance and payroll processing for modern organizations.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'CRON'],
      image: '/images/EmploymentManagement.png',
      liveLink: 'https://fullstack-ems-app.vercel.app/',
      githubLink: 'https://github.com/fodlu/fullstackEMS',
    },
    {
      id: 2,
      title: 'Enterprise Job Portal & Interview Hub',
      description:
        'A full-stack recruitment ecosystem connecting job seekers with recruiters. Features multi-role dashboards, company-specific interview prep modules, custom question banks, and live interview status tracking for streamlined talent acquisition.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Multer'],
      image: '/images/JobPortal.png',
      liveLink: 'https://job-portal-app-mu.vercel.app/',
      githubLink: 'https://github.com/fodlu/jobportal',
    },
    {
      id: 3,
      title: 'PingUp — Social Networking & Real-Time Chat Platform',
      description:
        'A feature-rich social networking app supporting real-time messaging, ephemeral stories, media uploads, and community connections. Integrates secure third-party authentication and instant WebSocket communication across global user bases.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Clerk', 'Cloudinary'],
      image: '/images/PingUp.png',
      liveLink: 'https://ping-up-bice.vercel.app/',
      githubLink: 'https://github.com/fodlu/pingup',
    },
    {
      id: 4,
      title: 'Quick Dine — Online Restaurant & Reservation Platform',
      description:
        'An end-to-end dining management and food ordering application. Provides granular role access for Site Admins, Restaurant Owners, and Diners to handle menu customization, table reservations, and seamless order fulfillment.',
      tech: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Render', 'CRON'],
      image: '/images/QuickDine.png',
      liveLink: 'https://quickdine-1-fq3f.onrender.com/',
      githubLink: 'https://github.com/fodlu/quickdine',
    },
    {
      id: 5,
      title: 'EstateHub — Multi-Role Real Estate & Property Marketplace',
      description:
        'A full-stack property marketplace connecting buyers, sellers, and agents. Features granular role-based access control (RBAC), real-time chat for buyer-agent price negotiations, and admin oversight modules to ensure transaction security and platform compliance.',
      tech: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Vercel'],
      image: '/images/real-estate.png',
      liveLink: 'https://real-estate-opal-two.vercel.app/',
      githubLink: 'https://github.com/fodlu/real-estate',
    },
    {
      id: 6,
      title: 'ExpenseTracker — Financial Analytics & Budgeting Platform',
      description:
        'An intuitive personal finance application designed to analyze spending habits and track daily expenses. Features dynamic graphical visualizations for daily, weekly, and monthly trends alongside automated recurring schedule updates.',
      tech: ['TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'CRON'],
      image: '/images/Trackexpense.png',
      liveLink: 'https://trackexpenses-app.vercel.app/',
      githubLink: 'https://github.com/fodlu/trackexpense',
    },
  ];

  return (
    <>
      <div className="projects-page">
        <h1>My Projects</h1>
        <p>Here are some projects I have built to solve real business problems.</p>

        <div className="projects-grid">
          {projects.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
