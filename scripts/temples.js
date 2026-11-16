
// Get the hamburger button and navigation menu
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

// Open and close the navigation menu
menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    // Check whether the menu is open
    const isOpen = navigation.classList.contains("open");

    // Change the hamburger symbol
    menuButton.textContent = isOpen ? "✕" : "☰";

    // Update accessibility information
    menuButton.setAttribute("aria-expanded", isOpen);

    // Update button description
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close the menu after clicking a navigation link
const navLinks = document.querySelectorAll("#navigation a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    });
});

// Display the current year
const today = new Date();

document.querySelector("#currentyear").textContent =
    today.getFullYear();

// Display the last modified date
document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;
