import React from 'react';
import Header from './Components/Header/Header';
import ToDoList from './Components/ToDoList/ToDoList';
import './App.css'

const App = () =>{
  return(
    <div className='App'>
        <Header/>
        <ToDoList/>
    </div>
    
  )
}
export default App;