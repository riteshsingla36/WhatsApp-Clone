import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Left from "./Left"
import Login from './Login';
import Right from "./Right"

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="app">

      {
        !user ? <Login /> : (
          <div className="main">

            <Left />
            <Routes>
              <Route path='/chat/:id' element={<Right />} />

            </Routes>
          </div>
        )
      }


    </div>
  );
}

export default App;
