interface IGameData {
    id: number,
    to: string | number,
    icon: string,
    toMes: string,
    players: any
}
interface IPowerUps {
    from: number,
    to: number,
    icon: string
}
let gameData: IGameData[] = []
for (let i = 100; i >= 1; i -= 10) {
    if (i % 20 === 0) {
        for (let j = i; j > (i - 10); j--) {
            gameData.push({
                id: j,
                to: '',
                icon: '',
                toMes: '',
                players: {}
            })
        }
    }
    else {
        for (let j = (i - 9); j <= i; j++) {
            gameData.push({
                id: j,
                to: '',
                toMes: '',
                icon: '',
                players: {}
            })
        }
    }
}

const powerUps: IPowerUps[] = [{ from: 18, to: 2, icon: '🔻' },
{ from: 34, to: 25, icon: '🔻' },
{ from: 48, to: 31, icon: '🔻' },
{ from: 62, to: 55, icon: '🔻' },
{ from: 82, to: 75, icon: '🔻' },
{ from: 89, to: 55, icon: '🔻' },
{ from: 97, to: 20, icon: '🔻' },
{ from: 12, to: 30, icon: '🔼' },
{ from: 39, to: 60, icon: '🔼' },
{ from: 44, to: 60, icon: '🔼' },
{ from: 70, to: 85, icon: '🔼' },
{ from: 79, to: 96, icon: '🔼' }]

gameData.forEach(grid => {
    powerUps.forEach(power => {
        if (grid.id === power.from) {
            grid.icon = power.icon
            grid.to = power.to
            grid.toMes = 'Go to ' + power.to
        }
    });
});
gameData.forEach(gameEle => {
    if (gameEle.id === 100) {
        gameEle.icon = '🏆'
    }
});
export default gameData