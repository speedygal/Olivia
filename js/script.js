window.onload = function() {
    // Check the flag and the time in localStorage
    var pinValidated = localStorage.getItem("pinValidated");
    var pinTime = localStorage.getItem("pinTime");
  
    if (pinValidated === "true") {
      var currentTime = new Date().getTime();
      // Check if more than one minute has passed
      if (currentTime - pinTime <= 600000 * 10) {  // 10 minutes
        document.getElementById("pin-access").style.display = "none";
        var mainContent = document.getElementById("main-content");
        mainContent.style.display = "block"; // Show the main content
        setTimeout(function() { // Add a delay before applying the transition effect
          mainContent.classList.add("visible"); // Add the 'visible' class
        }, 50);
      } else {
        // If more than one minute has passed, clear the flag and the time from localStorage
        localStorage.removeItem("pinValidated");
        localStorage.removeItem("pinTime");
      }
    }
  
    // Add event listener to the form submission
    var form = document.getElementById("pin-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      checkPin();
    });
  }
  
  function checkPin() {
    var pinInput = document.getElementById("pin-input");
    var pin = pinInput.value;
    if (pin === "1109") {
      // Store a flag and the current time in localStorage
      var currentTime = new Date().getTime();
      localStorage.setItem("pinValidated", "true");
      localStorage.setItem("pinTime", currentTime.toString());
  
      document.getElementById("pin-access").style.display = "none"; // Hide the PIN access form
      var mainContent = document.getElementById("main-content");
      mainContent.style.display = "block"; // Show the main content
      setTimeout(function() { // Add a delay before applying the transition effect
        mainContent.classList.add("visible"); // Add the 'visible' class
      }, 50);
    } else {
      pinInput.classList.add("error"); // Add the 'error' class to the PIN input field
      setTimeout(function() {
        pinInput.classList.remove("error"); // Remove the 'error' class after the shaking animation
      }, 1000); // 1000 ms = 0.5s (duration of the shaking animation) * 2 (number of shakes)
    }
    pinInput.blur(); // Add this line to remove the focus from the input field
  }
  
  var invitedGuests = ["John Doe", "Jane Smith"]  // replace with actual guest names

function validateName() {
  var inputName = document.getElementById('nameInput').value;
  var errorMessage = document.getElementById('errorMessage');

  if (!invitedGuests.includes(inputName)) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    // perform RSVP operation
  }
}
