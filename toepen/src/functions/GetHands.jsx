import { useEffect, useState } from 'react';

const GetHands = async (deckId) => {
  try {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=16`);
    const data = await response.json();
    if (data.success) {
      const cards = data.cards;

      const playerHand = cards.slice(0, 4);
      const bot1Hand = cards.slice(4, 8);
      const bot2Hand = cards.slice(8, 12);
      const bot3Hand = cards.slice(12, 16);

      return {playerHand, bot1Hand, bot2Hand, bot3Hand};
    } else {
      console.error("Failed to draw cards from the deck.");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default GetHands;
