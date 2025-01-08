import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log";

function App() {
  // this state will 
  const[gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');
    function handleSelectSquare(){
      setActivePlayer((curActivePlayer)=> curActivePlayer === 'X' ? 'O' : 'X');
      // curActivePlayer is an input if the curActivePlayer is the player with symbol X 
      // in this case we want to set the new state to an O  otherwise if it's O we want to set it to X.
    }
  return (
   <main>
    <div id="game-container">
     <ol id="players" className="highlight-player">
      <Player initialName="Player 1" symbole="X" isActive={activePlayer === 'X'} />
      <Player initialName= "Player 2" symbole="0" isActive={activePlayer === 'O'} />
     </ol>

      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
    </div>
      <Log />
   </main>
  )
}

export default App
