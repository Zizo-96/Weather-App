const searchField = document.getElementById("search-field");
const btn = document.getElementById("search-button");

searchField.addEventListener("keydown", (event) => {
    if (event.key === "Enter")
    btn.click();
});

let city= "";

searchField.addEventListener("input",(event)=>{
    city = event.target.value;
});


btn.addEventListener('click', fetchData);
const cityName = document.getElementById("cityName");
const time = document.getElementById("time")
const summary = document.getElementById("summary");
const temperature = document.getElementById("temperature")
const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const img = document.getElementById("img")
const today= document.getElementById("today");
const secondDay= document.getElementById("second-day");
const thirdDay= document.getElementById("third-day");
const fourthDay= document.getElementById("fourth-day");
const fifthDay= document.getElementById("fifth-day");
const sixthDay= document.getElementById("sixth-day");
const img1 = document.getElementById("img1")
// console.log(weatherList);

function fetchData(){
fetch(`https://www.meteosource.com/api/v1/free/point?place_id=${city}&sections=all&language=en&units=metric&key=sputkcm2jfxyaz55j84nb6t2wpqc8868j7onhjyz`)
.then ( (result) => result.json())    
.then ( (data) => {
    console.log(data);
    temperature.innerHTML = parseInt(data.current.temperature) + ` <span>&#176;c</span>`;
    time.innerHTML = `Last updated: ${currentTime}`
    // console.log(temperature);
    cityName.innerHTML = `${city} <i class="fa-solid fa-location-dot fa-sm"></i>`;
    summary.innerHTML = data.current.summary;
    const iconNum = data.current.icon_num;
    img.src = iconNum ? `./Resources/weather-icons/small/${iconNum}.png` : "";
    
    today.innerHTML= `<span>Today</span>` + parseInt(data.daily.data[0].all_day.temperature_max) + `/` + parseInt(data.daily.data[0].all_day.temperature_min) + ` &#176;c`;
    
    const img1 = document.createElement("img");
    img1.src = data.daily.data[0].icon ? `./Resources/weather-icons/small/${data.daily.data[0].icon}.png` : "";
    today.appendChild(img1);

    let secondDayDate= "";
    secondDayDate= (data.daily.data[1].day);
    console.log(secondDayDate);
    const newSecondDay= new Intl.DateTimeFormat('en-US',{ weekday: 'short' }).format(new Date(secondDayDate));
    secondDay.innerHTML= `<span>${newSecondDay}</span>` + parseInt(data.daily.data[1].all_day.temperature_max) + `/` + parseInt(data.daily.data[1].all_day.temperature_min) + ` &#176;c`;

    const img2 = document.createElement("img");
    img2.src = data.daily.data[1].icon ? `./Resources/weather-icons/small/${data.daily.data[1].icon}.png` : "";
    secondDay.appendChild(img2);
    
    let thirdDayDate = "";
    thirdDayDate = (data.daily.data[2].day);
    const newThirdDay= new Intl.DateTimeFormat('en-US',{ weekday: 'short' }).format(new Date(thirdDayDate));
    thirdDay.innerHTML= `<span>${newThirdDay}</span>` + parseInt(data.daily.data[2].all_day.temperature_max) + `/` + parseInt(data.daily.data[2].all_day.temperature_min) + ` &#176;c`;

    const img3 = document.createElement("img");
    img3.src = data.daily.data[2].icon ? `./Resources/weather-icons/small/${data.daily.data[2].icon}.png` : "";
    thirdDay.appendChild(img3);
    
    let fourthDayDate = "";
    fourthDayDate = (data.daily.data[3].day);
    const newfourthDay= new Intl.DateTimeFormat('en-US',{ weekday: 'short' }).format(new Date(fourthDayDate));
    fourthDay.innerHTML= `<span>${newfourthDay}</span>` + parseInt(data.daily.data[3].all_day.temperature_max) + `/` + parseInt(data.daily.data[3].all_day.temperature_min) + ` &#176;c`;

    const img4 = document.createElement("img");
    img4.src = data.daily.data[3].icon ? `./Resources/weather-icons/small/${data.daily.data[3].icon}.png` : "";
    fourthDay.appendChild(img4);
    
    let fifthDayDate = "";
    fifthDayDate = (data.daily.data[4].day);
    const newfifthDay= new Intl.DateTimeFormat('en-US',{ weekday: 'short' }).format(new Date(fifthDayDate));
    fifthDay.innerHTML= `<span>${newfifthDay}</span>` + parseInt(data.daily.data[4].all_day.temperature_max) + `/` + parseInt(data.daily.data[4].all_day.temperature_min) + ` &#176;c`;

    const img5 = document.createElement("img");
    img5.src = data.daily.data[4].icon ? `./Resources/weather-icons/small/${data.daily.data[4].icon}.png` : "";
    fifthDay.appendChild(img5);

    let sixthDayDate = "";
    sixthDayDate = (data.daily.data[5].day);
    const newsixthDay= new Intl.DateTimeFormat('en-US',{ weekday: 'short' }).format(new Date(sixthDayDate));
    sixthDay.innerHTML= `<span>${newsixthDay}</span>` + parseInt(data.daily.data[5].all_day.temperature_max) + `/` + parseInt(data.daily.data[5].all_day.temperature_min) + ` &#176;c`;

    const img6 = document.createElement("img");
    img6.src = data.daily.data[5].icon ? `./Resources/weather-icons/small/${data.daily.data[5].icon}.png` : "";
    sixthDay.appendChild(img6);
})
};
