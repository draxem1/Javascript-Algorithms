
/*********CUTS ARRAY IN HALF*********/
function mergeSort(arr){

		if(arr.length < 2){
   			return arr;
   		}

   var mid = Math.floor(arr.length * 0.5);
   var left = arr.splice(0, mid);
   var right = arr.splice(0, arr.length);

   /******KEEPS CREATING SUB ARRAYS UNTIL THEY'RE SIZE IS 1*******/
   return merge(mergeSort(left), mergeSort(right));
}


/*****SORTS THE TWO ARRAYS & MERGES THEM INTO 1*************/
function merge(left, right){
	var sorted = [];


/********THIS WHILE LOOP DOES THE SORTING**********/
	while(left.length && right.length){

		if(left[0] <= right[0]){
			sorted.push(left.shift());
		}
		else{
			sorted.push(right.shift());
		}
	}


/*******THESE WHILE LOOPS MAKE SURE NO VALUES ARE MISSING*******/
	while(left.length){
		sorted.push(left.shift());
	}
	while(right.length){
		sorted.push(right.shift());
	}

	return sorted;
}
console.log(mergeSort([2,5,3,19,13,11,8,7,10]));

