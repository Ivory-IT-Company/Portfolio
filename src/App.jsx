import { Routes, Route } from 'react-router';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/landing/Home';

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>

         <Footer />
      </>
   );
}

export default App;
