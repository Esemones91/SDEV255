var tab = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5"];
console.log("Initial tab = ", tab);

tab = tab.map(function(element, index) {
    return element.toUpperCase();
});
console.log( "\nFinal tab = ", tab);

