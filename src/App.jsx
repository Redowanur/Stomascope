import { Route, Routes } from 'react-router-dom';
import Topbar from './components/TopBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ModelAnalysis from './pages/ModelAnalysis';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Topbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/model' element={<ModelAnalysis/>} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
