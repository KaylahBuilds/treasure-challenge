class Stacker {
    turn(mapInfo) {
        const currentLevel = mapInfo.level;
        const directions = ['left', 'up', 'right', 'down'];

        for (let direction of directions) {
            const adjacentCell = mapInfo[direction];
            if (adjacentCell.type !== 1 && // Not a wall
                (adjacentCell.level === currentLevel || adjacentCell.level === currentLevel - 1 || adjacentCell.level === currentLevel + 1)) {
                return direction;
            }
        }

        if (mapInfo.type === 2 || mapInfo.type === 3) {
            return 'drop';
        }

        if ((mapInfo.left.type === 2 || mapInfo.left.type === 3) && mapInfo.left.level === 0) {
            return 'pickup';
        }

        return 'left';
    }
}

let stacker = new Stacker();
let jsonData = {
    left: { type: 0, level: 1 },
    up: { type: 1, level: 0 },
    right: { type: 2, level: 0 },
    down: { type: 3, level: 2 },
    type: 0,
    level: 1
};
let action = stacker.turn(jsonData);
console.log(action);