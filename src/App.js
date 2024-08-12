import logo from './logo.svg';
import './App.css';

import ShowData from './Components/ShowData';
import ExpenseTracker from './Components/ExpenseTracker';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowData/>}></Route>
          <Route path="/add" element={<ExpenseTracker/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
