import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    const apiKey = `1`;
    axios({
      url: "www.thecocktaildb.com/api/json/v1/1/random.php",
      method: "GET",
      // headers: {X-API-KEY}
      dataResponse: "json",
      params: {
        key: apiKey,
        format: "json"
      },
    }).then((response) => {
      console.log(response);
    });
    //Add an empty array here to prevent the callback function from running every time our component re-renders!
  }, []);

  return (
    <div className="App">
      <h1>Cocktails</h1>
    </div>
  )
}

export default App;
