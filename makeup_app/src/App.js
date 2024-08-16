// // import './App.css';
// import Main from './layouts/Main';

// function App() {
//   return (
//     <div className="App">
//       <Main />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './layouts/Main';

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/about" element={<Main />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
