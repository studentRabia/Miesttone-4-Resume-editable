let isImageVisible: boolean = true; // Track if the image is visible

document.getElementById('resume-form')!.addEventListener('submit', function(event: Event) {
    event.preventDefault(); // Prevent default form submission
    
    // Retrieve input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    
    const profilePictureInput = document.getElementById('profilepicture') as HTMLInputElement;

    // Handle image file
    let profileImageURL = "";

    if (profilePictureInput.files && profilePictureInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImageURL = e.target?.result as string;
            displayResume(profileImageURL, name, email, phone, education, experience, skills);
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    } else {
        displayResume(profileImageURL, name, email, phone, education, experience, skills);
    }
});

// Function to display resume
function displayResume(image: string, name: string, email: string, phone: string, education: string, experience: string, skills: string) {
    const resumeDisplay = document.getElementById('resume-display')!;
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
document.getElementById('toggle-picture')!.addEventListener('click', function() {
    isImageVisible = !isImageVisible; // Toggle the visibility state
    const profilePictureInput = document.getElementById('profilepicture') as HTMLInputElement;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Handle image file
    let profileImageURL = "";

    if (profilePictureInput.files && profilePictureInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImageURL = e.target?.result as string;
            displayResume(profileImageURL, name, email, phone, education, experience, skills);
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    } else {
        displayResume(profileImageURL, name, email, phone, education, experience, skills);
    }
});
