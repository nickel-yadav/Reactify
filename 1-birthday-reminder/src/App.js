import React from 'react'
import './App.css';
import List from './components/List'
import data from './data'
import { useState } from 'react'

function App() {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={clearAll}></button>
      </section>
    </main>
  );
}

export default App;
