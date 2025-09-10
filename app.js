document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const studentIdInput = document.getElementById('student-id');
    const resultContainer = document.getElementById('result-container');
    const rollNoElement = document.getElementById('roll-no');
    const studentNameElement = document.getElementById('student-name');
    const classElement = document.getElementById('class');
    const averageElement = document.getElementById('average');
    const decisionElement = document.getElementById('decision');
    const resultsTable = document.getElementById('results-table');
    const frontPageLink = document.querySelector('.navbar a:first-child');

    // Sample data representing student results
const studentResults = {
    // Form 4 Students
'F42501': { name: 'Safiyo Mohamed Ahmed', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 96 } },
'F42502': { name: 'Suad Abdihakim Mohamed', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 89 } },
'F42503': { name: 'Jama Mohamed Elmi', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 61 } },
'F42504': { name: 'Abdirahman Caydiid Abdi', class: 'Form 4', decision: 'Fail', grades: { 'Biology': 33 } },
'F42505': { name: 'Abdirahman Ahmed Abdilahi', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 96 } },
'F42506': { name: 'Abdirahman Mohamed Muse', class: 'Form 4', decision: 'Fail', grades: { 'Biology': 48 } },
'F42507': { name: 'Abdisalan Said Mohamed', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 56 } },
'F42508': { name: 'Abdihafid Abshir Mohamed', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 'MG' } },
'F42509': { name: 'Abdirahman Ahmed Said', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 'MG' } },
'F42510': { name: 'Abdirizack Mahad Hassan', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 51 } },
'F42511': { name: 'Ayub Isse Mohamud', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 75 } },
'F42512': { name: 'Ahmed Qaasim Isse', class: 'Form 4', decision: 'Fail', grades: { 'Biology': 49 } },
'F42513': { name: 'Faysal Burhan Abdi', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 54 } },
'F42514': { name: 'Abdijibaar Mohamud Abdule', class: 'Form 4', decision: 'Fail', grades: { 'Biology': 29 } },
'F42515': { name: 'Siciid Abdi Daahir', class: 'Form 4', decision: 'Fail', grades: { 'Biology': 'MG' } },
'F42516': { name: 'Abdishakur Abdiaziz Ali', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 52 } },
'F42517': { name: 'Abdilahi Farhan Ali', class: 'Form 4', decision: 'Fail', grades: { 'Biology': 'MG' } },
'F42518': { name: 'Abdirahman Abdirashid Ahmed', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 'MG' } },
'F42519': { name: 'Said Jibriil Abdirahman', class: 'Form 4', decision: 'Fail', grades: { 'Biology': 27 } },
'F42520': { name: 'Mohamoud Said Ahmed', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 82 } },
'F42521': { name: 'Abdilahi Abdirizak Mohamoud', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 67 } },
'F42522': { name: 'Abdifatah Yusuf Ahmed', class: 'Form 4', decision: 'Fail', grades: { 'Biology': 'MG' } },
'F42523': { name: 'Ahmed Hassan Ali', class: 'Form 4', decision: 'Fail', grades: { 'Biology': 'MG' } },
'F42524': { name: 'Saleban Maxamed Khalid', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 'MG' } },
'F42525': { name: 'Zakaria Mohamed Elmi', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 'MG' } },
'F42526': { name: 'Mohamuud Mohamed Yusuf', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 'MG' } },
'F42527': { name: 'Faysal Yusuf Shire', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 59 } },
'F42528': { name: 'Abdikarim Abdulkatir Yusuf', class: 'Form 4', decision: 'Fail', grades: { 'Biology': 29 } },
'F42529': { name: 'Abdiwahid Hasan Abdiwahid', class: 'Form 4', decision: 'Fail', grades: { 'Biology': 'MG' } },
'F42530': { name: 'Mohamed Abdirahman Abdilahi', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 93 } },
'F42531': { name: 'Anas Mahamed Ali', class: 'Form 4', decision: 'Fail', grades: { 'Biology': 25 } },
'F42532': { name: 'Abdishakur Abdirizak Dahir', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 50 } },
'F42533': { name: 'Abdilahi Abshir Ahmed', class: 'Form 4', decision: 'Fail', grades: { 'Biology': 'MG' } },
'F42534': { name: 'Muse Mohamed Muse', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 91 } },
'F42535': { name: 'Abdirahman Abdiqadir Warsame', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 81 } },
'F42536': { name: 'Ahmed Abdirizak Mohamed', class: 'Form 4', decision: 'Fail', grades: { 'Biology': 37 } },
'F42537': { name: 'Mustafa Said Bile', class: 'Form 4', decision: 'Fail', grades: { 'Biology': 16 } },
'F42538': { name: 'Abdiwali Abdiqadir Ahmed', class: 'Form 4', decision: 'Pass', grades: { 'Biology': 96 } }
};

frontPageLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    studentIdInput.value = '';
    resultsTable.innerHTML = ''; 
    resultContainer.style.display = 'none'; 
});


function displayResults(student) {
    rollNoElement.textContent = studentIdInput.value;
    studentNameElement.textContent = student.name;
    classElement.textContent = student.class;
    decisionElement.textContent = student.decision;

    // Clear previous classes
    decisionElement.classList.remove('danger', 'success');

    if (student.decision.toLowerCase() === 'fail') {
        decisionElement.classList.add('danger'); // Red
    } else if (student.decision.toLowerCase() === 'pass') {
        decisionElement.classList.add('success'); // Green
    }


        let tableContent = `
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                 
                </tr>
            </thead>
            <tbody>
        `;

        const subjects = Object.keys(student.grades);
        for (let i = 0; i < subjects.length; i += 2) {
            tableContent += `
                <tr>
                    <td>${subjects[i]}</td>
                    <td>${student.grades[subjects[i]]}</td>
                  
                </tr>
            `;
        }

        tableContent += `</tbody>`;

        resultsTable.innerHTML = tableContent;
        resultContainer.style.display = 'block';
    }

  
    searchButton.addEventListener('click', () => {
        const studentId = studentIdInput.value.trim();

        if (studentResults[studentId]) {
            displayResults(studentResults[studentId]);
        } else {
            alert('No results found for the entered Roll Number.');
            resultContainer.style.display = 'none';
        }
    });
});


