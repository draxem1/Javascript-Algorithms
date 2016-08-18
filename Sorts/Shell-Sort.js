
/*******SWAPS VALUES AT INTERVAL*********/
function shell(arr, val){
		var i, j, prev;

	while(val > 1){
		for(i=0; i<arr.length; i++){
			if(arr[i] > arr[i+val]){
				prev = arr[i];
				arr[i] = arr[i+val];
				arr[i+val] = prev;
			}
			console.log(arr);
		}
		val -= 1;
	}
	return insertion(arr);
}

/**********PERFORMS INSERTION SORT WHEN INTERVAL = 1************/
function insertion(arr){
	var sub = [];
	var i, k, prev;

	for(i=0; i<arr.length; i++){

		sub.push(arr[i]);
		
		for(j=0; j<sub.length; j++){
			for(k=1; k<sub.length; k++){


			if(sub[k] < sub[k-1]){

				prev = sub[k-1];
				sub[k-1] = sub[k];
				sub[k] = prev;
			}
		}
		}
	}
	return sub;
}

console.log(shell([79,56,76,34,12,32,2,18,26,54,21,7], 4));
