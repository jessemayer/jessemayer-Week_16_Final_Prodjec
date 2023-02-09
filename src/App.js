import Navbar from './components/Navbar';
import './App.css';
import Pricing from './components/pages/Pricing';
import About from './components/pages/About';
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
 

  return (
    <>
      <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/pricing' element={<Pricing />} />
          </Routes>
        </div>
    </>
  );
}

export default App;
