import React from 'react'
import { useState } from 'react'
import PlayerAdder from './playerAdddingProps'
import SnakeAndLadderGame from './MainFunction'
import { howManyPlayer } from './userInput'
import { indexOfPlayer } from './userInput'
import './userInputNames.css'
interface IPlayerArray {
    PlayerName: string,
    Position: number | string,
}
interface ICounter {
    NameOfPlayer: string;
    PlayerMoves: number,
    PlayerPosition: number,
    Dice: number
}

let playerNames: string[] = []
let count = 1
let playerNamesObject: any = {}
let playerArr: IPlayerArray[] = []
let playerHistory: ICounter[] = []
let playerMoves: any = {}

export default function Testing() {
    const [playerName, setPlayerName] = useState("")
    const [inputClass, setInputClass] = useState('nameInput')
    const [gameBool, setGameBool] = useState(false)
    const [submitBtn, setSubmitBtn] = useState('hidden')
    function addPlayer() {
        if (playerName.length < 2) {
            alert('Please enter something more than one letter')
        }
        else {
            if (playerNames.includes(playerName)) {
                alert(`${playerName} is already added`)
            }
            else {
                playerNames.push(playerName)
                setPlayerName("")
                count++
            }
        }

        if (count === howManyPlayer + 1) {
            for (let i = 1; i <= howManyPlayer; i++) {
                playerNamesObject[`Player${i}`] = playerNames[i - 1]
            }
            let playerCount = 0
            for (let index in indexOfPlayer) {
                playerArr.push({ PlayerName: playerNames[playerCount], Position: indexOfPlayer[index] })
                playerCount++
            }
            setSubmitBtn('submitButton')
            setInputClass('hidden')
        }
    }
    function startingGame() {
        for (let i of playerNames) {
            playerHistory.push({ NameOfPlayer: i, PlayerMoves: 1, PlayerPosition: 1, Dice: 1 })
        }
        for (let i = 1; i <= howManyPlayer; i++) {
            playerMoves[`Player${i}`] = 1
        }
        setGameBool(true)
        setSubmitBtn('hidden')
    }
    return (
        <div >
            <div className={inputClass}>
                <h1>Enter the Player Names</h1>
                <h2>{`Player${count}`} Name :</h2>
                <input type="text"
                    value={playerName}
                    maxLength={6}
                    onChange={(e) => setPlayerName(e.target.value)} />
                <button onClick={addPlayer}>Add Player</button>
            </div>
            <div className={submitBtn}>
                <div>
                    <h1>Player Names</h1>
                    <div>
                        {playerNames.map(n => <PlayerAdder Player={n} key={n} />)}
                    </div>
                </div>
                <button onClick={startingGame}><h2>Start Game</h2></button>
            </div>
            {gameBool ? <SnakeAndLadderGame /> : null}
        </div>

    )
}
export { playerNamesObject, playerNames, playerArr, playerHistory, playerMoves }