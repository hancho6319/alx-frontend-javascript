// File: 0x03-ES6_data_manipulation/3-get_ids_sum.js

function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
