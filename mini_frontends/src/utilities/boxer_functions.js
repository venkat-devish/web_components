export function findElement(arr, i, j) {
    return arr.find((ele) => ele.i === i && ele.j === j);
}

export let CONSTANTS = {
    order: 0,
    isAllSelected: false
}