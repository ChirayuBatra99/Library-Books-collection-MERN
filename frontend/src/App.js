import './App.css';
import Home from './Pages/Home/Home.js';
import Add from './Pages/Add/Add.js';
import Edit from './Pages/Edit/Edit.js';

import {BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/create" element={ <Add/>} />
        <Route path="/edit/:id" element={<Edit/>}/>
    </Routes>
     </BrowserRouter>
  );
}

export default App;
