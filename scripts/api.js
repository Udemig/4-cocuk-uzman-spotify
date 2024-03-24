// istek atacağımız url
const url =
  "https://shazam-api6.p.rapidapi.com/shazam/top_tracks_country?country_code=TR&limit=30";
// istek atarken göndermemiz gereken ayarlar
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "17bfa31bbbmsh1355592a7405f9bp1dd229jsnd7e87c1e1260",
    "X-RapidAPI-Host": "shazam-api6.p.rapidapi.com",
  },
};

export const getPopuler = async () => {
  // api isteği atar
  const res = await fetch(url, options);
  // gelen veriyi işle
  const data = await res.json();
  return data.result.tracks;
};
