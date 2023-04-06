function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "flex";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);

const submitSuccess = document.querySelector('.submit-success')
const submitError = document.querySelector('.submit-error')

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("contact-form");
  let formData = new FormData(myForm);
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
 // Function to update the mo details
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