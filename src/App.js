import Button from "./components/Button";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Home} from './pages/home';
import {Login} from './pages/login';

function App() {
  return (
    <>
    <div className="App">
      <h1>Olá React</h1>
      <Button title="Entrar"/>
    </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
