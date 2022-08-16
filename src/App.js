import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    // const myHeaders = new Headers();
const ingredients = "sugar";
    // myHeaders.append("X-Api-Key", "I0byMt2hg8AjzK1rYh2DFA==WrK0dTCyskeA4FbW");
    // console.log(myHeaders);
    
    axios({
      url: `https://api.api-ninjas.com/v1/cocktail?ingredients=${ingredients}`,
      method: "GET",
      headers: {"X-Api-Key": "I0byMt2hg8AjzK1rYh2DFA==WrK0dTCyskeA4FbW"},
      dataResponse: "json",
      params: {
        
        format: "json"
      },
    }).then((response) => {
      console.log(response);
    });
    //Add an empty array here to prevent the callback function from running every time our component re-renders!
  }, []);

  return (
    <div className="App">
      <h1>Practical Mixologist</h1>
      <h2>What ingredient is languishing unused in your cupboard? Input below for a list of cocktails that incorporate it!</h2>
    </div>
  )
}

export default App;
