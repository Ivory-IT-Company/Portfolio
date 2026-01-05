import { Routes, Route } from 'react-router';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/landing/Home';
import Page404 from './components/error/Page404';
import AboutPage from './components/about/AboutCompany';
import Team from './components/team/Team';
import Services from './components/services/Services';

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path='services' element={<Services />}/>
            <Route path="*" element={<Page404 />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="team" element={<Team />} />
         </Routes>

         <Footer />
      </>
   );
}

export default App;
