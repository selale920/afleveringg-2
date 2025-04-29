// Klasse/constructor-funktion til at oprette et Album-objekt
function Album(productionYear, favorites, rating, artistWebsite) {
  this.productionYear = productionYear;
  this.favorites = favorites;
  this.rating = rating;
  this.artistWebsite = artistWebsite;
}

// Funktion der tilføjer et <div>-element med albumdata til et HTML-element med givet ID
function addDivWithAlbum(album, parentid) {
  let parentElement = document.getElementById(parentid); // Finder HTML-elementet med det angivne ID

  // Opretter HTML-strengen med albumdata
  let elementToAdd =
    '<div class=text>' +
    ' <span class="txt">year produced</span> ' +
    " - " +
    album.productionYear +
    " // " +
    ' <span class="txt2">faves</span> ' + 
    " - " +
    album.favorites +
    " // " +
    ' <span class="txt3">rating</span> ' +
    " - " +
    album.rating + 
    " // " +
    ' <span class="txt4">website</span> ' +
    " - " +
    album.artistWebsite +
    "</div>";

  // Tilføjer den nye HTML til det eksisterende indhold
  parentElement.innerHTML = parentElement.innerHTML + elementToAdd;
}

// Henter JSON-data fra en lokal fil og behandler den
fetchContent("Data/albums.json").then((albums) => {
  console.log("Original Data: ");
  console.log(albums); // Viser rå JSON-data i konsollen

  let albumObjects = []; // Initialiserer en tom liste til Album-objekter

  console.log("To be populated: ");
  console.log(albumObjects);

  // Konverterer hver JSON-post til et Album-objekt
  for (let i = 0; i < albums.length; i++) {
    const album = new Album(
      albums[i].productionYear,
      albums[i].favorites,
      albums[i].rating,
      albums[i].artistWebsite,
    );
    albumObjects.push(album); // Lægger det nye objekt i listen
  }

  console.log("Object Data: ");
  console.log(albumObjects); // Viser de konstruerede objektdata

  console.log("Test: ");
  console.log(albumObjects[7].rating); // Tester adgangen til et specifikt objektfelt

  // Gennemløber alle albumobjekter og tilføjer dem til HTML-siden
  albumObjects.forEach(function (a) {
    addDivWithAlbum(a, "content");
  });
});

// Funktion til at hente JSON-indhold fra en given URL
async function fetchContent(url) {
  let request = await fetch(url); // Sender HTTP-anmodning
  let json = await request.json(); // Parser svaret som JSON
  return json; // Returnerer JSON-objektet
}
