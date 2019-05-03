import React from 'react';
import './App.css';
import Header from './components/Header'

let userName = "Alojz";

function App() {
    return (
        <React.Fragment>
            <Header name={userName}/>
        </React.Fragment>
    );
}

export default App;
