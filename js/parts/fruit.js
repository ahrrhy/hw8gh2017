export default class Fruit {
    constructor(fruitParams) {
        this.size = fruitParams.size;
        this.timeToLive = fruitParams.timeToLive;
        this.fruitClass = fruitParams.fruitClass;
        this.isAlive = true;
    }
    isEaten() {
        return this.isAlive = false;
    }
    chooseChild() {
        if (this.size === 4) { return this.childSize = 2; }
        if (this.size === 6) { return this.childSize = 3; }
    }
    // makeNewPlant() {
    //     let curPos = getPosition(map, fruit),
    //         curPosY = curPos[0],
    //         curPosX = curPos[1];
    //
    //     map[curPosY][curPosX] = new Plant(this.childSize);
    //     return this.isAlive = false;
    // }

    view() {
        if (this.isAlive === false) {
            return 'empty';
        } else {
            return `${this.fruitClass} fruit`;
        }
    }

    toString() {
        return 'fruit';
    }
}