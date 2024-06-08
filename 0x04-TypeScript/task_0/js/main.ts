interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student_1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student_2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList: Student[] = [student_1, student_2];


const body = document.body;
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const cell_1 = document.createElement("td");
    const cell_2 = document.createElement("td");

    cell_1.textContent = student.firstName;
    cell_2.textContent = student.location;

    row.appendChild(cell_1);
    row.appendChild(cell_2);
    tableBody.appendChild(row);
});

table.appendChild(tableBody);
body.appendChild(table);
