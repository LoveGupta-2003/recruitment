console.log('Script is running');
document.addEventListener("DOMContentLoaded", function () {
    // Get the "Hire Now" button element
    const hireNowButton = document.querySelector(".btn");

    // Add a click event listener to the button
    hireNowButton.addEventListener("click", function () {
        // Display an alert when the button is clicked
        alert("Hiring process initiated! Connect with top talent now.");
    });
});