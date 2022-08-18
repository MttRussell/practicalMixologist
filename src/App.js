import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [userQuery, setUserQuery] = useState('');


  
    const fetchData= () => {
      axios({
        url: `https://api.api-ninjas.com/v1/cocktail?ingredients=${userQuery}`,
        method: "GET",
        headers: { "X-Api-Key": "I0byMt2hg8AjzK1rYh2DFA==WrK0dTCyskeA4FbW" },
        dataResponse: "json",
        params: {
          format: "json",
          
          
  
        },
      }).then((response) => {
        //update 'ingredients state with response from API
        console.log(response.data)
        setIngredients(response.data);
      });
    }
    




    //Add an empty array here to prevent the callback function from running every time our component re-renders!
  

  return (
    <div className="App Wrapper">
      <Header />
      <div className="searchBar">
        <input type="search" value={userQuery} onChange={(event)=> setUserQuery(event.target.value)} placeholder="Enter an ingredient to see cocktail recipes!" />
        <button type="submit" onClick={fetchData}>Submit!</button>
        {ingredients.map((ingredient) => {
          return (
            <div>
              <p className="cocktail">{ingredient.name}</p>
              <div className="ingr">
              {/* <p>{ingredient.instructions}</p> */}
              {/* {ingredient.ingredients.map((item) => {
                return <p>{item}</p>;
              })} */}
              </div>
            </div>
          );
        })}
      </div>
      


      <footer>
        Created by Matthew Russell @ <a href="https://www.junocollege.com">Juno College</a> © 2022
      </footer>
    </div>

  )
}

export default App;
