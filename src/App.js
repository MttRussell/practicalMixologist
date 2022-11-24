import { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Popup from './Popup';
import Footer from './Footer';

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [selected, setSelected] = useState(null);
  const [userQuery, setUserQuery] = useState('');

  const handleClick = (name) => {
    const selectedCocktail = cocktails.find(drink => drink.name === name)
    setSelected(selectedCocktail)
  }

  
  
    const fetchData = () => {
      axios({
        url: `https://api.api-ninjas.com/v1/cocktail?ingredients=${userQuery}`,
        method: "GET",
        headers: { "X-Api-Key": "I0byMt2hg8AjzK1rYh2DFA==WrK0dTCyskeA4FbW" },
        dataResponse: "json",
        params: {
          format: "json",
        },
      }).then((response) => {
        const topResults = response.data.slice(0,5);
        setCocktails(topResults);
      });
    }
  
  return (
    <div className="App Wrapper">
      <Header />
      <div className="searchBar">
        <input type="search" value={userQuery} onChange={(event)=> setUserQuery(event.target.value)} placeholder="Enter an ingredient to see cocktail recipes!" />
        <button type="submit" onClick={fetchData}>Submit!</button>
        {cocktails.map((drink) => {
          return (
            <div className='cocktail-wrapper' onClick={() => handleClick(drink.name)}>
              <p className="cocktail" key={drink.name}>{drink.name}</p>
            </div>
          );
        })}
      </div>
      {!!selected && (
        <Popup trigger={selected} setTrigger={setSelected} closePopup={() => setSelected(null)}>
          {cocktails.map((drink) => {
            return (
              <h3 key={drink.ingredients}>{drink.ingredients}</h3>
            )
          })}
          
        </Popup>
        
      )}
      <Footer />
    </div>

  )
}

export default App;
