var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var _loop_1 = function (i) {
    array.forEach(function (value) {
        console.log(value + " X ", i, " = " + value * i);
    });
};
for (var i = 1; i <= array.length; i++) {
    _loop_1(i);
}
