
function bubbleSort(arr){
	var k, prev, j;

		for(k=0; k<arr.length; k++){

			for(j=1; j<arr.length; j++){

				if(arr[j] < arr[j-1]){

					prev = arr[j-1];
					arr[j-1] = arr[j];
					arr[j] = prev;
				}
			}
		}

		console.log(arr);
}

bubbleSort([9,4,6,19,34,3,11,78,32,26,15]);
