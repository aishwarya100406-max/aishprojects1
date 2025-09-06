const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', ()=>{
  const filter = searchBar.value.toLowerCase();
  document.querySelectorAll('.card').forEach(card=>{
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(filter) ? '' : 'none';
  });
});
