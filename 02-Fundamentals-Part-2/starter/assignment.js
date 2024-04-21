// Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("Indonesia", 280, "Ibu Kota Nusantara"));
console.log(describeCountry("Japan", 134, "Tokyo"));
console.log(describeCountry("Palestine", 6, "Jerusalem"));

// Function Declaraions and Function Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log("Indonesia", percentageOfWorld1(280));
console.log("Japan", percentageOfWorld1(134));
console.log("Palestine", percentageOfWorld1(6));

// Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;

// Functions Calling Other Functions
const describePopulation = function (country, population) {
  const percentage = Math.round(percentageOfWorld1(population) * 10) / 10;
  return `${country} has ${population} million people, which is about ${percentage}% of the world`;
};

console.log(describePopulation("Indonesia", 280));
console.log(describePopulation("Japan", 134));
console.log(describePopulation("Palestine", 6));

// Introduction to Array
const populations = [280, 1441, 6, 134];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

// Basic Array Operations
const neighbours = [
  "Malaysia",
  "Papua Nugini",
  "Timor Leste",
  "Brunei Darussalam",
];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}

neighbours[neighbours.indexOf("Timor Leste")] = "Timor Timor";
console.log(neighbours);

// Introduction to Objects
const myCountry = {
  country: "Indonesia",
  capital: "Ibu Kota Nusantara",
  language: "Bahasa Indonesia",
  population: 280,
  neighbours: ["Malaysia", "Papua Nugini", "Timor Leste", "Brunei Darussalam"],

  // Object Methods
  desribe() {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },

  checkIsland() {
    this.isIsland = this.neighbours ? true : false;
    // Even simpler version (see why this works...)
    // this.isIsland = !Boolean(this.neighbours.length);
  },
};

// Dot vs. Bracket Notation
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry);
myCountry["population"] -= 2;
console.log(myCountry);

// Object Methods
myCountry.desribe();
myCountry.checkIsland();
console.log(myCountry);

// Iteraion: the for Loop
for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting.`);
}

// Looping Arrays, Breaking and Continuing
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

// Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

// The While Loop
const percentages3 = []

let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i])
  percentages3.push(perc)
  i++
}
console.log(percentages3);
