function Album(productionYear, favorites, rating, artistWebsite) {
  this.productionYear = productionYear;
  this.favorites = favorites;
  this.rating = rating;
  this.artistWebsite = artistWebsite;

}


function addDivWithAlbum(album, parentid) {
  let parentElement = document.getElementById(parentid);
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
  parentElement.innerHTML = parentElement.innerHTML + elementToAdd;
}

fetchContent("Data/albums.json").then((albums) => {
  console.log("Original Data: ");
  console.log(albums);

  let albumObjects = [];

  console.log("To be populated: ");
  console.log(albumObjects);

  for (let i = 0; i < albums.length; i++) {
    const album = new Album(
      albums[i].productionYear,
      albums[i].favorites,
      albums[i].rating,
      albums[i].artistWebsite,
    );
    albumObjects.push(album);
  }

  console.log("Object Data: ");
  console.log(albumObjects);

  console.log("Test: ");
  console.log(albumObjects[7].rating);

  albumObjects.forEach(function (a) {
    addDivWithAlbum(a, "content");
  });
});

//A magic spell - memorise it and use it EXACTLY like this :)
async function fetchContent(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
