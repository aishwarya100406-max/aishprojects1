const dictSearch=document.getElementById('dictSearch');
const dictWord=document.getElementById('dictWord');
const dictResult=document.getElementById('dictResult');

dictSearch.addEventListener('click',()=>{
  const word=dictWord.value.trim();
  if(!word)return;
  dictResult.innerHTML='Loading...';
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  .then(res=>res.json())
  .then(data=>{
    if(data.title){dictResult.innerHTML='Word not found';return;}
    let html=`<h3>${data[0].word}</h3>`;
    html+=`<p><strong>Pronunciation:</strong> ${data[0].phonetics[0]?.text || 'N/A'}</p>`;
    html+=`<p><strong>Definition:</strong> ${data[0].meanings[0].definitions[0].definition}</p>`;
    html+=`<p><strong>Synonyms:</strong> ${data[0].meanings[0].definitions[0].synonyms.join(', ') || 'N/A'}</p>`;
    dictResult.innerHTML=html;
  }).catch(()=>dictResult.innerHTML='Error fetching definition');
});
