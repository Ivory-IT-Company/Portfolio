import { FaFacebook, FaGithub, FaReddit } from 'react-icons/fa';
import passport from './../../assets/images/passport.jpg';
import belloImage from '../../assets/images/bello.jpg';
import emptyImage from '../../assets/images/userplaceholder.jpg';

export const members = [
   {
      Name: 'Arowolo Isaac',
      Role: 'Software Developer & System Analyst',
      SocialMedia: [
         {
            name: 'Facebook',
            link: 'https://www.facebook.com/oluwapelumiisaac.arowolo/',
            icon: <FaFacebook className="w-6 h-6 fill-current" />,
         },
         {
            name: 'Reddit',
            link: 'https://www.reddit.com/user/SuperbCount5521/',
            icon: <FaReddit className="w-6 h-6 fill-current" />,
         },
         {
            name: 'Github',
            link: 'https://github.com/arowoloisaac',
            icon: <FaGithub className="w-6 h-6 fill-current" />,
         },
      ],
      ImageUrl: passport,
   },
   {
      Name: 'Bello AbdulQudus',
      Role: 'Full Stack Developer & Mobile Developer',
      SocialMedia: [
         {
            name: 'Facebook',
            link: 'https://www.facebook.com/oluwapelumiisaac.arowolo/',
            icon: <FaFacebook className="w-6 h-6 fill-current" />,
         },
         {
            name: 'Reddit',
            link: 'https://www.reddit.com/user/SuperbCount5521/',
            icon: <FaReddit className="w-6 h-6 fill-current" />,
         },
         {
            name: 'Github',
            link: 'https://github.com/arowoloisaac',
            icon: <FaGithub className="w-6 h-6 fill-current" />,
         },
      ],
      ImageUrl: belloImage,
   },
   {
      Name: 'Fagade Qureeb',
      Role: 'Co-founder',
      SocialMedia: [
         {
            name: 'Facebook',
            link: 'https://www.facebook.com/oluwapelumiisaac.arowolo/',
            icon: <FaFacebook className="w-6 h-6 fill-current" />,
         },
         {
            name: 'Reddit',
            link: 'https://www.reddit.com/user/SuperbCount5521/',
            icon: <FaReddit className="w-6 h-6 fill-current" />,
         },
         {
            name: 'Github',
            link: 'https://github.com/arowoloisaac',
            icon: <FaGithub className="w-6 h-6 fill-current" />,
         },
      ],
      ImageUrl: emptyImage,
   },
];
