const createStudent = (nameStudent, yearStudent) => {
    const student = {
        name: nameStudent,
        year: yearStudent
    }
    return student
}
let nameStudent = "Mikey"
let yearStudent = "5th"
let newStudent = createStudent(nameStudent, yearStudent)

const addMathGrade = (marks) => {
    marks.mathGrade = "B"
    return marks
}
let marks = addMathGrade(newStudent)

const addHistoryGrade = (marks) => {
    marks.historyGrade = "C"
    return marks
}
marks = addHistoryGrade(newStudent)

const addScienceGrade = (marks) => {
    marks.scienceGrade = "A"
    return marks
}
marks = addScienceGrade(newStudent)
console.log(newStudent)
