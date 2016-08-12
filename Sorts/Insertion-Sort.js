
/******PARTITIONS INTO SUB THEN SORTS***********/
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
	console.log(sub);
}

insertion([34,22,10,37,50,2,5,18,14,12]);
