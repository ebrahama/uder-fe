import{ Header,Footer,} from './components/colloc'
import{ Discover,Detail,Seller,} from './pages/colloc'

  import './App.css';
  import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      
          <div>
            <Routes>
              <Route path="/"  element={<Discover />} />
              <Route path="/Detail/id:" element={<Detail />} />
              <Route path="/sell" element={<Seller />} />
            </Routes>
          </div>

    

       <Footer/>
    </div>
  );
}

export default App;
