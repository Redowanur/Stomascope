import './App.css';
import Topbar from './components/Topbar'
import Herosection from './components/Herosection'
import Service from './components/Service';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Topbar/> 
      <Herosection/>
			<Service/>
      <Footer/>
    </>
  );
}

export default App;
