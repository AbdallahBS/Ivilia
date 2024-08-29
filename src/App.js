import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Prices from './components/Prices';
function App() {
  return (
    <Router>
      <Routes>
     
        <Route exact path="/" Component={Main} />
        <Route exact path="/reserve" Component={Prices} />
      
      </Routes>
    </Router>
  );
}
export default App;