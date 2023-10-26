import { useEffect, useState } from 'react';
import GetHands from '../functions/GetHands.jsx';
import ThrowCard from '../functions/ThrowCard.jsx';

export default function GameLayout() {
  // All cards!
  const [deckId, setDeckId] = useState(null);
  const [hands, setHands] = useState({
    playerHand: null,
    bot1Hand: null,
    bot2Hand: null,
    bot3Hand: null
  });

  // Playcards
  const [playerCard, setPlayerCard] = useState("https://media.discordapp.net/attachments/894538357793767474/1161996234203086878/kisspng-ace-of-hearts-playing-card-card-gaasdasdme-stock-photogr-5afe5ddd5f6553.2813311815266196133908.png?ex=653a5453&is=6527df53&hm=cf667748ee4c5f90af3bb8e3802d763db1947bd05c45f9f5293d3c63ce54b46b&=&width=230&height=325");
  const [bot1card, setBot1Card] = useState("https://media.discordapp.net/attachments/894538357793767474/1161996234203086878/kisspng-ace-of-hearts-playing-card-card-gaasdasdme-stock-photogr-5afe5ddd5f6553.2813311815266196133908.png?ex=653a5453&is=6527df53&hm=cf667748ee4c5f90af3bb8e3802d763db1947bd05c45f9f5293d3c63ce54b46b&=&width=230&height=325");
  const [bot2card, setBot2Card] = useState("https://media.discordapp.net/attachments/894538357793767474/1161996234203086878/kisspng-ace-of-hearts-playing-card-card-gaasdasdme-stock-photogr-5afe5ddd5f6553.2813311815266196133908.png?ex=653a5453&is=6527df53&hm=cf667748ee4c5f90af3bb8e3802d763db1947bd05c45f9f5293d3c63ce54b46b&=&width=230&height=325");
  const [bot3card, setBot3Card] = useState("https://media.discordapp.net/attachments/894538357793767474/1161996234203086878/kisspng-ace-of-hearts-playing-card-card-gaasdasdme-stock-photogr-5afe5ddd5f6553.2813311815266196133908.png?ex=653a5453&is=6527df53&hm=cf667748ee4c5f90af3bb8e3802d763db1947bd05c45f9f5293d3c63ce54b46b&=&width=230&height=325");

  // Playerturn
  const [playerTurn, setPlayerTurn] = useState("all");

  // Get deck
  const fetchDeck = async () => {
    try {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,AD,AC,AH,JS,QS,KS,JD,QD,KD,JC,QC,KC,JH,QH,KH,7S,8S,9S,0S,7D,8D,9D,0D,7C,8C,9C,0C,7H,8H,9H,0H');
      const data = await response.json();
      setDeckId(data.deck_id);
    } catch (error) {
      console.log(error);
    }
  }

  // Throwcard
  const [selectedCards, setSelectedCards] = useState([]);
  const handlePlayerThrow = (index) => {
    if (hands.playerHand && hands.playerHand[index]) {
      setPlayerCard(hands.playerHand[index].image);
      setSelectedCards([...selectedCards, index]);
      if(index == 1) {
        playerTurn = "all";
      } else {
        playerTurn = "none";
      }
    }
  }

  // Use effect
  useEffect(() => {
    fetchDeck();
  }, []);

  // Fetch data to hands
  useEffect(() => {
    if (deckId) {
      const fetchData = async () => {
        const handsData = await GetHands(deckId);
        if (handsData) {
          setHands(handsData);
        }
      };
      fetchData();
    }
  }, [deckId]);

    return (
        <div className="game">
          <div className="top-bar">
            <div className="top-left">
              <a>Restart</a>
            </div>
            <div className="top-mid">
              <img src="https://media.discordapp.net/attachments/894538357793767474/1156930224735387708/card_back_red.png?ex=6516c2bc&is=6515713c&hm=431ce0916d13f0252783f95e0b487e77c0e6cb34e84bf289f3d716668724cc06&=&width=465&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1156930224735387708/card_back_red.png?ex=6516c2bc&is=6515713c&hm=431ce0916d13f0252783f95e0b487e77c0e6cb34e84bf289f3d716668724cc06&=&width=465&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1156930224735387708/card_back_red.png?ex=6516c2bc&is=6515713c&hm=431ce0916d13f0252783f95e0b487e77c0e6cb34e84bf289f3d716668724cc06&=&width=465&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1156930224735387708/card_back_red.png?ex=6516c2bc&is=6515713c&hm=431ce0916d13f0252783f95e0b487e77c0e6cb34e84bf289f3d716668724cc06&=&width=465&height=662" alt="kaart" />
            </div>
            <div className="top-right">
              
            </div>
          </div>
          <div className="mid-bar">
            <div className="mid-left">
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159449289781674034/card_back_red.png?ex=6531104c&is=651e9b4c&hm=f30f7cce4e4fdc9eb7c3228d72a86e02429b8dd990092fcc9afe6a017b6bcbd3&=&width=942&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159449289781674034/card_back_red.png?ex=6531104c&is=651e9b4c&hm=f30f7cce4e4fdc9eb7c3228d72a86e02429b8dd990092fcc9afe6a017b6bcbd3&=&width=942&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159449289781674034/card_back_red.png?ex=6531104c&is=651e9b4c&hm=f30f7cce4e4fdc9eb7c3228d72a86e02429b8dd990092fcc9afe6a017b6bcbd3&=&width=942&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159449289781674034/card_back_red.png?ex=6531104c&is=651e9b4c&hm=f30f7cce4e4fdc9eb7c3228d72a86e02429b8dd990092fcc9afe6a017b6bcbd3&=&width=942&height=662" alt="kaart" />
            </div>
            <div className="mid-mid">
              <div className="mid-mid-top">
                <img className='vertical-img bot2-img' src={bot2card} alt="kaart" />
              </div>
              <div className="mid-mid-mid">
                <img className='horizontal-img bot1-img' src={bot1card} alt="kaart" />
                <img className='horizontal-img bot3-img' src={bot3card} alt='kaart' />
              </div>
              <div className="mid-mid-bottom">
                <img className='vertical-img player-img' src={playerCard} alt="kaart" />
              </div></div>
            <div className="mid-right">
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159449289781674034/card_back_red.png?ex=6531104c&is=651e9b4c&hm=f30f7cce4e4fdc9eb7c3228d72a86e02429b8dd990092fcc9afe6a017b6bcbd3&=&width=942&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159449289781674034/card_back_red.png?ex=6531104c&is=651e9b4c&hm=f30f7cce4e4fdc9eb7c3228d72a86e02429b8dd990092fcc9afe6a017b6bcbd3&=&width=942&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159449289781674034/card_back_red.png?ex=6531104c&is=651e9b4c&hm=f30f7cce4e4fdc9eb7c3228d72a86e02429b8dd990092fcc9afe6a017b6bcbd3&=&width=942&height=662" alt="kaart" />
              <img src="https://media.discordapp.net/attachments/894538357793767474/1159449289781674034/card_back_red.png?ex=6531104c&is=651e9b4c&hm=f30f7cce4e4fdc9eb7c3228d72a86e02429b8dd990092fcc9afe6a017b6bcbd3&=&width=942&height=662" alt="kaart" />
            </div>
          </div>
          <div className="bottom-bar">
            <div className="bottom-left">
              <div className="call-fold">
                <a>Call</a>
                <a>Fold</a>
              </div>
            </div>
            <div className="bottom-mid">
              {hands.playerHand && hands.playerHand.map((card, index) => (
                <a key={index} style={{ pointerEvents: `${playerTurn}` }} onClick={(e) => ThrowCard(e, index, "player", handlePlayerThrow)}>
                  <img className={`${index} ${selectedCards.includes(index) ? 'card-hidden' : ''}`} key={index} src={card.image} alt="kaart" />
                </a>
              ))}
            </div>
            <div className="bottom-right">
              <a>Toepen</a>
            </div>
          </div>
        </div>
    )
}