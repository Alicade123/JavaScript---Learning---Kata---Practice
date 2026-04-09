const students = {
    "ALEX": { ICT: 88, MATHS: 56, PHYSICS: 90, ENGLISH: 53 },
    "ALINE": { ICT: 45, MATHS: 65, PHYSICS: 78, ENGLISH: 99 },
    "JACK": { ICT: 32, MATHS: 70, PHYSICS: 80, ENGLISH: 66 },
    "JANE": { ICT: 66, MATHS: 78, PHYSICS: 50, ENGLISH: 70 }
};

function calculateStudentAverage(studentScores) {
    const totalScore = Object.values(studentScores).reduce((sum, score) => sum + score, 0);
    return totalScore / Object.keys(studentScores).length;
}

function calculateModuleAverage(module, students) {
    const totalScore = Object.values(students).reduce((sum, scores) => sum + scores[module], 0);
    return totalScore / Object.keys(students).length;
}

function findMinMax(module, students) {
    let min = Infinity;
    let max = -Infinity;

    for (const student in students) {
        const score = students[student][module];
        if (score < min) min = score;
        if (score > max) max = score;
    }

    console.log(`For ${module}: Min = ${min}, Max = ${max}`);
}

// 1. Calculate the average for every student
for (const student in students) {
    const avg = calculateStudentAverage(students[student]);
    console.log(`${student}'s average: ${avg.toFixed(2)}`);
}

// 2. Calculate the average in every module
const modules = ['ICT', 'MATHS', 'PHYSICS', 'ENGLISH'];
modules.forEach(module => {
    const avg = calculateModuleAverage(module, students);
    console.log(`Average for ${module}: ${avg.toFixed(2)}`);
});

// 3. Display the Minimum and Maximum in Every module
modules.forEach(module => {
    findMinMax(module, students);
});

// 4. Display students whose average is above the general average
const allAverages = [];
for (const student in students) {
    const avg = calculateStudentAverage(students[student]);
    allAverages.push(avg);
}

const generalAverage = allAverages.reduce((sum, avg) => sum + avg, 0) / allAverages.length;
console.log(`General average: ${generalAverage.toFixed(2)}`);

for (const student in students) {
    const studentAvg = calculateStudentAverage(students[student]);
    if (studentAvg > generalAverage) {
        console.log(`${student} has an average above the general average.`);
    }
}
