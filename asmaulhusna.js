window.onload = function() {
     getData();
}

function getData() {
     fetch('https://api.aladhan.com/v1/asmaAlHusna')
     //hasilnya itu ditaroh ke response
     .then(function(response) {
          //data yang udh kita buat itu tersimpan diresponse
          if (!response.ok) {
               throw new Error('gagal mengambil data');
          }
          return response.json();
     })
     //kalau misal response gagal maka tamppilkan error
     //return pengganti else
     .then(function(data) {
          displayData(data);
     })
     .catch(function(error){
          console.log("terjadi kesalahan", error);
     })
};

function displayData(data) {
     var resultDiv = document.getElementById('result');
     resultDiv.innerHTML = ' ';

     data.data.forEach(function(surat) {
          var suratDiv = document.createElement('div');
          suratDiv.classList.add('Asma');
          suratDiv.className = 'kotak';

          var namaAsma = document.createElement('h2');
          namaAsma.className = 'nama-surah'
          namaAsma.textContent = surat.name;

          var hr = document.createElement('hr');
          hr.className = 'hr'

          var translateAsma = document.createElement('h3');
          translateAsma.className = 'asma-surah'
          translateAsma.textContent = surat.transliteration;

          var nomorAsma = document.createElement('p');
          nomorAsma.className = 'ayat-surah'
          nomorAsma.textContent = surat.number;

          var artiAsma = document.createElement('h3');
          artiAsma.className = 'tipe-surah'
          artiAsma.textContent = surat.en.meaning;

          // var keteranganSurah = document.createElement('h3');
          // keteranganSurah.textContent = surat.keterangan;

          suratDiv.appendChild(namaAsma);
          suratDiv.appendChild(hr)
          suratDiv.appendChild(translateAsma);
          suratDiv.appendChild(nomorAsma);
          suratDiv.appendChild(artiAsma);
          
          resultDiv.appendChild(suratDiv);
          // suratDiv.appendChild(keteranganSurah);

          
     })
};



let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
 menuIcon.classList.toggle('bx-x')
 navbar.classList.toggle('active')
};

window.onscroll = () => {
 // let header = document.querySelector('header')

 menuIcon.classList.remove('bx-x')
 navbar.classList.remove('active')
};