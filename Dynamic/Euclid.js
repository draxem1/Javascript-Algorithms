
/*********THIS ALGORITHM FINDS THE GREATEST COMMON DENOMINATOR*********/
function euclid(a, b){
	return b ? euclid(b, a%b) : a;
}

/********FOR LCM**********/
function lcm(a, b){
	return (!a || !b) ? 0 : Math.abs((a * b)) / euclid(a, b);
}

console.log(euclid(20, 3));
console.log(lcm(15, 18));
