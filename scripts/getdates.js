
// Get the current date
const today = new Date();

// Get the current year
const currentYear = today.getFullYear();

// Display the current year in the footer
document.querySelector("#currentyear").textContent = currentYear;

// Display the date the document was last modified
document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;
