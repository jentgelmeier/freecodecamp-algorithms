function updateInventory(arr1, arr2) {
    if (arr1.length < 1) {
        return arr2.map(a => [a[1],a[0]]).sort().map(a => [a[1],a[0]])
    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j].indexOf(arr1[i][1]) >= 0) {
                arr1[i].splice(0, 1, arr1[i][0] + arr2[j][0])
            }
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (arr1.flat().indexOf(arr2[j][1]) < 0) {
            arr1.push(arr2[j])
        }
    }
    return arr1.map(a => [a[1],a[0]]).sort().map(a => [a[1],a[0]]);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));