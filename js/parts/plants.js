import {treeParams} from "./parameters.js";
import {bushParams} from "./parameters.js";
import {matrix} from "../main.js"

export default class Plant {
    constructor(plantParams) {
        this.age = 0;
        this.growthAge = plantParams.growthAge;
        this.isGrowth = false;
        this.size = plantParams.size;
        this.isAlive = true;
        this.timeToFruits = 0;
        this.bushClass = plantParams.bushClass;
        this.treeClass = plantParams.treeClass;
        this.springClass = plantParams.springClass;
        this.plantPosition = [];
        this.self = this;
    }

    isEatten() {
        return this.isAlive = false;
    }
    getGrowth() {
        if (this.age >= this.growthAge) {
            return this.isGrowth = true;
        } else return this.isGrowth = false;
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
        let isGrowth = this.isGrowth === true,
            isAlive = this.isAlive === true,
            type = this.getTheType();
        if (!isAlive) {
            return 'empty';
        }
        if (!isGrowth && isAlive) {
            return `${this.springClass}`;
        }
        if (isGrowth && isAlive){
            if (type === 'bush') { return `${this.bushClass} bush`; }
            if (type === 'tree') { return `${this.treeClass} tree`; }
        }
    }

    live() {
        if (this.isAlive === true) {
            this.age++;
            this.getGrowth();
        }
    }
}
