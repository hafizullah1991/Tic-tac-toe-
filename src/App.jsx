import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

function App() {
  

  return (
   <main>
    <div id="game-container">
     <ol id="players">
      <Player initialName="Player 1" symbole="X" />
      <Player initialName= "Player 2" symbole="0" />
     </ol>

      <GameBoard />
    </div>
    Log
   </main>
  )
}

export default App
