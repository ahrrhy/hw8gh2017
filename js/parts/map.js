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

    // make new instance of element
    mapElementNewInstance(Element, elementParameters) {
        return new Element(elementParameters);
    }

    // add new instances of decoration elements
    mapAddDecorations(element, elementParameters, elementQuantity) {
        for (let i = 0; i < elementQuantity; i++) {
            let randY = randomInteger(0, this.ySize-1),
                randX = randomInteger(0, this.xSize-1),
                decorElement = this.mapElementNewInstance(element, elementParameters),
                map = this.map;
            if (map[randY][randX] && map[randY][randX] === this.empty) {
                // this sets the coordination of plants into plant.plantPosition
                decorElement.plantPosition[0] = randY;
                decorElement.plantPosition[1] = randX;
                map[randY][randX] = decorElement;
                this.decorElementsStore.push(decorElement);
            }
        }
    }
    mapPlantsLive() {
        let store = this.decorElementsStore,
            map = this.map,
            empty = this.empty;
        store.forEach(function(item) {
            let posX = item.plantPosition[1],
                posY = item.plantPosition[0];
            item.live();
            if (item.isAlive === false) {
                map[posY][posX] = empty;
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
