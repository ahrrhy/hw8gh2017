// map parameters fo class Map constructor
import Plant from "./plants.js";

let treeParams = {
    // constructor's set
    size : 3,
    growthAge : 2,
    // classes for different types of plants
    treeClass : 'flaticon-tree-shape-of-thin-trunk-with-small-leaves-circles-outlines',
    bushClass : 'flaticon-big-plant-like-a-small-tree',
    springClass: 'flaticon-tree-trunk-growing-from-soil'
};
let bushParams = {
    size : 2,
    growthAge : 2,
    treeClass : 'flaticon-tree-shape-of-thin-trunk-with-small-leaves-circles-outlines',
    bushClass : 'flaticon-big-plant-like-a-small-tree',
    springClass: 'flaticon-tree-trunk-growing-from-soil'
};

let mapElements = {
    xSize : 30,
    ySize : 30,
    empty : 'empty',
    fruit : 'fruit',
    deer : 'deer',
    mouse : 'mouse',

    startTreesQuantity: 5,
    startBushQuantity: 5,
};


export {mapElements,treeParams, bushParams};