const movies = [
  {name:"Beyond the Stars", genre:"Sci-Fi", year:2026, poster:"poster-1", desc:"A mysterious signal sends a young explorer on a journey beyond everything humanity knows."},
  {name:"Midnight Run", genre:"Action", year:2026, poster:"poster-2", desc:"A fast-paced night-time adventure where every decision changes the mission."},
  {name:"Ocean of Dreams", genre:"Romance", year:2025, poster:"poster-3", desc:"Two strangers meet during a coastal journey and discover an unexpected connection."},
  {name:"Dark Signal", genre:"Thriller", year:2026, poster:"poster-4", desc:"A hidden transmission reveals a secret that someone wants to keep buried."},
  {name:"Wild Horizon", genre:"Adventure", year:2025, poster:"poster-5", desc:"A team sets out across a remote landscape in search of a legendary destination."},
  {name:"City Lights", genre:"Comedy", year:2026, poster:"poster-6", desc:"A light-hearted story about friendship, ambition and unexpected city adventures."}
];

const grid = document.getElementById("movieGrid");
const search = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

function movieUrl(name) {
  return `movie.html?name=${encodeURIComponent(name)}`;
}

function render(list = movies) {
  grid.innerHTML = list.map(movie => `<article class="movie-card">
    <a href="${movieUrl(movie.name)}" class="poster-link" aria-label="Open ${movie.name} details">
      <div class="poster ${movie.poster}"><span>${movie.name.toUpperCase()}</span></div>
    </a>
    <div class="card-info"><h3>${movie.name}</h3><p>${movie.genre} • ${movie.year}</p>
      <a class="details-link" href="${movieUrl(movie.name)}">Details</a>
    </div>
  </article>`).join("");
  noResults.style.display = list.length ? "none" : "block";
}

function showDetails(name) {
  window.location.href = movieUrl(name);
}

function openTrailer(name) {
  document.getElementById("modalContent").innerHTML = `<h2>${name} — Trailer</h2><p>This demo area is ready for your licensed trailer or YouTube embed.</p><div class="trailer-box">▶ TRAILER PREVIEW</div>`;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() { document.getElementById("modal").style.display = "none"; }

function filterGenre(genre) {
  render(genre === "all" ? movies : movies.filter(movie => movie.genre === genre));
  document.getElementById("trending").scrollIntoView({behavior:"smooth"});
}

search.addEventListener("input", event => {
  const query = event.target.value.toLowerCase().trim();
  render(movies.filter(movie => movie.name.toLowerCase().includes(query) || movie.genre.toLowerCase().includes(query)));
});

window.addEventListener("click", event => { if (event.target.id === "modal") closeModal(); });
render();
