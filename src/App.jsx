// App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react'; // Importación de React necesaria para usar JSX
import RandomPokemon from './randomPokemon'; // Importa el componente RandomPokemon
import Component from './component'; // Importa el componente Component
import './App.css'; 

function App() {
  return (
    <div className="container"> {/* Contenedor principal */}
    <div className="content">
      <h1>¡Bienvenido a mi aplicación de Pokémon!</h1>
      <RandomPokemon /> {/* Usa el componente RandomPokemon */}
      <Component /> {/* Usa el componente Component */}
    </div>
    </div>
  );
}

export default App;
