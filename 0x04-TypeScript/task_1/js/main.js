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
