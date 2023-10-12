import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://www.deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,AD,AC,AH,JS,QS,KS,JD,QD,KD,JC,QC,KC,JH,QH,KH,7S,8S,9S,0S,7D,8D,9D,0D,7C,8C,9C,0C,7H,8H,9H,0H"
        );
        setCards(response.data.cards);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>32 Cards</h1>
      <ul>
        {cards.map((card) => (
          <li key={card.code}>
            {card.value} of {card.suit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
