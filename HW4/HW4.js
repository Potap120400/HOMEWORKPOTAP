const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = (students) => {
    const men = [];
    const women = [];
    const pairs = [];
    for (let i = 0; i < students.length; i++) {
        let nameStudent = students[i];
        if (nameStudent.endsWith("а")) {
            men.push(nameStudent);
        } else {
            women.push(nameStudent);
        }
    }
    for (let i = 0; i < women.length; i++) {
        pairs.push([women[i], men[i]]);
    }
    return pairs;
};
const pairs = getPairs(students);
console.log(pairs);



const getThemes = (pairs, themes) =>{
   const themesForPairs = pairs.map((pair, i) => [pairs[i].join(' i '), themes[i]]);
   return themesForPairs;
}
const themesForPairs = getThemes(pairs,themes); 
console.log(themesForPairs);  



const getStudentMark = (students, marks) =>
  students.map((student, i) => [student, marks[i]]);
const studentMark = getStudentMark(students, marks);
console.log(getStudentMark(students, marks));



const getPairsAndRandom = (pairs) =>
  pairs.map((pair, i) => [...pairs[i], Math.floor(Math.random() * 5 + 0,9)]);

console.log(getPairsAndRandom(pairs));
const pairsRandom = getPairsAndRandom(pairs);

