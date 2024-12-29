import React from 'react'
import { useState } from 'react';
//  the board has 3 rows and each rows has 3 columns.
const initialGameBoard = [
  [null, null, null],
  [null, null, null], 
  [null, null, null],
];
const GameBoard = ({onSelectSquare}) => {
    // it's special react hook that keep track of the game board.
  // set to initialGameBoard mean it's empty.
  const[gameBoard, setGameBoard] =useState(initialGameBoard);
  // this function runs when player click in each square.
  function handleSelectSquare(rowIndex, colIndex){
    setGameBoard((prevGameboard) =>{
      const updatedBoard =[...prevGameboard.map(innerArray => [...innerArray])];
      updatedBoard[rowIndex] [colIndex] = 'X';
      return updatedBoard;
    })
    onSelectSquare();
    // Executing a function that is defined outside of this GameBoard component to inside GameBoard component
    // becuase the value for this onSelectSquare prop should be a function
  }
  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex)=> <li key={colIndex}>
            <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
        </ol>
      </li>)}
     
    </ol>
  )
}

export default GameBoard
