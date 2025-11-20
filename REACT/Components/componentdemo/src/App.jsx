
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Chennai from './component/Chennai.jsx';
import Kerala from './component/Kerala.jsx'; 

import './App.css';
import Karanataka from './component/Karanataka.jsx';

const App = ()=> {
  return (
    <Router>
      <div style={{ backgroundColor: 'black', color: 'white', padding: '20px', textAlign: 'center', marginBottom: '10px' }}>
        <Link to="/chennai" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>CHENNAI</Link>
        <Link to="/kerala" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>KERALA</Link>
        <Link to="/karanataka" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>KARNATAKA</Link>
      </div>

      <div className="content">
        <Routes>
          <Route path='/chennai' element={<Chennai />} />

          <Route path='/karanataka' element={<Karanataka />} />
          <Route path='/kerala' element={<Kerala />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
