const movies=[
{name:"Beyond the Stars",genre:"Sci-Fi",year:2026,poster:"poster-1",desc:"A mysterious signal sends a young explorer on a journey beyond everything humanity knows."},
{name:"Midnight Run",genre:"Action",year:2026,poster:"poster-2",desc:"A fast-paced night-time adventure where every decision changes the mission."},
{name:"Ocean of Dreams",genre:"Romance",year:2025,poster:"poster-3",desc:"Two strangers meet during a coastal journey and discover an unexpected connection."},
{name:"Dark Signal",genre:"Thriller",year:2026,poster:"poster-4",desc:"A hidden transmission reveals a secret that someone wants to keep buried."},
{name:"Wild Horizon",genre:"Adventure",year:2025,poster:"poster-5",desc:"A team sets out across a remote landscape in search of a legendary destination."},
{name:"City Lights",genre:"Comedy",year:2026,poster:"poster-6",desc:"A light-hearted story about friendship, ambition and unexpected city adventures."}
];

const grid=document.getElementById("movieGrid"), search=document.getElementById("searchInput"), noResults=document.getElementById("noResults");

function render(list=movies){
 grid.innerHTML=list.map(m=>`<article class="movie-card">
 <div class="poster ${m.poster}"><span>${m.name.toUpperCase()}</span></div>
 <div class="card-info"><h3>${m.name}</h3><p>${m.genre} • ${m.year}</p><button onclick="showDetails('${m.name}')">Details</button></div>
 </article>`).join("");
 noResults.style.display=list.length?"none":"block";
}
function showDetails(name){
 const m=movies.find(x=>x.name===name);
 document.getElementById("modalContent").innerHTML=`<h2>${name}</h2><p><b>Genre:</b> ${m?.genre||"Movie"} &nbsp; <b>Year:</b> ${m?.year||"2026"}</p><p>${m?.desc||"Movie details can be added here."}</p><button class="primary" onclick="openTrailer('${name}')">▶ Watch Trailer</button>`;
 document.getElementById("modal").style.display="flex";
}
function openTrailer(name){
 document.getElementById("modalContent").innerHTML=`<h2>${name} — Trailer</h2><p>This demo area is ready for your licensed trailer or YouTube embed.</p><div class="trailer-box">▶ TRAILER PREVIEW</div>`;
 document.getElementById("modal").style.display="flex";
}
function closeModal(){document.getElementById("modal").style.display="none"}
function filterGenre(genre){
 render(genre==="all"?movies:movies.filter(m=>m.genre===genre));
 document.getElementById("trending").scrollIntoView({behavior:"smooth"});
}
search.addEventListener("input",e=>{
 const q=e.target.value.toLowerCase().trim();
 render(movies.filter(m=>m.name.toLowerCase().includes(q)||m.genre.toLowerCase().includes(q)));
});
window.addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
render();