import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import UserList from './components/User'
import Header from './components/Header';
function App() {

 
  return (
    <div className="App">
      
    <UserList/>
    </div>
  );
}

export default App;
