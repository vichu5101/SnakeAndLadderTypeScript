import './userInput.css'
import { useState } from 'react';
import Testing from './userInputNames';
import Image from './snakeandladder.png'
import gameData from './GameData'

let howManyPlayer: number;
let indexOfPlayer: any = {}
let playerContainer: any;
function playerGenerator() {
  let object: any = {}
  for (let i = 1; i <= howManyPlayer; i++) {
    indexOfPlayer[`Player${i}`] = 1
    object[`Player${i}`] = 1
  }
  playerContainer = object
}


export default function App() {
  const [userByInput, setUserByInput] = useState('');
  const [player, setPlayer] = useState(false)
  const [startGame, setStartGame] = useState('inputClass')
  const [inputClass, setInputClass] = useState('hidden')
  function handleClick() {
    howManyPlayer = Number(userByInput)
    gameData.forEach(gameEle => {
      for (let i = 1; i <= howManyPlayer; i++) {
        if (gameEle.id === 1) {
          gameEle.players[`Player${i}`] = 'in'
        }
      }
    });
    if (howManyPlayer >= 2 && howManyPlayer <= 6) {
      setPlayer(true)
      setInputClass('hidden')
    }
    else {
      alert("Please enter range 2Players to 6Players")
    }
    playerGenerator()
  }

  function game() {
    setStartGame('hidden')
    setInputClass('inputClass')
  }

  return (
    <div>
      <div className={startGame}>
        <img src={Image} alt="Game Icon" />
        <h1>Snake 🐍 Ladder Game</h1>
        <button onClick={game}>Play</button>
      </div>
      <div className={inputClass}>
        <img src={Image} alt="Game Icon" />
        <h2>Enter the number of players</h2>
        <input onChange={e => { setUserByInput(e.target.value) }} type='number' />
        <h4>Please enter range from 2 to 6</h4>
        <button onClick={handleClick}>GO</button>
      </div>
      {player ? <Testing /> : null}
    </div>
  );
};

export { howManyPlayer, indexOfPlayer, playerContainer }

