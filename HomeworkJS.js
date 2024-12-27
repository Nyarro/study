var F1 = function (array) {
    if (array.length < 3) {
        console.log("Короткий массив")
        return;
    }

    function First(array) {
        array.sort(function (a, b) {
            return a - b;
        });
        var c = array.shift();
        array.push(c);
        return array;
    }

    function Second(array) {
        return array.length;
    }

    return {
        Array: First(array),
        Length: Second(array)
    }
};
console.log(F1([1, 52, 36, 14, 5]));

var F2 = function (array) {
    array.sort(function (a, b) {
        return a - b;
    }).reverse().unshift(0, 0, 0);  /// ПОЧЕМУ НЕ МОГУ НАПИСАТЬ ПУШ ТУТ
    array.push(1, 1, 1, 1, 1)
    return {
        Array: array,
        Length: array.length,
    }
}
console.log(F2([1, 4, 2, 3, 8, 12]));

var F3 = function (array) {
    array.sort(function (a, b) {
        return a - b;
    })
    // array.map((num) => num + 1);   почему не работает, если написать отдельно
    return {
        array: array.map((num) => num + 1),
        sum: array.map((num) => num + 1).reduce((a, b) => a + b)
    };
}
console.log(F3([3, 1, 2]));


var F4 = function (array) {
return {
    l: array.length,
    sum : array.reduce((a, b) => a + b),
    first: array.shift(),
    last: array.pop(),
}
}
console.log(F4([1, 2, 3, 4, 5, 6, 7]));








