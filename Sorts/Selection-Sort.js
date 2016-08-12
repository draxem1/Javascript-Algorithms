
function selection(arr){
	var i, j, tmp, tmp2;


	for(i=0; i<arr.length; i++){

		tmp = i;

		for(j=i; j<arr.length; j++){

			if(arr[j] < arr[tmp]){
				tmp = j;
			}
		}

		if(tmp!=i){

            tmp2 = arr[tmp];
            arr[tmp] = arr[i];
            arr[i] = tmp2;
        }
        console.log(arr);
	}


}

selection([56,12,34,73,23,5,37,82,12]);
