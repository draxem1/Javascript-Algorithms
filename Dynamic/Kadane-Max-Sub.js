
/****Finds the max of sub Array********/
var maximumSubArray = function(array) {
    var ans = 0;
    var sum = 0;

    console.log(ans, sum);
    
    for (var i = 0; i < array.length; i++) {
        ans = Math.max(0, ans + array[i]);
        sum = Math.max(sum, ans);
        console.log(ans, sum, array[i]);
    }
    console.log(ans, sum);
    return sum;

};

maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
