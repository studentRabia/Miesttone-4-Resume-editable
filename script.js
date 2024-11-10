"use strict";
let isImageVisible = true; // Track if the image is visible
document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    // Retrieve input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const profilePictureInput = document.getElementById('profilepicture');
    // Handle image file
    let profileImageURL = "";
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profileImageURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            displayResume(profileImageURL, name, email, phone, education, experience, skills);
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    }
    else {
        displayResume(profileImageURL, name, email, phone, education, experience, skills);
    }
});
// Function to display resume
function displayResume(image, name, email, phone, education, experience, skills) {
    const resumeDisplay = document.getElementById('resume-display');
    resumeDisplay.innerHTML = ""; // Clear previous resume
    // Create the HTML for the resume
    const resumeHTML = `
        <div style="text-align:center;">
            ${isImageVisible && image ? `<img src="${image}" alt="Profile Picture" style="max-width: 150px; border-radius: 50%;"/>` : ""}
            <h2><b>Editable Resume</b></h2>
            <p><strong>Name:</strong><span contenteditable="true"> ${name}</span></p>
            <p><strong>Email:</strong><span contenteditable="true"> ${email}</span></p>
            <p><strong>Phone:</strong><span contenteditable="true"> ${phone}</span></p>
            <h3>Education</h3>
            <p contenteditable="true">${education}</p>
            <h3>Experience</h3>
            <p contenteditable="true">${experience}</p>
            <h3>Skills</h3>
            <p contenteditable="true">${skills}</p>
        </div>
    `;
    // Update the resume display area
    resumeDisplay.innerHTML = resumeHTML;
}
// Toggle button functionality
document.getElementById('toggle-picture').addEventListener('click', function () {
    isImageVisible = !isImageVisible; // Toggle the visibility state
    const profilePictureInput = document.getElementById('profilepicture');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    // Handle image file
    let profileImageURL = "";
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profileImageURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            displayResume(profileImageURL, name, email, phone, education, experience, skills);
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    }
    else {
        displayResume(profileImageURL, name, email, phone, education, experience, skills);
    }
});
