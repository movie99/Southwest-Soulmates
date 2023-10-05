$(document).ready(function() {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function() {
    $(".slideanim").each(function() {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
})



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
