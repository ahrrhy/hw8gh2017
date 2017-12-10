// importing functions
import {randomInteger} from "./parts/functions.js";

// importing parameters
import {mapElements} from "./parts/parameters.js";


// importing classes
import Map from "./parts/map.js";

let matrix = new Map(mapElements);

matrix.mapGenerate();
matrix.mapAddDecorations(matrix.tree, matrix.startTreesQuantity);
matrix.mapAddDecorations(matrix.bush, matrix.startBushQuantity);

export {matrix};
console.log(matrix.map);


let div = document.createElement('div');
div.setAttribute('class', 'container');
document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(div);
    matrix.mapDraw(div);
    console.log(matrix.decoreElementsStore[0].plantPosition);
    console.log(matrix.decoreElementsStore[0].isAlive);
});