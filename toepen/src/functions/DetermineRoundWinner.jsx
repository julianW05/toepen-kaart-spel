import { useEffect, useState } from 'react';

const DetermineRoundWinner = ({ setThrownCards, thrownCards, Troef }) => {
    let roundWinner = null;
    let winningValue = -3;
  
  console.log(thrownCards);
  thrownCards.forEach((card) => {
    let cardValue = card.value;
    if (cardValue === 'ACE') {
      cardValue = 1; 
    } else if (cardValue === 'KING') {
        cardValue = 0;
    } else if (cardValue === 'QUEEN') {
        cardValue = -1;
    }else if (cardValue === 'JACK') {
        cardValue = -2;
    } else if (cardValue === '10') {
        cardValue = 11;
    }
    console.log(cardValue);
    if (card.suit === Troef && cardValue > winningValue) {
        roundWinner = card;
        winningValue = cardValue;
    }
    
  });

  console.log(roundWinner.player);


  return null;
};

export default DetermineRoundWinner;