// get the form
const form = document.querySelector('form');
    
// add event listener to form on submit
form.addEventListener('submit', (event) => {
    // prevent default form submission
    event.preventDefault();

    // get the input values
    const subject1 = Number(document.querySelector('#subject1').value);
    const subject2 = Number(document.querySelector('#subject2').value);
    const subject3 = Number(document.querySelector('#subject3').value);
    const subject4 = Number(document.querySelector('#subject4').value);
    const subject5 = Number(document.querySelector('#subject5').value);
    const subject6 = Number(document.querySelector('#subject6').value);
    const subject7 = Number(document.querySelector('#subject7').value);

    // calculate the general weighted average
    const average = (subject1 * 3 + subject2 * 3 + subject3 * 3 + subject4 * 3 + subject5 * 3 + subject6 * 3 + subject7 * 4) / 22;

    // display the calculated average
    document.querySelector('#average').textContent = average.toFixed(2);

    // determine the grade and remarks based on the average
    let grade, remarks;

    if (average >= 90) {
        grade = 'Passed';
        remarks = 'Outstanding';
    } else if (average >= 85) {
        grade = 'Passed';
        remarks = 'Very Satisfactory';
    } else if (average >= 80) {
        grade = 'Passed';
        remarks = 'Satisfactory';
    } else if (average >= 75) {
        grade = 'Passed';
        remarks = 'Fairly Satisfactory';
    } else {
        grade = 'Failed';
        remarks = 'Did Not Meet Expectations';
    }

    // display the grade and remarks
    document.querySelector('#average').textContent = average.toFixed(2);
    document.querySelector('#grade').textContent = grade;
    document.querySelector('#remarks').textContent = remarks;
});