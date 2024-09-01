// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];

// Start coding here
for (let score in scores) {
    // console.log(scores[score] - 10);
    scores[score] = scores[score] - 10;
}
console.log(scores);