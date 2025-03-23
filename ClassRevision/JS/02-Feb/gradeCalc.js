//90 >= A
//80 >= B
//70 >= C
//60 >= D
//60 < F

function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

let grade = calculateGrade(70);

console.log(grade);
