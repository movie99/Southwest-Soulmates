document.addEventListener('DOMContentLoaded', function () {
    const profileForm = document.getElementById('profileForm');

    profileForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(profileForm);
        const formObject = {};

        // Convert form data to JSON object
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Send the formObject as JSON to the server (you can use fetch or AJAX for this)
        console.log(JSON.stringify(formObject)); // For demonstration purposes

        // Reset the form or perform any additional actions
        profileForm.reset();
    });
});
