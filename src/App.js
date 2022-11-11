import { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Popup from './Popup';
import Footer from './Footer';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [selected, setSelected] = useState(null);
  const [userQuery, setUserQuery] = useState('');

  const handleClick = (name) => {
    setSelected(name)
  }
  
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
        setIngredients(response.data.slice(0,5));
      });
    }
  
  return (
    <div className="App Wrapper">
      <Header />
      <div className="searchBar">
        <input type="search" value={userQuery} onChange={(event)=> setUserQuery(event.target.value)} placeholder="Enter an ingredient to see cocktail recipes!" />
        <button type="submit" onClick={fetchData}>Submit!</button>
        {ingredients.map((ingredient) => {
          return (
            <div className='cocktail-wrapper' onClick={() => handleClick(ingredient.name)}>
              <p className="cocktail" key={ingredient.name}>{ingredient.name}</p>
            </div>
          );
        })}
      </div>
      {!!selected && (
        <Popup trigger={selected} setTrigger={setSelected}>
          <h3>cello</h3>
        </Popup>
        
      )}
      <Footer />
    </div>

  )
}

export default App;
