window.onload = function() {
     getData();
}

function getData() {
     fetch('https://api.banghasan.com/quran/format/json/surat')
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
}

function displayData(data) {
     var resultDiv = document.getElementById('result');
     resultDiv.innerHTML = ' ';

     data.hasil.forEach(function(surat) {
          var suratDiv = document.createElement('div');
          suratDiv.classList.add('surah');
          suratDiv.className = 'kotak';

          var namaSurah = document.createElement('h2');
          namaSurah.className = 'nama-surah'
          namaSurah.textContent = surat.nama;

          var hr = document.createElement('hr');
          hr.className = 'hr'

          var asmaSurah = document.createElement('h3');
          asmaSurah.className = 'asma-surah'
          asmaSurah.textContent = surat.asma;

          var ayatSurah = document.createElement('h3');
          ayatSurah.className = 'ayat-surah'
          ayatSurah.textContent = surat.ayat;

          var typeSurah = document.createElement('h3');
          typeSurah.className = 'tipe-surah'
          typeSurah.textContent = surat.type;

          var artiSurah = document.createElement('h3');
          artiSurah.className = 'arti-surah'
          artiSurah.textContent = surat.arti;

          // var keteranganSurah = document.createElement('h3');
          // keteranganSurah.textContent = surat.keterangan;

          suratDiv.appendChild(namaSurah);
          suratDiv.appendChild(hr)
          suratDiv.appendChild(asmaSurah);
          suratDiv.appendChild(ayatSurah);
          suratDiv.appendChild(typeSurah);
          suratDiv.appendChild(artiSurah);
          
          resultDiv.appendChild(suratDiv);
          // suratDiv.appendChild(keteranganSurah);

          
     })
}
