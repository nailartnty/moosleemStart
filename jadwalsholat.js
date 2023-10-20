const city = 1222;
//get data
const date = new Date();
// console.log(date);
//dalam date itu ada hari, bulan, tahun,tggl


//(padStart)= 2 itu maksimal digit,  "0" itu 
const dd = String(date.getDate()).padStart(2, "0");
// console.log(dd); percobaan
const mm = String(date.getMonth() +1 ).padStart(2, "0");
// console.log(mm); percobaan
const yyyy = date.getFullYear();
console.log(yyyy);
const now = yyyy + "-" + mm + "-" + dd;

const jadwalApi = `https://api.myquran.com/v1/sholat/jadwal/${city}/${yyyy}/${mm}`;

fetch(jadwalApi)
.then(function(response) {
     if (!response.ok) {
          throw new Error("Ada yang salah bung");
     } return response.json();
})
.then((data) => {
     // console.log(data); for testing
     const jadwal = data.data;
     // console.log(jadwal);
     const list = jadwal.jadwal;
     // console.log(list);


     //mulai membuat html
     const listJadwal = document.getElementById("list-jadwal");
     const kota = document.getElementById("CITY");
     const prov = document.getElementById("PROV");
     

     kota.innerHTML = jadwal.lokasi;
     prov.innerHTML = jadwal.daerah;


     //looping
    list.forEach((el) => {
     const tr = document.createElement("tr");
     //biar tanggal dihari itu tebal
     if(el.date === now) {
          //ngasih class
          tr.classList.add("table-primary")
     }
     //tanggal
     const dd = document.createElement("td");
     dd.innerText = el.tanggal;

     //imsak
     const imsak = document.createElement("td");
     imsak.innerText = el.imsak;
     //subuh
     const subuh = document.createElement("td");
     subuh.innerText = el.subuh;
     //terbit
     const terbit = document.createElement("td");
     terbit.innerText = el.terbit;
     //dhuha
     const dhuha = document.createElement("td");
     dhuha.innerText = el.dhuha;
     //dzuhur
     const dzuhur = document.createElement("td");
     dzuhur.innerText = el.dzuhur;
     //ashar
     const ashar = document.createElement("td");
     ashar.innerText = el.ashar;
     //magrib
     const maghrib = document.createElement("td");
     maghrib.innerText = el.maghrib;
     //isya
     const isya = document.createElement("td");
     isya.innerText = el.isya;
     
     listJadwal.appendChild(tr);
     tr.appendChild(dd);
     tr.appendChild(imsak);
     tr.appendChild(subuh);
     tr.appendChild(terbit);
     tr.appendChild(dhuha);
     tr.appendChild(dzuhur);
     tr.appendChild(ashar);
     tr.appendChild(maghrib);
     tr.appendChild(isya);
});
});