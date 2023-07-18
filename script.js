let city = "Paris";
let weatherIcon = document.querySelector('#weather_icon');
getTemperature(city);

let change = document.querySelector('#change');
change.addEventListener('click', ()=>{
  city = prompt('Add city name');
  getTemperature(city);
});

function getTemperature(city){
  
  let appid = "YOUR_API_KEY";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&units=metric`;

  let request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        let response = request.response;
        let weather = response.weather[0];
        weatherIcon.setAttribute('src',`http://openweathermap.org/img/w/${weather.icon}.png`);        
        let temp = response.main.temp;
        document.querySelector("#temperature_label").textContent = temp;
        let ville = response.name;
        document.querySelector("#city").textContent = ville;
      } else {
        alert("A problem has occurred, please try again later.");
      }
    }
  };
};