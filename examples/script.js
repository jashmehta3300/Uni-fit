// const axios = require('axios');

// // Make a request for a user with a given ID
// axios.get('http://unifitcw.herokuapp.com/')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })

//   // fetch('http://unifitcw.herokuapp.com/')
//   // .then((response) => {
//   //   return response.json();
//   // })
//   // .then((myJson) => {
//   //   console.log(myJson);
//   // });

function myFunction(){
  url = 'http://unifitcw.herokuapp.com/'       
  const response = await fetch(url)
  const json = await response.json()
  document.getElementById("hoJaaBhai").innerHtml = "Hi"
  }