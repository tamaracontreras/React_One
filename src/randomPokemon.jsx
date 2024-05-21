// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const RandomPokemon = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const generateRandomNumber = () => {
      return Math.floor(Math.random() * 151) + 1; // Generar un número aleatorio entre 1 y 151
    };

    setRandomNumber(generateRandomNumber());
  }, []);

  return (
    <div>
      {randomNumber && (
        <>
          <h1 style={{ color: 'blue' }}>{randomNumber}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNumber}.png`}
            alt={`Pokemon #${randomNumber}`}
            style={{ width: '150px' }}
          />
        </>
      )}
    </div>
  );
};

export default RandomPokemon;
