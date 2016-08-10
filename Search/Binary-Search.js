

function findTarget(arr, target){
	var lo = 0;
	var hi = arr.length-1;
	var index;


/******CUTS RANGE IN ARR IN HALF TILL TARGET IS FOUND**********/

while(lo < hi){

		index = lo + (hi - lo)/2;

		if(index % 1 > 0){
			index = Math.floor(index);
		}

		if(target < arr[index]){
			hi -= 1;

		}
		else if(target > arr[index]){
			lo += 1;
		}
		else{
			console.log(arr[index]);
			break;
		}
	}
}

findTarget([1,2,3,4,5,6,7,8,9,10], 2);
