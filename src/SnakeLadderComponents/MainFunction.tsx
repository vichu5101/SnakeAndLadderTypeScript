import gameData from './GameData'
import Props from './Props'
import './GridBox.css'
import Image from './snakeandladder.png'
import { howManyPlayer, playerContainer, indexOfPlayer } from './userInput'
import { playerArr, playerNames, playerMoves, playerHistory } from './userInputNames'
import PlayerPosition from './position'
import { useState } from 'react'
import csvDataFile from './playerHistoryCsvFile'
// import { playerHistory } from './playerHistoryCsvFile'

let userInput = 6;
let count = 1
let playerCount = 0
let bonusTurn: string;
let powerUp: string;

export default function SnakeAndLadderGame() {
    const [pointsTable, setPointsTable] = useState('container')
    const [playerTurn, setPlayerTurn] = useState<string>(playerNames[playerCount])
    const [player, setPlayer] = useState(playerContainer)
    const [winnerTab, setWinnerTab] = useState('hidden')
    const [randomNum, setRandomNumber] = useState(0)
    function dice() {
        playerMoves[`Player${count}`]+=1
        console.log(playerHistory)
        let randomNumber = Math.floor(Math.random() * 6) + 1
        if (player[`Player${count}`] + randomNumber === 100) {
            setPointsTable('hidden')
            setWinnerTab('winnerAnnounce')
            gameData.forEach(element => {
                if (element.id === indexOfPlayer[`Player${count}`]) {
                    element.players[`Player${count}`] = ''
                }
            });
            gameData.forEach(element => {
                if (player[`Player${count}`] + randomNumber === element.id) {
                    element.players[`Player${count}`] = 'in'
                    indexOfPlayer[`Player${count}`] = element.id
                    playerArr.forEach(player => {
                        if (player.PlayerName === playerNames[count - 1]) {
                            player.Position = element.id
                            playerHistory.push({NameOfPlayer:player.PlayerName, PlayerMoves:playerMoves[`Player${count}`], PlayerPosition:element.id, Dice:randomNumber})
                        }
                    });
                }
            });
            csvDataFile(playerHistory)
        }
        if (player[`Player${count}`] + randomNumber <= 100) {

            gameData.forEach(element => {
                if (element.id === indexOfPlayer[`Player${count}`]) {
                    element.players[`Player${count}`] = ''
                }
            });
            gameData.forEach(element => {
                if (player[`Player${count}`] + randomNumber === element.id) {
                    if (element.to !== '') {
                        if (player[`Player${count}`] + randomNumber > element.to) {
                            powerUp = '🔻'
                        }
                        else {
                            powerUp = '🔼'
                        }
                        gameData.forEach(elementValue => {
                            if (element.to === elementValue.id) {
                                let indexOfEle = gameData.indexOf(elementValue)
                                gameData[indexOfEle].players[`Player${count}`] = 'in'
                                indexOfPlayer[`Player${count}`] = elementValue.id
                                setPlayer({ ...player, [`Player${count}`]: elementValue.id })
                                playerArr.forEach(player => {
                                    if (player.PlayerName === playerNames[count - 1]) {
                                        player.Position = elementValue.id + powerUp
                                        playerHistory.push({NameOfPlayer:player.PlayerName, PlayerMoves:playerMoves[`Player${count}`], PlayerPosition:elementValue.id, Dice:randomNumber})
                                    }
                                });
                            }
                        });
                    }
                    else {
                        element.players[`Player${count}`] = 'in'
                        indexOfPlayer[`Player${count}`] = element.id
                        setPlayer({ ...player, [`Player${count}`]: element.id })
                        playerArr.forEach(player => {
                            if (player.PlayerName === playerNames[count - 1]) {
                                player.Position = element.id
                                playerHistory.push({NameOfPlayer:player.PlayerName, PlayerMoves:playerMoves[`Player${count}`], PlayerPosition:element.id, Dice:randomNumber})
                            }
                        });
                    }
                }
            });
        }
        else {
            player[`Player${count}`] = player[`Player${count}`]
        }
        if (randomNumber === 1 || randomNumber === 5 || randomNumber === 6) {
            // count = count
            // playerCount = playerCount
            bonusTurn = `${playerTurn} got Bonus Turn`
        }
        else {
            count++
            bonusTurn = ''
            if (playerCount === playerNames.length - 1) {
                playerCount = 0
                setPlayerTurn(playerNames[playerCount])
            }
            else {
                playerCount++
                setPlayerTurn(playerNames[playerCount])
            }
        }
        if (count === howManyPlayer + 1) {
            count = 1
        }
        setRandomNumber(randomNumber)
    }

    return (
        <div className='window'>
            <header>
                <img src={Image} alt='Game Icon' />
                <div className={winnerTab} id='toWinner'><h1>{playerTurn}</h1><p>Won the Game</p><p> 🏆 </p></div>
                <div className={pointsTable}>
                    <div className="playerHis">
                        <h1>Player Positions</h1>
                        {playerArr.map(n => <PlayerPosition Player={n.PlayerName} key={n.PlayerName} Position={n.Position} />)}
                        <p>{bonusTurn}</p>
                    </div>
                    <div className='update'>
                        <h1>{randomNum}</h1>
                        <button onClick={dice} >Dice 🎲</button>
                        <h3>{playerTurn}'s Turn</h3>
                    </div>
                </div>
            </header>
            <div className="GridBox">
                {gameData.map(n => <Props id={n.id} data={n.players} key={n.id} powerUps={n.icon} point={n.toMes} />)}
            </div>
        </div>
    )
}

export { userInput }