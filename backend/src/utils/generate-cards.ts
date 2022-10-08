import { Card } from "../interfaces/card-interface";

const persija = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Lambang_Persija_Jakarta.svg/1200px-Lambang_Persija_Jakarta.svg.png",
  "https://statik.tempo.co/data/2017/12/15/id_669938/669938_720.jpg",
  "https://cdn0-production-images-kly.akamaized.net/Os207nLJC1Qy4w2h2XP9VYwU95E=/258x0:978x720/1200x1200/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1556078/original/037350800_1580299655-Persija_Jakarta.jpg",
  "https://cdn1-production-images-kly.akamaized.net/0nwJ314f5Kq5JfVXDqTovtZZJeo=/0x220:720x626/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3411288/original/077178600_1616669138-Persija_Jakarta_-_Ilustrasi_Logo.jpg",
  "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2022/08/02/20220801_142633jpg-20220802105121.jpg",
  "https://img.okezone.com/content/2022/09/12/49/2666048/twitter-resmi-persija-jakarta-diretas-netizen-hadeuh-kena-hack-LAdSKZ0FwE.jpg",
  "https://cdn0-production-images-kly.akamaized.net/YDcsuESpwHvnNLD5jl_RjH1IBbw=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3545101/original/064078200_1629362493-Persija_Jakarta_-_Jakarta_International_Stadium.jpg",
  "https://akcdn.detik.net.id/community/media/visual/2022/02/28/persija-jakarta_169.jpeg?w=700&q=90",
  "https://assets.skor.id/crop/0x0:0x0/x/photo/2020/04/19/1294018197.jpeg",
  "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/04/12/1727959785.jpg",
];

const persib = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Persib_Bandung_crest_with_stars.svg/1200px-Persib_Bandung_crest_with_stars.svg.png",
  "https://cdn-2.tstatic.net/jabar/foto/bank/images/pemain-persib-bandung-mengenakan-pita-hitam.jpg",
  "https://cdn1-production-images-kly.akamaized.net/fHafoPu4XuZ_1cqoBkHlVArAm-k=/275x0:995x720/1200x1200/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1555452/original/099428800_1580299387-Persib_Bandung.jpg",
  "https://cdn-2.tstatic.net/jabar/foto/bank/images/asisten-pelatih-persib-bandung-manuel-perez-cascallana-mengenakan-pita-hitam.jpg",
  "https://simamaung.com/wp-content/uploads/2022/10/071022-SHALAT-GOIB-DAN-DOA-BERSAMA-03-940x498.jpg",
  "https://asset.kompas.com/crops/rNbRkXjjBQNoC94QjgAjHxv2zXQ=/0x0:3691x2461/750x500/data/photo/2022/08/15/62fa5581ac352.jpeg",
  "https://asset.kompas.com/crops/bAZp4CEQ3Rwaa-cY4tm9ADX2A0g=/0x0:2034x1356/750x500/data/photo/2022/09/17/6325269628483.jpeg",
  "https://asset-a.grid.id/crop/0x15:1280x841/750x500/photo/2020/04/30/1752195332.jpg",
  "https://cdns.klimg.com/bola.net/library/upload/21/2022/08/645x430/persib_c3791f3.jpg",
  "https://awsimages.detik.net.id/community/media/visual/2022/08/01/persib-bandung-vs-madura-united-2_169.jpeg?w=1200",
];

const persebaya = [
  "https://upload.wikimedia.org/wikipedia/id/thumb/a/a1/Persebaya_logo.svg/1200px-Persebaya_logo.svg.png",
  "https://cdn0-production-images-kly.akamaized.net/qppWGU8Op-eJzO6OmqJzGr8OBuM=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2721201/original/034457300_1549364965-20190205_Persebaya_Surabaya.jpg",
  "https://akcdn.detik.net.id/visual/2022/08/24/persebaya-menang-atas-psis_169.jpeg?w=650",
  "https://awsimages.detik.net.id/community/media/visual/2018/03/27/478879c5-99a7-4462-8f0c-6fc74cda273a_169.jpeg?w=1200",
  "https://cdn1-production-images-kly.akamaized.net/gdOR1vvuj4rbTiUEGzoLO5XUnyI=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1491381/original/042380600_1580298862-Persebaya_Surabaya.jpg",
  "https://static.republika.co.id/uploads/images/inpicture_slide/persebaya-surabaya-_130116095427-563.png",
  "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltfdb02eb5fd169c0a/61b95ce69f2f1741b87a03c6/Persebaya_Surabaya_U-18_Cropped.jpg",
  "https://akcdn.detik.net.id/visual/2022/08/14/persebaya-surabaya-vs-madura-united_169.jpeg?w=650",
  "https://asset.kompas.com/crops/UsrOjAabjnjqYXKUf658HyxZOfc=/0x0:2976x1984/750x500/data/photo/2022/05/25/628d7f18eb999.jpg",
  "https://asset.kompas.com/crops/RgUxsAoeOdfOwJI-lF3jTzzNFus=/0x0:2448x1632/750x500/data/photo/2020/04/09/5e8ed7e2330c1.jpg",
];

const presets: { [key: string]: string[] } = {
  Persija: persija,
  Persib: persib,
  Persebaya: persebaya,
};

const generateCards = (preset: string): Card[] => {
  let cards = presets[preset];
  return cards.map((c, index) => ({
    id: `${preset}-${index + 1}`,
    name: `${preset}-${index + 1}`,
    link: c,
  }));
};

export default generateCards;
