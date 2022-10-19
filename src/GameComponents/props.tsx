import React from 'react'
import './props.css'
type IProps={
value:number,
data:any,
icon:string
}
const Props = (prop:IProps) => {

    let object = prop.data
    let Player1;
    let Player2;
    if (object.Player1 === 'in') {
        Player1 = <span>🟠</span>
    }
    if (object.Player2 === 'in') {
        Player2 = <span>🔵</span>
    }
    return (
        <div className='lop' id={`Box${prop.value.toString()}`}>
            <div className='playerContainer'>
                {Player1}
                {Player2}
            </div>
            <div id='boxNum'>{prop.value}</div>
            <div className='powerUps'>
                <div id='boxIcon'>{prop.icon}</div>
            </div>
        </div>
    )
}

export default Props
