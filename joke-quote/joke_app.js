const jokeBtn=document.getElementById('jokeBtn');
const quoteBtn=document.getElementById('quoteBtn');
const jokeResult=document.getElementById('jokeResult');

jokeBtn.addEventListener('click',()=>{
  jokeResult.innerHTML='Loading...';
  fetch('https://v2.jokeapi.dev/joke/Any')
  .then(r=>r.json())
  .then(data=>{
    if(data.type==='single') jokeResult.innerHTML=data.joke;
    else jokeResult.innerHTML=data.setup+'<br>'+data.delivery;
  }).catch(()=>jokeResult.innerHTML='Error fetching joke');
});

quoteBtn.addEventListener('click',()=>{
  jokeResult.innerHTML='Loading...';
  fetch('https://api.quotable.io/random')
  .then(r=>r.json())
  .then(data=>jokeResult.innerHTML=`"${data.content}" — ${data.author}`)
  .catch(()=>jokeResult.innerHTML='Error fetching quote');
});
