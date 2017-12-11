import {randomInteger} from "./functions.js";


export default class Map {
    constructor(mapElements) {
        // matrix sizes
        this.xSize = mapElements.xSize;
        this.ySize = mapElements.ySize;
        //map elements
        this.empty = mapElements.empty;
        this.tree = mapElements.tree;
        this.bush = mapElements.bush;
        this.fruit = mapElements.fruit;
        this.deer = mapElements.deer;
        this.mouse = mapElements.mouse;
        // the quantity of decorations. i think it will help to create new instances of Plant;
        this.startTreesQuantity = mapElements.startTreesQuantity;
        this.startBushQuantity = mapElements.startBushQuantity;
        // the matrix map
        this.map = [];
        this.decorElementsStore = [];
        this.self = this;
    }

    // i need to generate random map which will be empty
    mapGenerate() {
        for (let i = 0; i < this.ySize; i++) {
            this.map[i] = [];
            for (let j = 0; j < this.xSize; j++) {
                let mapValue = this.empty;
                this.map[i].push(mapValue);
            }
        }
    }
    getRandomEmpty() {
        let randY = randomInteger(0, this.ySize-1),
            randX = randomInteger(0, this.xSize-1),
            mapHasRandX = (randX !== -0 && randX !== -1),
            mapHasRandY = (randY !== -0 && randX !== -1),
            map = this.map;
        if (mapHasRandX && mapHasRandY && map[randY][randX] === this.empty) {
            return [randY, randX];
        }
        return this.getRandomEmpty();
    }
    getClosestEmpty(arr) {
        let X = arr[1],
            Y = arr[0],
            map = this.map,
            changeX = randomInteger(-1, 1),
            changeY = randomInteger(-1, 1);
        if (map[Y+changeY][X+changeX] === this.empty) {
            return [Y+changeY, X+changeX];
        }
        return this.getClosestEmpty([Y,X]);

    }
    // make new instance of element
    mapElementNewInstance(Element, elementParameters) {
        return new Element(elementParameters);
    }

    // add new instances of decoration elements in the beginning
    mapAddDecorations(element, elementParameters, elementQuantity) {
        for (let i = 0; i < elementQuantity; i++) {
            //console.log(this.mapGetRandomEmpty());
            let randCoord = this.getRandomEmpty();
            let decorElement = this.mapElementNewInstance(element, elementParameters),
                map = this.map,
                X = randCoord[1],
                Y = randCoord[0];
            // this sets the coordination of element into element.Position
            decorElement.Position[0] = Y;
            decorElement.Position[1] = X;
            map[Y][X] = decorElement;
            if (element.type === this.tree && element.type === this.bush) {
                this.decorElementsStore.push(decorElement);
            }
        }
    }

    // i try to make every plant live
    mapPlantsLive(Element, elementParameters) {
        let store = this.decorElementsStore,
            map = this.map,
            empty = this.empty;

        store.forEach((item) =>{
            console.log(this.getRandomEmpty());
            let posX = item.Position[1],
                posY = item.Position[0],
                closestEmpty = this.getClosestEmpty([posY, posX]);
            console.log(closestEmpty);
            item.live();
            if (item.isAlive === false) {
                map[posY][posX] = empty;
            }
            if (item.timeToFruit()) {
                let fruit = this.mapElementNewInstance(Element, elementParameters);
                map[closestEmpty[0]][closestEmpty[1]] = fruit;
            }
        });
    }
    mapDraw(htmlNode) {
        let map = this.map,
            output = ``;
        for (let mapElem of map) {
            output += `<p>`;
            for (let mapElemDepth of mapElem) {
                let className;
                if (mapElemDepth === this.empty) {
                    className = `${this.empty}`;
                }
                if (mapElemDepth !== this.empty) {
                    className = `${mapElemDepth.view()}`;
                }
                output += `<span class = "${className}"></span>`;
            }
            output += `</p>`;
        }
        htmlNode.innerHTML = output;
    }
}
