// function get data(){
// fetch('https://swapi.co/api/starships/22/')
// .then(function(res){
//   return res.json();
// })
// .then(function(data){
//   console.log(data);
// })
//  //  //  SAME AS  //   //    //


const dataSection = document.querySelector('ship')

let starWarsShipData

fetch('https://swapi.co/api/starships/22/')
  .then((res) => res.json())
  // .then((data) => console.log(data)) //~this line tests

  .then(function (data) {
    console.log(data)
    starWarsShipData = data.results
    shipInformation()
  })

function shipInformation() {
  //for (const starWarsShip of starWarsShipData) {
  // const name = starWarsShip.name

  const ship = document.createElement('ship')
  return data.vehicles
  // profile.shipClass.add('profile')
}


let name = document.createElement('div')
console.log(name)
name.classList.add()
profile.appendChild(name)

let model = document.createElement('div')
model.classList.add()
profile.appendChild(model)

let max_atmosphering_speed = document.createElement('div')
max_atmosphering_speed.classList.add()
profile.appendChild(max_atmosphering_speed)

let passengers = document.createElement('div')
passengers.classList.add()
profile.appendChild(passengers)

let starship_class = document.createElement('div')
starship_class.classList.add()
profile.appendChild(starship_class)

let pilots = document.createElement('div')
pilots.classList.add()
profile.appendChild(pilots)







      //.then((data) => {
      // document.getElementById('output').innerHTML = data; ~ for HTML
      // let output
      // data.forEach(function () {

      //)
      // }
      // }
      // function get data(){
      //   fetch('https://swapi.co/api/starships/22/')
      //     .then((res) => res.json())
      // .then((data) => console.log(data)) this line tests
//