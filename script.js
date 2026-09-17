const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateGrade(quiz, exam) {
    return (quiz + exam) / 2;
}

rl.question("Enter your Quiz Grade: ", function(quiz) {
    rl.question("Enter your Exam Grade: ", function(exam) {

        quiz = Number(quiz);
        exam = Number(exam);

        let grade = calculateGrade(quiz, exam);

        let result;

        if (grade >= 75) {
            result = "PASS";
        } else {
            result = "FAIL";
        }

        console.log("\nFinal Grade:", grade);
        console.log("Result:", result);

        rl.close();
    });
});