import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
const [ingredients, setIngredients] = useState ([]);
const [userQuery, setUserQuery] = useState ('');

  useEffect(() => {
const ingredients = "sugar";
    
    
    axios({
      url: `https://api.api-ninjas.com/v1/cocktail?ingredients=${ingredients}`,
      method: "GET",
      headers: {"X-Api-Key": "I0byMt2hg8AjzK1rYh2DFA==WrK0dTCyskeA4FbW"},
      dataResponse: "json",
      params: {   
        format: "json"
      },
    }).then((response) => {
      //update 'ingredients state with response from API
      setIngredients(response.data);
    });
    //Add an empty array here to prevent the callback function from running every time our component re-renders!
  }, []);

  return (
    <div className="App">
      <img src="images/old-fashioned.jpeg" alt="" />
      <h1>Practical Mixologist</h1>
      <h2>What ingredient is languishing unused in your cupboard? Input below for a selection of cocktails that incorporate it!</h2>
      <input type="text" placeholder="Enter an ingredient to see cocktail recipes!"  />
      <button >Submit!</button>
      {/* {ingredients.(in) => {
onChange={(event) => {setUserQuery(event.target.value);}}
      })} */}
  
    
    <footer>
        Created by Matthew Russell @ <a href="https://www.junocollege.com">Juno College</a> © 2022
    </footer>
    </div>
    
  )
}

export default App;
