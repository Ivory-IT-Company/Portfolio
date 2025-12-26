import { Routes, Route } from 'react-router';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/landing/Home';
import Page404 from './components/error/Page404';

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path='*' element={<Page404 />} />
         </Routes>

         <Footer />
      </>
   );
}

export default App;
