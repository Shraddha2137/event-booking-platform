function bookEvent(eventName) {
  alert("You selected: " + eventName);
}

function submitForm(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let seats = document.getElementById("seats").value;
  alert(`Booking confirmed for ${name} (${email}) - Seats: ${seats}`);
}
