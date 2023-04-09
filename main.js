function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
// JavaScript code to hide text overlay on slide change
var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var textOverlays = document.getElementsByClassName("text-overlay");

// showSlides();

// function showSlides() {
//     // Hide all text overlays initially
//     for (var i = 0; i < textOverlays.length; i++) {
//         textOverlays[i].style.opacity = "0";
//     }

//     // Show current slide and corresponding text overlay
//     slides[slideIndex].style.display = "block";
//     textOverlays[slideIndex].style.opacity = "1";

//     // Increment slide index and set timeout for next slide
//     slideIndex++;
//     if (slideIndex >= slides.length) {
//         slideIndex = 0;
//     }
//     setTimeout(showSlides, 5000); // Change image every 5 seconds
// }

const feedbackForm = document.querySelector('.feedback-container form');
const resetButton = document.querySelector('#reset');
const responseMessage = document.querySelector('.feedback-container .response');
const savedFeedback = document.querySelector('#saved-feedback');

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission

  // get feedback and rating values
  const feedbackValue = document.querySelector('#feedback').value;
  const ratingValue = document.querySelector('#rating').value;

  // save feedback value to savedFeedback element
  savedFeedback.textContent = feedbackValue;

  // simulate a response message
  responseMessage.textContent = 'Thank you for your feedback!';

  // clear form fields
  feedbackForm.reset();
});

resetButton.addEventListener('click', () => {
  // clear saved feedback and response message
  savedFeedback.textContent = '';
  responseMessage.textContent = '';

  // reset form fields
  feedbackForm.reset();
});

// Add click event listener to each book button
const bookButton = document.querySelector('.book-btn');
const seatsCount = document.querySelector('.seats');

let availableSeats = parseInt(seatsCount.innerText);

bookButton.addEventListener('click', function() {
  if (availableSeats > 0) {
    availableSeats--;
    seatsCount.innerText = availableSeats.toString();
    alert('Seat booked successfully!');
  } else {
    alert('Oops sorry, no more seats available.');
  }
});
const bookButtons = document.querySelectorAll('.book-btn');
bookButtons.forEach(button => {
  button.addEventListener('click', () => {
    const seats = button.previousElementSibling.querySelector('.seats');
    const numSeats = parseInt(seats.innerText);
    if (numSeats > 0) {
      seats.innerText = numSeats - 1;
      alert('Seat booked successfully!');
  } else {
    alert('Oops sorry, no more seats available.');
  }
    }
 ) });
// rating 
 function submitRating() {
  const ratingInput = document.getElementById("rating");
  const rating = ratingInput.value;

  if (rating >= 9) {
    alert("Thank you for your feedback! We're glad you loved it!");
  } else if (rating >= 5 && rating < 9) {
    alert("Thank you for your feedback! We'll use it to make improvements.");
  } else if (rating > 0 && rating < 5) {
    alert("Thank you for your feedback! We're sorry we didn't meet your expectations.");
  } else {
    alert("Please select a rating before submitting.");
  }
}

document.getElementById("rate-button").onclick = submitRating;

function changeTheme() {
	var body = document.getElementsByTagName("body")[0];
	
	if (body.classList.contains("dark-mode")) {
		// Change to light mode
		body.classList.remove("dark-mode");
	} else {
		// Change to dark mode
		body.classList.add("dark-mode");
	}
}
function changeTheme() {
	var body = document.getElementsByTagName("body")[0];
	var textElements = document.getElementsByTagName("p");
	
	if (body.classList.contains("dark-mode")) {
		// Change to light mode
		body.classList.remove("dark-mode");
		for (var i = 0; i < textElements.length; i++) {
			textElements[i].style.color = "black";
		}
	} else {
		// Change to dark mode
		body.classList.add("dark-mode");
		for (var i = 0; i < textElements.length; i++) {
			textElements[i].style.color = "white";
		}
	}
}


// document
//   .querySelector("form")
//   .addEventListener("submit", handleSubmit);

// const submitSuccess = document.querySelector('.submit-success')
// const submitError = document.querySelector('.submit-error')

// const handleSubmit = (e) => {
//   e.preventDefault();
//   let myForm = document.getElementById("contact-form");
//   let formData = new FormData(myForm);
//   fetch("http://localhost:3000/vehicles", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: new URLSearchParams(formData).toString(),
//   })
    
//     .then(() => { submitSuccess.setAttribute('data-submit', success); })
//     .catch((error) => { submitError.setAttribute('data-submit', error) });
// };


fetch("http://localhost:3000/vehicles")
  .then(response => response.json())
  .then(data => {
    // 2. Extract details of the first vehicle
    const car = data.vehicles[0];
    const { poster, number, capacity, title} = car;
    document.getElementById('poster').src = poster;
    document.getElementById('number').textContent = `${number}`;
    document.getElementById('capacity').textContent = capacity;
     document.getElementById('title').textContent = title;
       // 4. Create vehicle list
    const vehiclesList = document.getElementById('vehicles');
    data.vehicles.forEach(car => {
      const { poster, number, capacity, title } = car;
      const li = document.createElement('li');
      li.innerHTML = `<img src="${poster}" alt="${title}"><div><h4>${title}</h4><p>capacity: ${capacity}</p></div>`;
      li.addEventListener('click', () => showVehicleDetails(id));
      vehiclesList.appendChild(li);
        });    // 5. Set up buy ticket button click event taking buyTicket as a callback
    document.getElementById('book-vehicle').addEventListener('click', bookVehicle);
    })
    .catch(error => {
    console.log(error);
    });   
 // Function to update the vehicle details
    function updateVehicleDetails(car) {
      const { poster, title, capacity, tickets_sold } = movie;
      availableTickets = capacity - tickets_sold;
      document.getElementById('poster').src = poster;
      document.getElementById('number').textContent = `${number}`;
      document.getElementById('capacity').textContent = capacity;
      document.getElementById('title').textContent = title;
    }
    // Function to show vehicle details when a vehicle is clicked
    function showVehicleDetails(id) {
      fetch("http://localhost:3000/vehicles")
        .then(response => response.json())
        .then(data => {
          const car = data.vehicle.find(car => car.id === id);
          if (car) {
            updateVehicleDetails(car);
          }
        })
      .catch(error => console.error(error));
      }