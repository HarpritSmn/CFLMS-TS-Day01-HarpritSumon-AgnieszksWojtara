// function getName(){
// 	document.getElementById("result").innerHTML += `Harprit Sumon`
// };
// getName();

//++++++++++++++++++++++++++ PART TWO ++++++++++++++++++++++++++

// [10].forEach(i => Array(i).fill(i).forEach(_ => {
//   document.getElementById("result").innerHTML += `Harprit Sumon <br>`
// }))

//+++++++++++++++++++++ part two option b

// [10].forEach(function(i) {
//   Array(i).fill(i).forEach(function() {
//     document.getElementById("result").innerHTML += `Harprit Sumon <br>`
//   })
// });

// +++++++++++++++++++++++++++++++ PART THREE +++++++++++++++++++++++++++++++

setTimeout(function(){
 
	[10].forEach(function(i) {
	  Array(i).fill(i).forEach(function() {
	    document.getElementById("result").innerHTML += `Sumon <br>`
	  })
	});

}, 5000);









