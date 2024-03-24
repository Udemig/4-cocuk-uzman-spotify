export const renderCards = (songs) => {
  songs.forEach((song) => {
    console.log(song);
    // * 1.adım: div oluştur.
    const div = document.createElement("div");
    div.dataset.url = song.hub.actions?.pop().uri;
    div.dataset.title = song.title;
    div.dataset.photo = song.images?.coverart;
    console.log(div);
  });
};
