const quizContainer=document.getElementById('quizContainer');
const nextBtn=document.getElementById('nextBtn');
const scoreContainer=document.getElementById('scoreContainer');

const quizData=[
  {q:'Capital of France?',a:['Paris','London','Rome','Berlin'],correct:'Paris'},
  {q:'5 + 7 = ?',a:['10','11','12','13'],correct:'12'},
  {q:'JavaScript is ___ language?',a:['Server','Client','Programming','All'],correct:'Programming'}
];

let current=0, score=0;

function loadQuiz(){
  quizContainer.innerHTML='';
  if(current>=quizData.length){ quizContainer.style.display='none'; nextBtn.style.display='none'; scoreContainer.innerHTML=`Score: ${score}/${quizData.length}`; return; }
  const q=quizData[current];
  const h3=document.createElement('h3'); h3.textContent=q.q; quizContainer.appendChild(h3);
  q.a.forEach(ans=>{
    const btn=document.createElement('button'); btn.textContent=ans;
    btn.onclick=()=>{ if(ans===q.correct) score++; current++; loadQuiz(); };
    quizContainer.appendChild(btn);
  });
}

loadQuiz();
