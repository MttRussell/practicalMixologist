import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
const [ingredients, setIngredients] = useState ([]);
const [userQuery, setUserQuery] = useState ('');

  useEffect(() => {
    // const myHeaders = new Headers();
const ingredients = "sugar";
const instructions = 
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
      //update 'ingredients state with response from API
      setIngredients(response.data);
    });
    //Add an empty array here to prevent the callback function from running every time our component re-renders!
  }, []);

  return (
    <div className="App">
      <h1>Practical Mixologist</h1>
      <h2>What ingredient is languishing unused in your cupboard? Input below for a selection of cocktails that incorporate it!</h2>
      <input type="text" placeholder="Enter an ingredient to see cocktail recipes!" onChange={(event) => {setUserQuery(event.target.value);
      console.log(event)
      }} />
      {/* {ingredients.map(in) => {

      })} */}
  
    <div>
    <footer>
        Created by Matthew Russell @ Juno College © 2022
    </footer>
    </div>
    </div>
  )
}

export default App;
