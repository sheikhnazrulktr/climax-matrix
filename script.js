const movies = [
  {name:"Beyond the Stars", genre:"Sci-Fi", year:2026, poster:"poster-1", page:"beyond-the-stars.html"},
  {name:"Midnight Run", genre:"Action", year:2026, poster:"poster-2", page:"midnight-run.html"},
  {name:"Ocean of Dreams", genre:"Romance", year:2025, poster:"poster-3", page:"ocean-of-dreams.html"},
  {name:"Dark Signal", genre:"Thriller", year:2026, poster:"poster-4", page:"dark-signal.html"},
  {name:"Wild Horizon", genre:"Adventure", year:2025, poster:"poster-5", page:"wild-horizon.html"},
  {name:"City Lights", genre:"Comedy", year:2026, poster:"poster-6", page:"city-lights.html"}
];
const grid=document.getElementById("movieGrid"), search=document.getElementById("searchInput"), noResults=document.getElementById("noResults");
function render(list=movies){grid.innerHTML=list.map(m=>`<article class="movie-card"><a class="poster-link" href="${m.page}" aria-label="Open ${m.name}"><div class="poster ${m.poster}"><span>${m.name.toUpperCase()}</span></div></a><div class="card-info"><h3>${m.name}</h3><p>${m.genre} • ${m.year}</p><a class="details-link" href="${m.page}">Details</a></div></article>`).join("");noResults.style.display=list.length?"none":"block";}
function openTrailer(name){document.getElementById("modalContent").innerHTML=`<h2>${name} — Trailer</h2><p>This demo area is ready for your licensed trailer or YouTube embed.</p><div class="trailer-box">▶ TRAILER PREVIEW</div>`;document.getElementById("modal").style.display="flex";}
function closeModal(){document.getElementById("modal").style.display="none";}
function filterGenre(genre){render(genre==="all"?movies:movies.filter(m=>m.genre===genre));document.getElementById("trending").scrollIntoView({behavior:"smooth"});}
search.addEventListener("input",e=>{const q=e.target.value.toLowerCase().trim();render(movies.filter(m=>m.name.toLowerCase().includes(q)||m.genre.toLowerCase().includes(q)));});
window.addEventListener("click",e=>{if(e.target.id==="modal")closeModal();});render();
