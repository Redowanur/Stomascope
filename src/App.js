import './App.css';
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'

function App() {
  return (
    <>
      <header>
        <Navbar/>
        <Herosection/>
      </header>

      <div className="h-96 bg-blue-100">
          <div className="w-2/3 mx-auto flex items-center h-full">
              <div className="img w-1/3 h-80 bg-green-500 bg-contain bg-no-repeat"></div>
              <div className="w-2/3 h-80 bg-black-100">
                  <h1 className="text-3xl font-bold">Our Services</h1>
                  <ul>
                      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                      <li> Eos, ad officia atque dignissimos cum.</li>
                      <li>deserunt earum repudiandae odio</li>
                      <li>est tempore laboriosam unde facere temporibus quis</li>
                      <li>consectetur hic facilis, atque dignissimos cum veritatis!</li>
                  </ul>
              </div>
          </div>
      </div>
    </>
  );
}

export default App;
