
var array = []

/***********CREATE AN ARRAY OF RANDOM NUMBERS***********/
function setRandom(){
	var i;
	var random;

	for(i=0; i<100; i++){

		random = Math.floor((Math.random() * 999) + 99);
		array[i] = random;
	}

}
setRandom();

/*********FINDS THE MIN AND MAX VALUES OF ARRAY**********/
function minMax(arr){
	var min = arr[0];
	var max = arr[0];
	var i = 0;

	for(i; i<arr.length; i++){

		if(min > arr[i]){
			min = arr[i];
		}

		if(max < arr[i]){
			max = arr[i];
		}
	}

	console.log("MIN: " + min + ", MAX: " + max);
}

minMax(array);
