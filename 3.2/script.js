/**
 * Created by siqi on 9/21/16.
 */

/* Simulation */

var numOfSimulations = 1000;
var sum=0;
var bucket1 = 0,
	bucket2 = 0,
	bucket3 = 0,
	bucket4 = 0;

/*
Step 1. If we want to run the simulation we have to construct the loop, iterating over it for x number of times, 
and each time, run Math.random()
Each time of Math.random() will generate a number between 0 and 1

Inside the for loop, run Math.random();
add the result to a sum variable

each time we rund Math.random(), use a if statement
*/


for(var i=0; i<numOfSimulations; i++) {

	var result = Math.random();

	sum = sum + result;
	console.log("iteration" + i + ", sum is" + " " + sum);

	if (result <= .25) {
		bucket1 = bucket1 +1;
	}

	else if(result <= .5) {
		bucket2 = bucket2 +1;

	}

	else if(result <= .75) {
		bucket3 ++;

	}

	else{
		bucket4 +=1;

	}
}

console.log("Average is " + sum/numOfSimulations);
console.log("Proportion of values between 0 and .25 is " + bucket1/numOfSimulations+100 + "%");
console.log("Proportion of values between .25 and .50 is " + bucket2/numOfSimulations+100 + "%");
console.log("Proportion of values between .50 and .75 is " + bucket3/numOfSimulations+100 + "%");
console.log("Proportion of values between .75 and 1 is " + bucket4/numOfSimulations+100 + "%");







