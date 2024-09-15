// Get references to the form and display area
var form = document.getElementById('Resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
if (form && resumeDisplayElement) {
    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload
        // Collect input values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var contact = document.getElementById('contact').value;
        var education = document.getElementById('Education').value;
        var experience = document.getElementById('Experience').value;
        var skills = document.getElementById('Skills').value;
        // Generate resume HTML content
        resumeDisplayElement.innerHTML = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Contact:</strong> ").concat(contact, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
    });
}
else {
    console.error('Form or resume display element not found.');
}
