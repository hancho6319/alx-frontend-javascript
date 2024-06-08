// Task : 1. Let's build a Teacher interface & 2. Extending the Teacher class 
var director_1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director_1);
var printTeacher = function (firstName, lastName) {
    var firstLetter = firstName.charAt(0).toUpperCase();
    var fullName = "".concat(firstLetter, ". ").concat(lastName);
    return fullName;
};
console.log(printTeacher("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework());
console.log(student.displayName());
