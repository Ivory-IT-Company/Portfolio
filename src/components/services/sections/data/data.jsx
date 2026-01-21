import { AiOutlineHtml5, AiOutlinePython, AiTwotoneApi } from 'react-icons/ai';
import { BiRocket } from 'react-icons/bi';
import { DiAndroid, DiCode, DiDocker, DiJavascript1, DiRedis } from 'react-icons/di';
import { FaCss3, FaGitAlt, FaVuejs } from 'react-icons/fa';
import { FiFigma, FiFramer } from 'react-icons/fi';
import { GiAutoRepair } from 'react-icons/gi';
import { IoIosAnalytics } from 'react-icons/io';
import { LuBugOff } from 'react-icons/lu';
import { MdEditDocument, MdOutlineDesignServices } from 'react-icons/md';
import { RiPhpFill } from 'react-icons/ri';
import {
   SiDotnet,
   SiExpress,
   SiFastapi,
   SiFlask,
   SiJest,
   SiLaravel,
   SiMongodb,
   SiMysql,
   SiPostgresql,
   SiReact,
   SiSelenium,
   SiShadcnui,
   SiSupabase,
   SiTailwindcss,
   SiTypescript,
   SiVite,
   SiVitest,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

export const serviceList = [
   {
      name: 'Website Design',
      shortDesc:
         'We create stunning, modern, and fully responsive user interface designs that perfectly capture your brand identity and deliver exceptional user experiences across all devices including desktop, tablet, and mobile. Our design process includes wireframing, prototyping, and user testing to ensure pixel-perfect results.',
      icon: <MdOutlineDesignServices size={24} />,
   },
   {
      name: 'Website Development',
      shortDesc:
         'Comprehensive full-stack web development using cutting-edge technologies like React, Next.js, Vue.js, TypeScript, and modern JavaScript frameworks to build fast, scalable, and maintainable web applications that handle high traffic and complex functionality with optimal performance.',
      icon: <DiCode size={24} />,
   },
   {
      name: 'Mobile Development',
      shortDesc:
         'Professional native and cross-platform mobile app development for both iOS (Swift) and Android (Kotlin/Java) platforms using React Native, Flutter, and other frameworks to deliver smooth, native-like experiences with full access to device hardware and platform-specific features.',

      icon: <DiAndroid size={24} />,
   },
   {
      name: 'Technical Analysis',
      shortDesc:
         'In-depth technical analysis including comprehensive performance audits, detailed code reviews, security assessments, scalability evaluations, and technical feasibility studies to identify bottlenecks, vulnerabilities, and optimization opportunities in your existing systems and proposed solutions.',
      icon: <IoIosAnalytics size={24} />,
   },
   {
      name: 'Technical Documentation',
      shortDesc:
         'Complete technical documentation solutions including detailed API documentation (Swagger/OpenAPI), comprehensive user manuals, developer guides, architecture diagrams, deployment instructions, and maintenance documentation to ensure smooth onboarding and long-term project sustainability.',
      icon: <MdEditDocument size={24} />,
   },
   {
      name: 'Backend & API Integration',
      shortDesc:
         'Robust backend development and seamless API integration using Node.js, Python (FastAPI/Flask), PHP (Laravel), RESTful APIs, GraphQL, database optimization (PostgreSQL, MySQL, MongoDB), authentication systems (OAuth, JWT), and microservices architecture for scalable, secure data management.',
      icon: <AiTwotoneApi size={24} />,
   },
   // {
   //    name: 'Cloud Services',
   //    shortDesc:
   //       'Expert cloud architecture and deployment services across AWS, Microsoft Azure, and Google Cloud Platform including serverless architecture (Lambda, Functions), container orchestration (Docker, Kubernetes), cloud migration strategies, cost optimization, and fully managed infrastructure solutions.',
   //    imgUrl: '/images/cloud-services.jpg',
   //    icon: <IoCloudDoneOutline />
   // },
   {
      name: 'App Testing and Quality Assurance',
      shortDesc:
         'Comprehensive testing strategies and quality assurance processes, including unit/integration testing, automated QA pipelines, defect prevention, regression suites, and performance validation to ensure reliable software delivery.',
      icon: <LuBugOff size={22} />,
   },
   // {
   //    name: 'DevOps & CI/CD',
   //    shortDesc:
   //       'Complete DevOps implementation including continuous integration/continuous deployment pipelines (GitHub Actions, Jenkins, GitLab CI), infrastructure as code (Terraform), containerization (Docker), orchestration (Kubernetes), monitoring (Prometheus, Grafana), and automated testing for faster, reliable deployments.',
   // },
   {
      name: 'Performance Optimization',
      shortDesc:
         'Website and application performance optimization focusing on Core Web Vitals (LCP, FID, CLS), image optimization, code splitting, lazy loading, caching strategies, database query optimization, and critical rendering path improvements for lightning-fast user experiences.',
      icon: <BiRocket size={24} />,
   },
   {
      name: 'Maintenance & Support',
      shortDesc:
         'Comprehensive 24/7 website and application maintenance including proactive monitoring, security patches, performance optimization, bug fixes, feature updates, backup management, uptime guarantees, dedicated support channels, and emergency response protocols to ensure uninterrupted service.',
      icon: <GiAutoRepair size={24} />,
   },
];

export const TechnologyList = {
   Languages: [
      { name: 'TypeScript', logo: <SiTypescript size={18} /> },
      { name: 'JavaScript', logo: <DiJavascript1 size={18} /> },
      { name: 'C#', logo: <TbBrandCSharp size={18} /> },
      { name: 'Python', logo: <AiOutlinePython size={18} /> },
      { name: 'PHP', logo: <RiPhpFill size={22} /> },
      { name: 'SQL', logo: '' },
      { name: 'HTML5', logo: <AiOutlineHtml5 size={18} /> },
      { name: 'CSS3', logo: <FaCss3 size={18} /> },
   ],
   Frameworks: [
      { name: 'Laravel', logo: <SiLaravel size={18} /> },
      { name: '.NET Core', logo: <SiDotnet size={18} /> },
      { name: 'FastAPI', logo: <SiFastapi size={18} /> },
      { name: 'Flask', logo: <SiFlask size={18} /> },
      { name: 'Vue.js', logo: <FaVuejs size={18} /> },
      { name: 'Express.js', logo: <SiExpress size={18} /> },
   ],
   Libraries: [
      { name: 'React', logo: <SiReact size={18} /> },
      { name: 'Framer Motion', logo: <FiFramer size={18} /> },
      { name: 'Tailwind CSS', logo: <SiTailwindcss size={18} /> },
      { name: 'shadcn/ui', logo: <SiShadcnui size={18} /> },
   ],
   Design: [{ name: 'Figma', logo: <FiFigma size={18} /> }],
   Testing: [
      { name: 'Selenium', logo: <SiSelenium size={18} /> },
      { name: 'Jest', logo: <SiJest size={18} /> },
      { name: 'Vitest', logo: <SiVitest size={18} /> },
   ],

   Architecture: [
      { name: 'Class Diagrams', logo: '' },
      { name: 'Sequence Diagrams', logo: '' },
      { name: 'Use Case Diagrams', logo: '' },
      { name: 'Component Diagrams', logo: '' },
      { name: 'Subject Domain Models', logo: '' },
      { name: 'State Machine Diagrams', logo: '' },
      { name: 'Activity Diagrams', logo: '' },
      { name: 'Package Diagrams', logo: '' },
   ],
   'Database And Caching': [
      { name: 'PostgreSQL', logo: <SiPostgresql size={18} /> },
      { name: 'MySQL', logo: <SiMysql size={18} /> },
      { name: 'MSSQL', logo: '' },
      { name: 'MongoDB', logo: <SiMongodb size={18} /> },
      { name: 'Redis', logo: <DiRedis size={18} /> },
      { name: 'Supabase', logo: <SiSupabase size={18} /> },
   ],
   'Tooling And DevOps': [
      { name: 'Docker', logo: <DiDocker size={18} /> },
      { name: 'Git', logo: <FaGitAlt size={18} /> },
      { name: 'Vite', logo: <SiVite size={18} /> },
   ],
};
