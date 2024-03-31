const list = document.querySelector("#list");
console.log(list);

// arayüzü dinamik yapmak için kullandık
export const renderCards = (songs) => {
  songs.forEach((song) => {
    // * 1.adım: div oluştur.
    const div = document.createElement("div");
    // * 2.adım: carda müziğin bilgilerini ekle
    div.dataset.url = song.hub.actions?.pop().uri;
    div.dataset.title = song.title;
    div.dataset.photo = song.images?.coverart;

    // * 3.adım: class tanımla
    div.className = "card";
    // * 4.adım: içeriğini dinamik yap
    div.innerHTML = `
      <figure>
        <img
          src="${song.images?.coverart}"
          alt=""
        />
        <div class="play">
          <i class="bi bi-play-fill" id="play-btn"></i>
        </div>
      </figure>
      <h4>${song.subtitle}</h4>
      <p>${song.title}</p>
    
    `;
    // * 5.adım: htmle gönder
    list.appendChild(div);
  });
};

const playingInfo = document.querySelector(".playing");

// müziğin bilgilerini bas
export const renderPlaying = (data) => {
  console.log(data);
  playingInfo.innerHTML = `
  <div class="info">
    <img
      src="${data.photo}"
      alt=""
    />
    <div>
      <p>Şu an Oynatılıyor</p>
      <h3>${data.title}</h3>
    </div>
  </div>
  <audio
    src="${data.url}"
    controls
  ></audio>
  
  `;
};
