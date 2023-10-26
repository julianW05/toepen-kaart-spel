import { useEffect, useState } from 'react';

const ThrowCard = async (e, index, player, hands, handleThrow) => {
  e.preventDefault();
  const [Troef, setTroef] = useState("harten");
  


  console.log(player);

  if (player === "player") {
    handleThrow(e, index);
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
