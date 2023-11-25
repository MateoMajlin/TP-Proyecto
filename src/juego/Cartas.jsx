// App.js
import React, { useState, useEffect } from 'react';
import styles from './Cartas.module.css';

const Cartas = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);

  function generateCards() {
    const symbols = ['🐱', '🐶', '🐰', '🐦', '🐢', '🦄', '🐍', '🐙'];
    const allCards = symbols.concat(symbols);
    return shuffleArray(allCards.map((symbol, index) => ({ id: index, symbol, isFlipped: false })));
  }

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const handleCardClick = (clickedCard) => {
    if (flippedCards.length < 2 && !flippedCards.includes(clickedCard.id)) {
      const newFlippedCards = [...flippedCards, clickedCard.id];
      setFlippedCards(newFlippedCards);

      if (newFlippedCards.length === 2) {
        setMoves(moves + 1);

        const [firstCard, secondCard] = newFlippedCards;
        if (cards[firstCard].symbol === cards[secondCard].symbol) {
          setMatchedPairs([...matchedPairs, cards[firstCard].symbol]);
        }

        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (matchedPairs.length === cards.length / 2) {
      alert(`¡Felicidades! Has completado el juego en ${moves} movimientos.`);
    }
  }, [matchedPairs, cards, moves]);

  return (
    <div className={styles.App}>
      <h1>Juego de Memoria</h1>
      <p>Movimientos: {moves}</p>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <Cartas
            key={card.id}
            card={card}
            flipped={flippedCards.includes(card.id) || matchedPairs.includes(card.symbol)}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cartas;
