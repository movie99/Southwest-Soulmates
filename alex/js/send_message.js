 // JavaScript code for sending a message
    function sendMessage() {
      const messageInput = document.getElementById("messageInput");
      const messageText = messageInput.value;

      if (messageText.trim() !== "") {
        // Create a new message element and append it to the message container
        const messageContainer = document.querySelector(".message-container");
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "outgoing");
        messageElement.innerHTML = `<p>${messageText}</p>`;
        messageContainer.appendChild(messageElement);

        // Clear the message input field
        messageInput.value = "";
      }
    }

    // Attach the sendMessage function to the Send button click event
    const sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", sendMessage);