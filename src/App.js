import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      {/* Wrap Routes inside BrowserRouter */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
