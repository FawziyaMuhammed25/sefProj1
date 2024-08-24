import React, { useEffect } from 'react';

//  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Section1 from './components/section1';
// import Business from './components/Business';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#1a1919'; // Set your desired color
    
   
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  return (
    <div className="App">
      
      {/* <Router>
        
      <Routes>
      
        <Route path="/Business" element={< Business />} />
      </Routes>
    </Router> */}
    <Section1/>
      
    </div>
  );
}

export default App;
