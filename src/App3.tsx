// App2.js
import './App2.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InGame from './containers/InGame';
import MenuPrincipal from './containers/MenuPrincipal';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<MenuPrincipal />} path="/" />
          <Route element={<InGame />} path="/play" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
