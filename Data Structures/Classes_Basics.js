class Student {
    constructor(firstName, lastName, year) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.grade = year;
            this.tardies = 0;
            this.scores = [];

        }
        // Adding instance methods
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {

        this.tardies += 1;
        if (this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!";
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;

    }
    addScore(score) {
        this.score.push(score);
        return this.scores;
    }
    calculateAverage() {
        let sum = this.scores.reduce(function(a, b) { return a + b; });
        return sum / this.scores.length;
    }
    static EnrollStudent() {
        return "ENROLLING STUDENTS"
    }

}
let firstStudent = new Student("colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
firstStudent.fullName(); // "Your full name is Colt Steele"
secondStudent.fullName();
firstStudent.markLate();
secondStudent.markLate(); // "Blue Steele has been late 2 times"
firstStudent.markLate();
secondStudent.markLate(); // "Blue Steele has been late 2 times"
secondStudent.addScore(92);
secondStudent.addScore(84);
secondStudent.scores

firstStudent.addScore(98); //[98]
firstStudent.addScore(76); //[98,76]
firstStudent.calculateAverage() //87

//Calling class methods
Student.EnrollStudent();