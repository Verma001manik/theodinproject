const searchbar = document.getElementById("searchbar");
// got the search bar here 
const div = document.getElementById("data");
const temperature = document.getElementById("temp");
const windspeed = document.getElementById("windspeed");
const feels = document.getElementById("feel");
const humidity = document.getElementById("humid");
const locate = document.getElementById("location");
//  got all the elements to add data dynamically


    // console.log(searchbar.value);
    searchbar.addEventListener('keypress',function(e){
        // checking if enter is pressed 
        if(e.key=='Enter'){
            // console.log(searchbar.value);
            getWeather(searchbar.value);
            // sending location (searchbar.value) to getweather location 
           searchbar.value ="";


        }
    })


async function getWeather(place){
    // placw will be sent by getWeather  and getweather will get it from searchbar.value 
    // let place = "hyderabad";
    
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + place + "&APPID=6e24afa3486e47b0525c7e45dcc35a98", {
        mode:'cors'
    });
        const data = await response.json();
        console.log(place);
        
        const feels_like = data.main.feels_like;
        const temp = data.main.temp;
        const humid = data.main.humidity;
        const wind_speed = data.wind.speed;
        console.log({temp,feels_like,humid,wind_speed});
        openForm(place,temp,humid,feels_like,wind_speed);

    


}
function openForm(place,temp,humid,feel,wind){
    // using parameters to access the values 
    // note : also place is sent as an arguement here 
    div.style.display = "block";
    locate.innerText = "Location : "+ place ;
    temperature.innerText  = "Temperature : "+ temp + "F";
    humidity.innerText = "Humidity : " + humid;
    feels.innerText = "Feels Like : "+ feel;
    windspeed.innerText = "Windspeed : "+ wind;


}
// getWeather();
// need to add more stuff , will do that later, it works just fine with normal stylign
