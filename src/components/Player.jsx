import React, { useState } from 'react'


// initialName  and symbole is props in here 
const Player = ({initialName, symbole, isActive}) => {
  // keep track of the player's name initailized with initailName
  const [playerName, setPlayerName] =useState(initialName)
  // follwoing is the usestate it's hook that will keep track of name is being edited
  const [isEditing , setIsEditing] = useState(false);

  function handleEditClick(){
      setIsEditing(editing =>!editing); 
  }
    // this function is for usestate playerName it will update the playerName state when ever the input change
    function handleChange(event){
      setPlayerName(event.target.value )
    }
    // if isEditing is true it will display the player's name
    let editablePlayerName = <span className="player-name"> {playerName}</span> 
    if(isEditing)
      {
      editablePlayerName = <input type='text' required value={playerName} onChange={handleChange}/>
      // updates the name as user type
      }
  return (
      <li className={isActive ? 'active' : undefined}>
        <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbole}</span>
        </span>
        {/* toggle if it's editing it have to show edit otherwise show save */}
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit" }</button>
         
      </li>
  
  )
}

export default Player
