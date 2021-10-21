class Student {
    marksStudent = [5, 3, 5, 4];
    marksNew = [];
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName
    }
    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
    }
    get marks() {
        return this.marksStudent;
    }
    set markSt(mark) {
        if (this.mark !== null) {
            this.marksStudent.push(mark);
        }
    }
    getAverageMark() {
        if (this.marksStudent !== null && this.marksStudent.length > 0) {
            return (this.marksStudent.reduce((a, b) => a + b) / this.marksStudent.length).toFixed(2)

        } else {
            return 0
        }
    }
    dismiss() {
        this.marksNew = this.marksStudent;
        this.marksStudent = null;
    }
    recover() {
        this.marksStudent = this.marksNew;
    }
}



const Vlad = new Student('Харківського Радіотехнічного', '4', 'Потапенко Владислав Русланович');
console.log(Vlad.getInfo());
console.log(Vlad.marks);
Vlad.markSt = 4;
Vlad.markSt = 5;
console.log(Vlad.getAverageMark());
Vlad.dismiss();
console.log(Vlad.marks);
Vlad.recover();
console.log(Vlad.marks);