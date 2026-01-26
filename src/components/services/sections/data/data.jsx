import { AiOutlineHtml5, AiOutlinePython, AiTwotoneApi } from 'react-icons/ai';
import { BiLogoPostgresql, BiLogoTypescript, BiRocket } from 'react-icons/bi';
import {
   DiAndroid,
   DiCode,
   DiDocker,
   DiJavascript1,
   DiRedis,
} from 'react-icons/di';
import { FaCss3, FaGitAlt, FaVuejs } from 'react-icons/fa';
import { FiFigma, FiFramer } from 'react-icons/fi';
import { GiAutoRepair } from 'react-icons/gi';
import { IoIosAnalytics } from 'react-icons/io';
import { LuBugOff } from 'react-icons/lu';
import { MdEditDocument, MdOutlineDesignServices } from 'react-icons/md';
import { RiPhpFill } from 'react-icons/ri';
import {
   SiCanva,
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
      icon: <MdOutlineDesignServices className="sm:size-8.5" />,
   },
   {
      name: 'Website Development',
      shortDesc:
         'Comprehensive full-stack web development using cutting-edge technologies like React, Vue.js, TypeScript, and modern JavaScript frameworks to build fast, scalable, and maintainable web applications that handle high traffic and complex functionality with optimal performance.',
      icon: <DiCode className="sm:size-8.5" />,
   },
   {
      name: 'Mobile Development',
      shortDesc:
         'Professional native and cross-platform mobile app development for both iOS and Android (Kotlin/Java) platforms using React Native, Flutter, and other frameworks to deliver smooth, native-like experiences with full access to device hardware and platform-specific features.',

      icon: <DiAndroid className="sm:size-8.5" />,
   },
   {
      name: 'Technical Analysis',
      shortDesc:
         'In-depth technical analysis including comprehensive performance audits, detailed code reviews, security assessments, scalability evaluations, and technical feasibility studies to identify bottlenecks, vulnerabilities, and optimization opportunities in your existing systems and proposed solutions.',
      icon: <IoIosAnalytics className="sm:size-8.5" />,
   },
   {
      name: 'Technical Documentation',
      shortDesc:
         'Complete technical documentation solutions including detailed API documentation (Swagger/OpenAPI), comprehensive user manuals, developer guides, architecture diagrams, deployment instructions, and maintenance documentation to ensure smooth onboarding and long-term project sustainability.',
      icon: <MdEditDocument className="sm:size-8.5" />,
   },
   {
      name: 'Backend & API Integration',
      shortDesc:
         'Robust backend development and seamless API integration using Node.js (Express.js), C# (.NET), Python (FastAPI/Flask), PHP (Laravel), RESTful APIs, GraphQL, database optimization (PostgreSQL, MySQL, MSSQL, MongoDB), authentication systems (OAuth, JWT), and microservices architecture for scalable, secure data management.',
      icon: <AiTwotoneApi className="sm:size-8.5" />,
   },
   // {
   //    name: 'Cloud Services',
   //    shortDesc:
   //       'Expert cloud architecture and deployment services across AWS, Microsoft Azure, and Google Cloud Platform including serverless architecture (Lambda, Functions), container orchestration (Docker, Kubernetes), cloud migration strategies, cost optimization, and fully managed infrastructure solutions.',
   //    imgUrl: '/images/cloud-services.jpg',
   //    icon: <IoCloudDoneOutline />
   // },
   {
      name: 'Testing & Quality Assurance',
      shortDesc:
         'Comprehensive testing strategies and quality assurance processes, including unit/integration testing, automated QA pipelines, defect prevention, regression suites, and performance validation to ensure reliable software delivery.',
      icon: <LuBugOff className="sm:size-8.5" />,
   },
   // {
   //    name: 'DevOps & CI/CD',
   //    shortDesc:
   //       'Complete DevOps implementation including continuous integration/continuous deployment pipelines (GitHub Actions, Jenkins, GitLab CI), infrastructure as code (Terraform), containerization (Docker), orchestration (Kubernetes), monitoring (Prometheus, Grafana), and automated testing for faster, reliable deployments.',
   // },
   {
      name: 'Performance Optimization',
      shortDesc:
         'Website and application performance optimization focusing on Core Web Vitals, image optimization, code splitting, lazy loading, caching strategies, database query optimization, and critical rendering path improvements for lightning-fast user experiences.',
      icon: <BiRocket className="sm:size-8.5" />,
   },
   {
      name: 'Maintenance & Support',
      shortDesc:
         'Comprehensive 24/7 website and application maintenance including proactive monitoring, security patches, performance optimization, bug fixes, feature updates, backup management, uptime guarantees, dedicated support channels, and emergency response protocols to ensure uninterrupted service.',
      icon: <GiAutoRepair className="sm:size-8.5" />,
   },
];

export const TechnologyList = {
   Languages: [
      {
         name: 'TypeScript',
         logo: (
            <BiLogoTypescript
               style={{ color: '#3178C6' }}
               className="size-3 lg:size-6"
            />
         ),
      },
      {
         name: 'JavaScript',
         logo: (
            <DiJavascript1
               style={{ color: '#F7DF1E' }}
               className="size-4 lg:size-6"
            />
         ),
      },
      {
         name: 'C#',
         logo: (
            <TbBrandCSharp
               style={{ color: '#9B4F96' }}
               className="size-4 lg:size-6"
            />
         ),
      },
      {
         name: 'Python',
         logo: (
            <AiOutlinePython
               style={{ color: '#3776AB' }}
               className="size-4 lg:size-6"
            />
         ),
      },
      {
         name: 'PHP',
         logo: (
            <RiPhpFill
               style={{ color: '#787CB5' }}
               className="size-4 lg:size-6"
            />
         ),
      },
      { name: 'SQL', logo: '' },
      {
         name: 'HTML5',
         logo: (
            <AiOutlineHtml5
               style={{ color: '#E34F26' }}
               className="size-4 lg:size-6"
            />
         ),
      },
      {
         name: 'CSS3',
         logo: (
            <FaCss3 style={{ color: '#1572B6' }} className="size-4 lg:size-6" />
         ),
      },
   ],
   Frameworks: [
      {
         name: 'Laravel',
         logo: (
            <SiLaravel
               style={{ color: '#FF2D20' }}
               className="size-4 lg:size-6"
            />
         ),
      },
      {
         name: '.NET Core',
         logo: (
            <SiDotnet
               style={{ color: '#512BD4' }}
               className="size-6 lg:size-6"
            />
         ),
      },
      {
         name: 'FastAPI',
         logo: (
            <SiFastapi
               style={{ color: '#FC5157' }}
               className="size-3 lg:size-6"
            />
         ),
      },
      {
         name: 'Flask',
         logo: (
            <SiFlask
               style={{ color: '#1F1F1G' }}
               className="size-4 lg:size-6"
            />
         ),
      },
      {
         name: 'Vue.js',
         logo: <FaVuejs style={{ color: '#42B883' }} size={18} />,
      },
      {
         name: 'Express.js',
         logo: <SiExpress style={{ color: '#000000' }} size={18} />,
      },
   ],
   Libraries: [
      {
         name: 'React',
         logo: <SiReact style={{ color: '#61DBFB' }} size={18} />,
      },
      {
         name: 'Framer Motion',
         logo: <FiFramer style={{ color: '#0051FF' }} size={18} />,
      },
      {
         name: 'Tailwind CSS',
         logo: <SiTailwindcss style={{ color: '#06B6D4' }} size={18} />,
      },
      {
         name: 'shadcn/ui',
         logo: <SiShadcnui style={{ color: '#0F172A' }} size={18} />,
      },
   ],
   Design: [
      {
         name: 'Figma',
         logo: <FiFigma style={{ color: '#F24E1E' }} size={18} />,
      },
      {
         name: 'Canva',
         logo: <SiCanva style={{ color: '#00C4CC' }} size={18} />,
      },
   ],
   Testing: [
      {
         name: 'Selenium',
         logo: <SiSelenium style={{ color: '#3CB371' }} size={18} />,
      },
      { name: 'Jest', logo: <SiJest style={{ color: '#C14588' }} size={18} /> },
      {
         name: 'Vitest',
         logo: <SiVitest style={{ color: '#9147FF' }} size={18} />,
      },
   ],
   // Architecture: [
   //    { name: 'Class Diagrams', logo: '' },
   //    { name: 'Sequence Diagrams', logo: '' },
   //    { name: 'Use Case Diagrams', logo: '' },
   //    { name: 'Component Diagrams', logo: '' },
   //    { name: 'Subject Domain Models', logo: '' },
   //    { name: 'State Machine Diagrams', logo: '' },
   //    { name: 'Activity Diagrams', logo: '' },
   //    { name: 'Package Diagrams', logo: '' },
   // ],
   'Database And Caching': [
      {
         name: 'PostgreSQL',
         logo: (
            <BiLogoPostgresql
               className="size-4 lg:size-7"
               style={{ color: '#336791' }}
            />
         ),
      },
      {
         name: 'MySQL',
         logo: (
            <SiMysql
               className="size-4 lg:size-7"
               style={{ color: '#336791' }}
            />
         ),
      },
      { name: 'MSSQL', logo: '' },
      {
         name: 'MongoDB',
         logo: (
            <SiMongodb
               className="size-4 lg:size-7"
               style={{ color: 'green' }}
            />
         ),
      },
      {
         name: 'Redis',
         logo: (
            <DiRedis
               size={18}
               className="size-4 lg:size-7"
               style={{ color: 'red' }}
            />
         ),
      },
      {
         name: 'Supabase',
         logo: (
            <SiSupabase
               className="size-4 lg:size-7"
               style={{ color: '#22c55e' }}
            />
         ),
      },
   ],
   'Tooling And DevOps': [
      {
         name: 'Docker',
         logo: <DiDocker style={{ color: '#2496ED' }} size={18} />,
      },
      {
         name: 'Git',
         logo: <FaGitAlt style={{ color: '#F05032' }} size={18} />,
      },
      { name: 'Vite', logo: <SiVite style={{ color: '#646CFF' }} size={18} /> },
   ],
};
