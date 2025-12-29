import { Routes, Route } from 'react-router';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/landing/Home';
import Page404 from './components/error/Page404';
import AboutPage from './components/about/AboutCompany';

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/about" element={<AboutPage />} />
         </Routes>

         <Footer />
      </>
   );
}

export default App;
