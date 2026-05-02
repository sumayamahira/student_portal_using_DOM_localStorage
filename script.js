document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('student-form');
    const tableBody = document.getElementById('student-table-body');

    if (studentForm) {
        studentForm.addEventListener('submit', (e) => {

            const student = {
                id: document.getElementById('sid').value,
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                course: document.getElementById('course').value,

            };

            saveStudent(student);

            studentForm.reset();
            alert("Data saved to browser memory!");
        });
    }

    if (tableBody) {
        renderTable();
    }
});


function saveStudent(student) {
    const students = JSON.parse(localStorage.getItem('students'));
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
}

