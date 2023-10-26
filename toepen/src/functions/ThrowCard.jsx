import { useEffect, useState } from 'react';

const ThrowCard = async (e, index, player, handlePlayerThrow) => {
  e.preventDefault();

  if (player === "player") {
    handlePlayerThrow(index);
  } else if (player === "bot1") {
    // Handle bot1 logic
  } else if (player === "bot2") {
    // Handle bot2 logic
  } else if (player === "bot3") {
    // Handle bot3 logic
  } else {
    console.error("Invalid player.");
  }
};

export default ThrowCard;
