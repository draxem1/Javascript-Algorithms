
/*******************************************
*
*A linear search starts from beginning and
*searches every index until value is found
*
******************************************/
function linearSearch(arr, target){
		var i;

		for(i=0; i<arr.length; i++){

			if(arr[i] == target){
				console.log("FOUND!!!\N" + "Location Of Target: " + (i + 1));
			}
		}
}
linearSearch([67, 45, 22, 13, 4, 52, 87], 13);