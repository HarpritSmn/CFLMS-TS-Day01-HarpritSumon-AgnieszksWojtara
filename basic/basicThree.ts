// +++++++++++++++++++++++++++ PART ONE +++++++++++++++++++++++++++

let list: Array<string> = ["Thoams", "Peter", "Nicole"];
for (let index in list) {
   console.log(index);
};


// +++++++++++++++++++++++++++ PART TWO +++++++++++++++++++++++++++


let list: Array<string> = ["Thoams", "Peter", "Nicole"];
for (var value of list) {
   console.log(value);
}

// +++++++++++++++++++++++++++ PART THREE +++++++++++++++++++++++++++

let list: Array<string> = ["Thoams", "Peter", "Nicole"];
for (let index in list) {
   console.log(index,list[index]);
};


