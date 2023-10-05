document.addEventListener('DOMContentLoaded', function() {
  const profileForm = document.getElementById('profileForm');

  profileForm.addEventListener('submit', function(e) {
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


// Define the API endpoint URL
const apiUrl = 'https://teamserver.alexhernandez11.repl.co/user_info';

// Data to send in the POST request
const postData = {
  // You can include additional data fields here, but some are currently commented out
  //password: 'secret',
  //ip: 'exampleIP',
  //port: 'examplePort',
  user_name: "alex23",               // User's username
  hobbies: "love to play video games", // User's hobbies
  age: 21,                            // User's age
  height: 5.5,                        // User's height in feet
};

// Define options for the fetch request
const requestOptions = {
  method: 'POST',                     // HTTP method (POST)
  headers: {
    'Content-Type': 'application/json', // Content type of the request (JSON)
  },
  body: JSON.stringify(postData),       // Convert the data to JSON format and set it as the request body
};

// Send the POST request to the server
fetch(apiUrl, requestOptions)
  .then(response => {
    if (response.ok) {
      return response.json(); // If the server responds with success, parse the JSON response
    } else {
      throw new Error('Invalid '); // If the response is not OK, throw an error
    }
  })
  .then(data => {
    console.log('Response from the server:', data);
    // Handle the server's response data here, in this case, it's logged to the console
  })
  .catch(error => {
    console.error('Error:', error); // Handle any errors that occur during the fetch request
  });
