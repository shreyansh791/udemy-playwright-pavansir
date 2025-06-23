function getGrade(score: number): void {
    if (score >= 85) {
        console.log("first :: ", score)

    } else if (score >= 80) {
        console.log(score)

    } else if (score >= 70) {
        console.log(score)

    } else {
        console.log(score)

    }
}

// Example usage:
const studentScore = 88;
getGrade(studentScore)
