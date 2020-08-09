import React from 'react';
import BarChart from "./BarChart/BarChart";
import List from "./List/List";


import './App.css';

function App() {

    return (
        <div className="App">
            <h2>Graphs with React</h2>

            <BarChart />
            <List />

        </div>
    );
}

export default App;