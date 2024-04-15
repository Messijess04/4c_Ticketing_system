import React from 'react';
import Header from './Master/Header'; 
import Footer from './Master/Footer'; 
import './App.css'; 

const App = () => {
    return (
        <div className="app">
            <Header /> 
            <div className="main-content">
                {/* Main content of your app */}
            </div>
            <Footer /> 
        </div> 
    );
}

export default App;
