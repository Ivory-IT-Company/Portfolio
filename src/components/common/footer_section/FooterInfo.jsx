import { FaGithub, FaFacebook } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { Mail, MapPin, Phone } from 'lucide-react';

export const socialIcons = [
   {
      icon: <FaGithub size={22} />,
      href: 'https://github.com/Ivory-IT-Company',
      label: 'GitHub',
   },
   {
      icon: <FaFacebook size={22} />,
      href: 'https://facebook.com',
      label: 'Facebook',
   },
   {
      icon: <BsTwitterX size={22} />,
      href: 'https://twitter.com',
      label: 'Twitter',
   },
];


export const quickLinks = [
   { name: 'Home', link: 'home' },
   { name: 'About', link: 'about' },
   { name: 'Services', link: 'services' },
   { name: 'Team', link: 'team' },
];

export const services = [
   { name: 'Web Development', link: 'deve' },
   { name: 'Website Design', link: 'about' },
   { name: 'Mobile Development', link: 'services' },
   { name: 'System Analysis', link: 'team' },
   { name: 'Technical Documentation', link: 'team' },
];

export const contacts = [
   {
      icon: <Mail size={18} className="text-indigo-500" />,
      text: 'ivory.it.company@gmail.com',
   },
   {
      icon: <Phone size={18} className="text-indigo-500" />,
      text: '090 2419-12-88',
   },
   {
      icon: <MapPin size={18} className="text-indigo-500" />,
      text: 'Kwara State, Nigeria',
   },
];


export const AboutUS = [
   {
      icon: <Mail size={18} className="text-indigo-500" />,
      text: 'ivory.it.company@gmail.com',
   },
   {
      icon: <Phone size={18} className="text-indigo-500" />,
      text: '090 2419-12-88',
   },
   {
      icon: <MapPin size={18} className="text-indigo-500" />,
      text: 'Kwara State, Nigeria',
   },
];