let songName;
let artist;
let genre;
let imgURL;
let songLink;

let songOne={
                name: "Say It Like That(Garden)",
                artist: "SZA",
                genre: "R&B",
                imgURL:"https://i.ytimg.com/vi/HTgUwtoLl_o/maxresdefault.jpg",
                songLink:"https://www.youtube.com/watch?v=pcJo0tIWybY"  
};

let songTwo={
                name: "Hard Place",
                artist: "H.E.R.",
                genre: "R&B",
                imgURL:"https://i.ytimg.com/vi/NRJa2rLgGkI/maxresdefault.jpg",
                songLink:"https://www.youtube.com/watch?v=ya0LhdgXiaQ" 
};

let totalPlaylist=[songOne, songTwo];

//make a forEach for each array; input.val() then push, then forEach, then .empty(), just make sure it's organized, 




    
$("button").click(function() {
    $(".pic").empty();
    $(".title").empty();
    $(".name").empty();
    $(".type").empty();
    $(".video").empty();  
let valSong = $(".song").val();
let valArtist = $(".songartist").val();
let valGenre = $(".songGenre").val();
let valURL = $(".songURL").val();
let valLink = $(".linkSong").val();
let newSongs={
                name: valSong,
                artist: valArtist,
                genre: valGenre,
                imgURL:valURL,
                songLink:valLink  
};
totalPlaylist.push(newSongs);   
console.log(totalPlaylist);
totalPlaylist.forEach(function(song){
      $(".title").append(`<p>${song.name}</p>`);
      $(".name").append(`<p>${song.artist}</p>`);
      $(".type").append(`<p>${song.genre}</p>`);
      $(".pic").append(`<p> <img src="${song.imgURL}"></p>`);
       $(".video").append(`<p><a href="${song.songLink}">Link</a></p>`);
     
});




});