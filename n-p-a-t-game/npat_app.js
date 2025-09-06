const letterInput=document.getElementById('letterInput');
const npatBtn=document.getElementById('npatBtn');
const npatResults=document.getElementById('npatResults');

const datasets={
  N:['Nancy','Nina','Nick'], 
  P:['Paris','Prague','Porto'], 
  A:['Ant','Alligator','Ape'], 
  T:['Tiger','Turtle','Turkey']
};

npatBtn.addEventListener('click',()=>{
  const l=letterInput.value.trim().toUpperCase();
  if(!l) return;
  let html='';
  html+=`<p>Name: ${datasets.N.find(w=>w.startsWith(l))||'N/A'}</p>`;
  html+=`<p>Place: ${datasets.P.find(w=>w.startsWith(l))||'N/A'}</p>`;
  html+=`<p>Animal: ${datasets.A.find(w=>w.startsWith(l))||'N/A'}</p>`;
  html+=`<p>Thing: ${datasets.T.find(w=>w.startsWith(l))||'N/A'}</p>`;
  npatResults.innerHTML=html;
});
