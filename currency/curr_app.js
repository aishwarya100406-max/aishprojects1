const currConvert=document.getElementById('currConvert');
const currAmount=document.getElementById('currAmount');
const currFrom=document.getElementById('currFrom');
const currTo=document.getElementById('currTo');
const currResult=document.getElementById('currResult');

currConvert.addEventListener('click',()=>{
  const amount=currAmount.value, from=currFrom.value.toUpperCase(), to=currTo.value.toUpperCase();
  if(!amount||!from||!to)return;
  currResult.innerHTML='Converting...';
  fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`)
  .then(r=>r.json())
  .then(data=>currResult.innerHTML=`${amount} ${from} = ${data.result.toFixed(2)} ${to}`)
  .catch(()=>currResult.innerHTML='Error converting currency');
});
