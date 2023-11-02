import { useEffect, useState } from 'react';

const ThrowCard = (e, index, player, hands, handleThrow, setBot1Card, setBot2Card, setBot3Card, setThrownCards, thrownCards, getWinner) => {
  e.preventDefault();
  let Troef = null;

  Troef = hands.playerHand[index].suit;
  getWinner(Troef);

  const getRandomCardFromSuit = (hand, suit) => {
    const cardsOfSuit = hand.filter((card) => card.suit === suit);
    if (cardsOfSuit.length > 0) {
      const randomIndex = Math.floor(Math.random() * cardsOfSuit.length);
      return cardsOfSuit[randomIndex];
    }
    // If no card of the given suit, return a random card
    const randomIndex = Math.floor(Math.random() * hand.length);
    return hand[randomIndex];
  };

  if (player === "player") {
    handleThrow(e, index);
  } else if (player.includes("bot")) {
    const botNumber = parseInt(player.replace("bot", ""));
    const botHand = hands[`bot${botNumber}Hand`];
    let chosenCard;

    if (Troef) {
      chosenCard = getRandomCardFromSuit(botHand, Troef);
    } else {
      const suits = ['SPADES', 'DIAMONDS', 'CLUBS', 'HEARTS'];
      const randomSuitIndex = Math.floor(Math.random() * suits.length);
      const randomSuit = suits[randomSuitIndex];
      chosenCard = getRandomCardFromSuit(botHand, randomSuit);
    }

    // Add a delay here
    const delayDuration = 1000; // 1 second delay
    setTimeout(() => {
      if (botNumber === 1) {
        setBot1Card(chosenCard.image);
        const playedCard = { ...chosenCard, player: "bot1" };
        setThrownCards((prevThrownCards) => [...prevThrownCards, playedCard]); 
        // Call for bot 2
        ThrowCard(e, index, "bot2", hands, handleThrow, setBot1Card, setBot2Card, setBot3Card, setThrownCards, thrownCards, getWinner);
      } else if (botNumber === 2) {
        setBot2Card(chosenCard.image);
        const playedCard = { ...chosenCard, player: "bot2" };
        setThrownCards((prevThrownCards) => [...prevThrownCards, playedCard]); 
        // Call for bot 3
        ThrowCard(e, index, "bot3", hands, handleThrow, setBot1Card, setBot2Card, setBot3Card, setThrownCards, thrownCards, getWinner);
      } else if (botNumber === 3) {
        setBot3Card(chosenCard.image);
        const playedCard = { ...chosenCard, player: "bot3" };
        setThrownCards((prevThrownCards) => [...prevThrownCards, playedCard]); 
        // Determine the winner or perform other necessary logic here
        const playerCardValue = hands.playerHand[index].value;
        const bot1CardValue = chosenCard.value; // Assuming the value of the card is stored in the 'value' property
      }
    }, delayDuration);
  } else {
    console.error("Invalid player.");
  }

  return null;
};

export default ThrowCard;
