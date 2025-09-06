const city1=document.getElementById('city1');
const city2=document.getElementById('city2');
const weatherBtn=document.getElementById('weatherBtn');
const weatherResults=document.getElementById('weatherResults');

weatherBtn.addEventListener('click',()=>{
  const c1=city1.value.trim(); const c2=city2.value.trim();
  if(!c1||!c2) return;
  weatherResults.innerHTML='Loading...';
  weatherResults.innerHTML='';
  [c1,c2].forEach(city=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
      .then(r=>r.json())
      .then(data=>{
        const div=document.createElement('div'); div.className='weatherCard';
        div.innerHTML=`<h3>${data.name}</h3>Temp: ${data.main.temp}°C, ${data.weather[0].description}`;
        weatherResults.appendChild(div);
      }).catch(()=>weatherResults.innerHTML='Error fetching weather');
  });
});
