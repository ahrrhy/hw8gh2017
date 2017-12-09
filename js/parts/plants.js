import {treeParams} from "./parameters.js";
import {bushParams} from "./parameters.js";
import {matrix} from "../main.js"

export default class Plant {
    constructor(plantParams) {
        this.age = 0;
        this.growthAge = plantParams.growthAge;
        this.size = plantParams.size;
        this.isAlive = true;
        this.timeToFruits = 0;
        this.deathAge = plantParams.deathAge;
        this.bushClass = plantParams.bushClass;
        this.treeClass = plantParams.treeClass;
        this.plantPosition = [];
        this.self = this;
    }

    isEatten() {
        return this.isAlive = false;
    }
    getGrowth() {
        if (this.age >= this.growthAge) {
            return this.canBeEatten = true;
        } else return this.canBeEatten = false;
    }

    getTheType() {
        if (this.size === 2) { return this.type = 'bush'; }
        if (this.size === 3) { return this.type = 'tree'; }
    }

    getFruitSize() {
        let type = this.getTheType();
        if (type === 'bush') { return this.fruitSize = 4; }
        if (type === 'tree') { return this.fruitSize = 6; }
    }

    // makeFruit(map, thing) {
    //     let curPos = getPosition(map, thing),
    //         nextPos = getNextPosition(curPos[0],curPos[1]),
    //         nextPosY = nextPos[0],
    //         nextPosX = nextPos[1],
    //         productAge = (this.age % 4 === 0);
    //     if (productAge && map[nextPosY][nextPosX] === 'empty' && this.isAlive === true) {
    //         let someFruit = new Fruit(this.getFruitSize());
    //         map[nextPosY][nextPosX] = someFruit.toString();
    //     }
    // }

    view() {
        if (this.isAlive === false) {
            return 'empty';
        } else {
            let type = this.getTheType();
            if (type === 'bush') { return `${this.bushClass} bush`; }
            if (type === 'tree') { return `${this.treeClass} tree`; }
        }
    }

    live() {
        this.age++;
        if (this.age === this.deathAge) {
            return this.isAlive = false;
        }
    }

    toString() {
        if (this.isAlive === false) {
            return this.plantPosition = 'empty';
        }
        return this.getTheType();
    }
}
