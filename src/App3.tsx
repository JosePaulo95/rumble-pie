// App2.js
import './App2.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Credits from './containers/Credits';
import InGame from './containers/InGame';
import MenuPrincipal from './containers/MenuPrincipal';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<MenuPrincipal />} path="/" />
          <Route element={<InGame />} path="/play" />
          <Route element={<Credits />} path="/credits" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
