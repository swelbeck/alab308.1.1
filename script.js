// ---------------------------- Part 1: Math Problems ------------------------------
console.log("-----------------PART ONE-----------------");
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;
// console.log(isSum50)

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
// console.log(isTwoOdd)

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(`isOver25:`, isOver25);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(`isUnique:`, isUnique);

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(`isValid:`, isValid);
// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

// Check if all numbers are divisible by 5. Cache the result in a variable.
const divByFive = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log(`Are the numbers divisible by 5:`, divByFive);

// Check if the first number is larger than the last. Cache the result in a variable.

const isLarger = n1 < n4;
console.log(`Is n1 larger than n2?:`, isLarger);

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
let chain = n2 - n1;
console.log(`Arithmetic chain - n2-n1:`, chain)
// Multiply the result by the third number.

chain *= n3;
console.log(`Arithmetic chain - result * n3:`, chain);
// Find the remainder of dividing the result by the fourth number.

chain %= n4;
console.log(`Arithmetic chain - result % n4:`, chain);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(`isUnder25:`, isUnder25);

const isValid2 = isSum50 && isTwoOdd && isUnder25 && isUnique;
console.log(`isValid2:`, isValid2);

// ---------------------------- Part 2: Practical Math ----------------------------
console.log("-----------------PART TWO-----------------");
/* You are planning a cross-country road trip!

The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.

The average cost of fuel is $3 per gallon.*/

const totalMiles = 1500;
const fuelCostPerGallon = 3;
const budget = 175;

const mpgAt55mph = 30;
const mpgAt60mph = 28;
const mpgAt75mph = 23;

/* Set up a program to answer the following questions:
How many gallons of fuel will you need for the entire trip? */
console.log("------------ Gallons of Fuel Needed ------------");
let gallonsNeededAt55mph = totalMiles / mpgAt55mph;
console.log(
  `At 55mph, I will need ${gallonsNeededAt55mph} gallons of fuel for the entire trip.`
);

let gallonsNeededAt60mph = totalMiles / mpgAt60mph;
console.log(
  `At 60mph, I will need ${gallonsNeededAt60mph} gallons of fuel for the entire trip.`
);

let gallonsNeededAt75mph = totalMiles / mpgAt75mph;
console.log(
  `At 75mph, I will need ${gallonsNeededAt75mph} gallons of fuel for the entire trip.`
);

// Will your budget be enough to cover the fuel expense?
console.log("--------------- Budget ---------------");
const fuelCostAt55mph = gallonsNeededAt55mph * fuelCostPerGallon;

console.log(
  `At 55mph, is our budget of $${budget} enough? ${
    budget >= fuelCostAt55mph
  }, it will cost $${fuelCostAt55mph} for fuel.`
);

const fuelCostAt60mph = gallonsNeededAt60mph * fuelCostPerGallon;
console.log(
  `At 60mph, is our budget of $${budget} enough? ${
    budget >= fuelCostAt60mph
  }, it will cost $${fuelCostAt60mph} for fuel.`
);

const fuelCostAt75mph = gallonsNeededAt75mph * fuelCostPerGallon;
console.log(
  `At 75mph, is our budget of $${budget} enough? ${
    budget >= fuelCostAt75mph
  }, it will cost $${fuelCostAt75mph} for fuel.`
);
// How long will the trip take, in hours?
console.log("--------------- Trip Length ---------------");
const tripTimeAt55mph = totalMiles / 5;
console.log(
  `If we drive at 55mph, the trip will be ${tripTimeAt55mph} hours long.`
);

const tripTimeAt60mph = totalMiles / 60;
console.log(
  `If we drive at 60mph, the trip will be ${tripTimeAt60mph} hours long.`
);

const tripTimeAt75mph = totalMiles / 75;
console.log(
  `If we drive at 75mph, the trip will be ${tripTimeAt75mph} hours long.`
);

// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
console.log("--------------- Comparison ---------------");
console.log(
  `If we drive at 55mph, we will need ${gallonsNeededAt55mph} gallons of fuel which will cost $${fuelCostAt55mph} and the trip will be ${tripTimeAt55mph} hours long.`
);
console.log(
  `If we drive at 60mph, we will need ${gallonsNeededAt60mph} gallons of fuel which will cost $${fuelCostAt60mph} and the trip will be ${tripTimeAt60mph} hours long.`
);
console.log(
  `If we drive at 75mph, we will need ${gallonsNeededAt75mph} gallons of fuel which will cost $${fuelCostAt75mph} and the trip will be ${tripTimeAt75mph} hours long.`
);
console.log(`Given our budget of $${budget}, it does not make sense to drive at 75mph as the fuel cost puts us over budget. 
It probably makes the most sense to drive 55mph as you are only adding about ${
  tripTimeAt55mph - tripTimeAt60mph
} hours in time (compared to traveling at 60mph), but saving $${
  fuelCostAt60mph - fuelCostAt55mph
} which can be allocated to something else. If you prefer to get there more quickly while being under budget, then travel at 60mph.`);
// Log the results of your calculations using string concatenation or template literals.

// ---------------------------- Part 3: Future Exploration ----------------------------
