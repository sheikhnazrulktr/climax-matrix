/* Bollywood movie catalog: 2026 titles, kept alphabetically for easy browsing. */
const movies = [
  ["Aakhri Sawal", "Drama"], ["Accused", "Thriller"], ["Alpha", "Action"], ["Aryabhatt Ka Zero", "Drama"], ["Assi", "Drama"], ["Awarapan 2", "Romance"], ["Azad Bharath", "Drama"],
  ["Babita Singh Reporting", "Drama"], ["Baby Do Die Do", "Comedy"], ["Batwara 1947", "Drama"], ["Bhabiji Ghar Par Hain! Fun on the Run", "Comedy"], ["Bharat Bhhagya Viddhaata", "Drama"], ["Bhooth Bangla", "Horror"], ["Bihu Attack", "Action"], ["Border 2", "Action"], ["The Bose Files: Sach Ya Sazish", "Drama"],
  ["Candy and the Pizza Girl", "Comedy"], ["Chand Mera Dil", "Romance"], ["Charak: Fair of Faith", "Drama"], ["Children of God", "Drama"], ["Cocktail 2", "Romance"],
  ["Daadi Ki Shaadi", "Comedy"], ["Daayra", "Thriller"], ["Dacoit: A Love Story", "Action"], ["Dhamaal 4", "Comedy"], ["Dhurandhar: The Revenge", "Action"], ["Dial 1975", "Thriller"], ["Do Deewane Seher Mein", "Romance"], ["Drishyam: The Conclusion", "Thriller"], ["Dulhaniya Le Aaeegi", "Romance"],
  ["Eetha Ek Din", "Drama"],
  ["Gandhari", "Drama"], ["Ginny Weds Sunny 2", "Romance"], ["Governor", "Thriller"], ["The Great Grand Superhero", "Adventure"],
  ["Hai Jawani Toh Ishq Hona Hai", "Romance"], ["Haiwaan", "Thriller"], ["Hanuman Ansh", "Adventure"], ["Happy Patel: Khatarnak Jasoos", "Comedy"], ["Haunted 3D: Echoes of the Past", "Horror"], ["Heer Sara", "Romance"], ["Hum Angrezon Ke Zamane Ke Jailor Hai", "Comedy"], ["Human Cocaine", "Thriller"],
  ["IIZ: Indian Institute of Zombies", "Horror"], ["Ikka", "Action"], ["Ikkis", "Drama"], ["The India Story", "Drama"],
  ["Jeena Dil Se", "Drama"], ["Jeevan Ya Bheema Con?", "Comedy"],
  ["Kartavya", "Action"], ["The Kerala Story 2", "Drama"], ["King", "Action"], ["Kissa Court Kachehari Ka", "Drama"], ["Krishna Aur Chitthi", "Drama"], ["Krishnavataram Part 1: The Heart", "Adventure"],
  ["Last Man in Tower", "Drama"], ["The Last Salute", "Drama"], ["Lovers in the Blue Night", "Romance"], ["Lust Stories 3", "Drama"],
  ["Maa Behen", "Drama"], ["Main Vaapas Aaunga", "Drama"], ["Mardaani 3", "Action"], ["Max, Min & Miyaowzaki", "Comedy"], ["Mirzapur", "Action"], ["A Mosquito in the Ear", "Comedy"],
  ["Na Jaane Kaun Aa Gaya", "Drama"], ["No Means No", "Thriller"], ["Not a Hero", "Action"],
  ["O'Romeo", "Romance"], ["Obsess", "Thriller"], ["Ohh My Dog", "Comedy"], ["One Two Cha Cha Chaa", "Comedy"], ["Our Share of Sand", "Drama"],
  ["Paro", "Drama"], ["Pinaki Ki Kahani", "Drama"], ["Pati Patni Aur Woh Do", "Comedy"], ["Phoolan", "Drama"], ["Pooja Meri Jaan", "Thriller"], ["Prahaar: The Untold Story of Ujjwal Nikam", "Drama"],
  ["Rahu Ketu", "Comedy"], ["Raja Shivaji", "Historical"], ["Rajni Ki Baraat", "Comedy"], ["Ramayana: Part 1", "Adventure"], ["Ramyaa", "Drama"],
  ["Safia/Safdar", "Drama"], ["Satluj", "Drama"], ["September 21", "Thriller"], ["Shatak: Sangh Ke 100 Varsh", "Drama"], ["Subedaar", "Action"], ["System", "Thriller"],
  ["Teesri Begum", "Drama"], ["Tera Yaar Hoon Main", "Comedy"], ["Toaster", "Comedy"], ["Tu Yaa Main", "Romance"], ["Tum Mere Ho", "Romance"],
  ["Uttar Da Puttar", "Drama"], ["Vibe", "Romance"], ["Welcome to the Jungle", "Comedy"]
].map(([name, genre], index) => ({
  name, genre, year: 2026, poster: `poster-${(index % 9) + 1}`, page: `movie.html?name=${encodeURIComponent(name)}`
}));

const grid = document.getElementById("movieGrid");
const search = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

function render(list = movies) {
  grid.innerHTML = list.map(m => `<article class="movie-card"><a class="poster-link" href="${m.page}" aria-label="Open ${m.name}"><div class="poster ${m.poster}"><span>${m.name.toUpperCase()}</span></div></a><div class="card-info"><h3>${m.name}</h3><p>${m.genre} • ${m.year}</p><button onclick="openTrailer('${m.name.replace(/'/g, "\\'")}')">▶ Trailer</button></div></article>`).join("");
  noResults.style.display = list.length ? "none" : "block";
}
function openTrailer(name) { document.getElementById("modalContent").innerHTML = `<h2>${name} — Trailer</h2><p>Add a licensed trailer or official YouTube embed here.</p>`; document.getElementById("modal").style.display = "flex"; }
function closeModal() { document.getElementById("modal").style.display = "none"; }
function filterGenre(genre) { render(genre === "all" ? movies : movies.filter(m => m.genre === genre)); document.getElementById("trending").scrollIntoView({ behavior: "smooth" }); }
search.addEventListener("input", e => { const q = e.target.value.toLowerCase().trim(); render(movies.filter(m => m.name.toLowerCase().includes(q) || m.genre.toLowerCase().includes(q))); });
window.addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });
render();
