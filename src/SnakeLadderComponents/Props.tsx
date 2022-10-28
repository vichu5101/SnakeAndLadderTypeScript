import React from 'react'
import PlayerGeneratingProps from './PlayerGeneratingProps';
import './PropBoxes.css'
import { playerNamesObject } from './userInputNames'
interface IProp {
    id: number,
    data: any,
    powerUps: string,
    point: string
}
const Props = (prop: IProp) => {
    let playerPosition = prop.data
    let arr = []
    for (let i in playerPosition) {
        if (playerPosition[i] === 'in') {
            arr.push(playerNamesObject[i])
        }
    }
    return (
        <div id={`Box${prop.id.toString()}`} className="perBox">
            <div className="spanPlayer">
                {arr.map(n => <PlayerGeneratingProps player={n} key={n} />)}
            </div>
            <div className="rightSide">
                <h4>{prop.id}</h4>
                <h4>{prop.powerUps}</h4>
                <h4>{prop.point}</h4>
            </div>

        </div>
    )
}

export default Props
