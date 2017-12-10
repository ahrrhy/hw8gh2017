import {randomInteger} from "./functions.js";


export default class Map {
    constructor(mapElements) {
        // matrix sizes
        this.xSize = mapElements.xSize;
        this.ySize = mapElements.ySize;
        //map elements
        this.empty = mapElements.empty;
        this.treeView = mapElements.tree.toString();
        this.bushView = mapElements.bush.toString();
        this.fruitView = mapElements.fruit.toString();
        this.deerView = mapElements.deer.toString();
        this.mouseView = mapElements.mouse.toString();
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
        this.decoreElementsStore = [];
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

    // add new instances of decoration elements
    mapAddDecorations(element, elementQuantity) {
        for (let i = 0; i < elementQuantity; i++) {
            let randY = randomInteger(0, this.ySize-1),
                randX = randomInteger(0, this.xSize-1),
                decorElement = element,
                map = this.map;
            if (map[randY][randX] === this.empty) {
                // this sets the coordination of plants into plant.plantPosition
                decorElement.plantPosition[0] = randY;
                decorElement.plantPosition[1] = randX;
                map[randY][randX] = decorElement.toString();
                this.decoreElementsStore.push(decorElement);
            }
        }
    }

    // scan matrix and clean it's decoration elements
    // mapWatch() {
    //     let map = this.map,
    //         self = this.self;
    //     for (let mapElem of map) {
    //         for (let mapElemDepth of mapElem) {
    //             if (mapElemDepth !== this.empty) {
    //                 console.log(mapElemDepth);
    //             }
    //
    //         }
    //     }
    // }

    mapDraw(htmlNode) {
        let map = this.map,
            self = this.self;
        setInterval( function () {
            let output = ``;
            for (let mapElem of map) {
                output += `<p>`;
                for (let mapElemDepth of mapElem) {
                    let className;
                    if (mapElemDepth === self.empty) {
                        className = `${self.empty}`;
                    }
                    if (mapElemDepth === self.bush.toString()) {
                        className = `${self.bush.view()}`;
                    }
                    if (mapElemDepth === self.tree.toString()) {
                        className = `${self.tree.view()}`;
                    }
                    if (mapElemDepth === self.fruit.toString()) {
                        className = `${self.fruit.view()}`;
                    }
                    if (mapElemDepth === self.deer.toString()) {
                        className = `${self.deer.view()}`;
                    }
                    output += `<span class = "${className}"></span>`;
                }
                output += `</p>`;
            }
            console.log(self.bush.plantPosition);
            console.log(self.map);
            //self.mapWatch();
            htmlNode.innerHTML = output;
            console.log(self.decoreElementsStore);
            }, 500
        );
    }
}