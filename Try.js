var F1 = function (array) {
    var sum = 0;
    return array.map((num) => sum += num);
};


console.log(F1([1, 2, 3, 4] ));