import React from 'react';
import Header from './Master/Header'; 
import Footer from './Master/Footer'; 
import TodoList from './Tickets/TodoList.jsx';
import './App.css'; 

const App = () => {
    return (
        <div className="app">
            <Header /> 
            <div className="main-content">
             <TodoList /> 
            </div>
            <Footer /> 
        </div> 
    );
}

export default App;
