
var array = [];

/*******GENERATES ARRAY OF RANDOM NUMBERS*********/
function setRandom(){
	var i;
	var random;

	for(i=0; i<50; i++){

		random = Math.floor(Math.random() * (999 - 100)) + 100;
		array[i] = random;
	}
}
setRandom();

/*******FINDS MIN & MAX OF ARRAY***********/
function minMax(){
	var i;
	var min = array[0];
	var max = array[0];

	for(i=0; i<array.length; i++){

		if(min > array[i]){
			min = array[i];
		}

		if(max < array[i]){
			max = array[i];
		}
	}

	console.log("MIN: " + min + ", Max: " + max);
}
minMax();