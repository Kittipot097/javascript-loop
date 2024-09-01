// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
minScore = scores[0];
console.log(minScore);

for (let i = 0; i <= scores.length - 1; i++) {
    console.log(i);
    console.log(minScore);
    console.log(scores[i]);
    if (minScore > scores[i]) {
        minScore = scores[i];
    }
}

console.log(minScore);
