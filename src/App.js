import{ Header,Hero,Footer,} from './components/colloc'
import{ Discover,Detail,Seller,} from './pages/colloc'

  import './App.css';
  import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='cen'>
       <Hero/>  
          <div>
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/Detail/id:" element={<Detail />} />
              <Route path="/sell" element={<Seller />} />
            </Routes>
          </div>

       </div>

       <Footer/>
    </div>
  );
}

export default App;
