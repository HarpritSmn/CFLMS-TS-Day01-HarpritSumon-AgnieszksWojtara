// +++++++++++++++++++++++++++ PART ONE +++++++++++++++++++++++++++
var list = ["Thoams", "Peter", "Nicole"];
for (var index in list) {
    console.log(index);
}
;
// +++++++++++++++++++++++++++ PART TWO +++++++++++++++++++++++++++
var list = ["Thoams", "Peter", "Nicole"];
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var value = list_1[_i];
    console.log(value);
}
// +++++++++++++++++++++++++++ PART THREE +++++++++++++++++++++++++++
var list = ["Thoams", "Peter", "Nicole"];
for (var index in list) {
    console.log(index, list[index]);
}
;
