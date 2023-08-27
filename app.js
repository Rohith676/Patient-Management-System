const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

// const postsList = document.querySelector('.posts-list');

sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});

// Pop-up message after registering 
let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("open-popup");
}

function closePopup(){
  popup.classList.remove("open-popup");
}












// technique to store data to database
const formEl = document.querySelector('.sign-up-form');

        formEl.addEventListener('submit', () => {
            event.preventDefault();


            const formData = new FormData(formEl);
            const data = Object.fromEntries(formData);

            fetch('http://hosp-managment-system.us-e2.cloudhub.io/new', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
              .then(data => console.log(data))
              .catch(error => console.log(error));
        });


// technique to get data from database
// const formE1 = document.querySelector(".sign-in-form");
// formE1.addEventListener("submit", event => {
//     event.preventDefault(); // Prevent form submission


//     const formData = new FormData(formE1);
//     const data = Object.fromEntries(formData);

//     fetch('http://hosp-managment-system.us-e2.cloudhub.io/get', {
//     method: 'POST', // Use POST for sending data in the request body
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//     })
//     .then(response => {
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
//     })
//     .then(responseData => {
//     console.log(responseData);
//     // Handle the response data here
//     })
//     .catch(error => {
//     console.error("Error fetching data from API:", error);
//     // Handle the error here or show an error message to the user
//     });
// });







const formE1 = document.querySelector(".sign-in-form");
    formE1.addEventListener("submit", event => {
      event.preventDefault(); // Prevent form submission

 

      const formData = new FormData(formE1);
      const data = Object.fromEntries(formData);


 

      fetch('http://hosp-managment-system.us-e2.cloudhub.io/get', {
        method: 'POST', // Use POST for sending data in the request body
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(responseData => {
        console.log(responseData);
        // Store the response data in localStorage
        localStorage.setItem('apiResponse', JSON.stringify(responseData));
        // Redirect to the next page
        window.location.href = 'display.html';
      })
      .catch(error => {
        console.error("Error fetching data from API:", error);
        // Handle the error here or show an error message to the user
      });
    });





        