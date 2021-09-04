const apiKey = `a0eda48b121b74c011f7a30023fdceb8`;
const searchTemperature = () => {

    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data))

}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemparature = temparature => {
    console.log(temparature);
    setInnerText('city', temparature.name);
    setInnerText('temperature', temparature.main.temp);
    setInnerText('feels', temparature.main.feels_like);
    setInnerText('max', temparature.main.temp_max);
    setInnerText('min', temparature.main.temp_min);
    setInnerText('country', temparature.sys.country);



    setInnerText('condition', temparature.weather[0].main);
    setInnerText('situation', temparature.weather[0].description);
    setInnerText('time', temparature.timezone);


    //icon
    const urlIcon = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', urlIcon);
}