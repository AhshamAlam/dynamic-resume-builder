"use strict";
const form = document.getElementById("resume-form");
const resumeGenerate = document.getElementById("resume-generated");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    const resumeHTML = `
    <h2><b>Resume</b></h>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}<p>  
    <p><b>Email:</b>${email}<p>
    <p><b>Phone:</b>${phone}<p>
    
    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>
     
    <h3>Skills</h3>
    <p>${skills}</p>   
    `;
    // For the display
    if (resumeGenerate) {
        resumeGenerate.innerHTML = resumeHTML;
    }
});
