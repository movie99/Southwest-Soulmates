
console.log("Testing if JavaScript module is linked");
console.log("Changes my dudes")


const apiUrl = 'https://teamserver.alexhernandez11.repl.co/user_info';
// Data to send in the POST request
const postData = {
  //password: 'secret',
  //ip: 'exampleIP',
  //port: 'examplePort',
  user_name: "kik",
  hobbies: "love to play video play football",
  age: 21,
  height: 5.5,

};

// Define options for the fetch request
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postData),
};


// Send the POST request to the server
fetch(apiUrl, requestOptions)
  .then(response => {
    if (response.ok) {
      return response.json(); // Assuming the server responds with JSON data
    } else {
      throw new Error('Invalid ');
    }
  })
  .then(data => {
    console.log('Response from the server:', data);
    // Handle the server's response data here
  })
  .catch(error => {
    console.error('Error:', error);
  });

/*
// Send the POST request to the server
fetch(apiUrl, requestOptions)
  .then(response => {
    if (response.ok) {
      return response.json(); // Assuming the server responds with JSON data
    } else {
      throw new Error('Invalid password');
    }
  })
  .then(data => {
    console.log('Response from the server:', data);
    // Handle the server's response data here
  })
  .catch(error => {
    console.error('Error:', error);
  });

*/