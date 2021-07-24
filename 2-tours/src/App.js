import React, { useEffect } from 'react';
import { useState } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () =>  {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }  
  
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <div className="App">
      <Tours tours={tours} />
    </div>
  );
}

export default App;
