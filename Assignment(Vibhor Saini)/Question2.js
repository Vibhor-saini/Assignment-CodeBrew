const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 60 },
    { name: 'Charlie', score: 92 },
    { name: 'David', score: 75 }
];

function getHighScorers(students, marks) {
    const highScorers = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].score > marks) {
            highScorers.push(students[i].name);
        }
    }
    return highScorers;
}

console.log (getHighScorers(students, 70));


