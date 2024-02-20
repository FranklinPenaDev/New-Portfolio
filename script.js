function submitForm() {
    // Get form values
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var projectDetails = document.getElementById("projectDetails").value;

    // Construct the email body
    var emailBody = "First Name: " + firstName + "\n";
    emailBody += "Last Name: " + lastName + "\n";
    emailBody += "Project Details: " + projectDetails;

    // Open a new window with the mailto link
    var mailtoLink = "mailto:pena.franklin.g@gmail.com?subject=Project Inquiry&body=" + encodeURIComponent(emailBody);
    var mailtoWindow = window.open(mailtoLink, "_blank");

    // Show an alert after a delay (adjust the delay as needed)
    setTimeout(function () {
        alert("Email sent");
        
        // Clear the form fields
        document.getElementById("fName").value = "";
        document.getElementById("lName").value = "";
        document.getElementById("projectDetails").value = "";

        // Close the mailto window
        if (mailtoWindow) {
            mailtoWindow.close();
        }
    }, 1000); // Adjust the delay as needed (in milliseconds)
};