const txtElement = ['Freelancer', 'Web Developer', 'Graphic Designer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 500);

})();
// Mengambil elemen checkbox untuk toggle tema
const themeToggle = document.getElementById("theme-toggle");

// Menambahkan event listener saat tombol tema berubah
themeToggle.addEventListener("change", function () {
  // Cek apakah tombol sudah diaktifkan (mode gelap)
  if (this.checked) {
    // Tambahkan kelas "dark-mode" ke elemen body
    document.body.classList.add("dark-mode");
  } else {
    // Hapus kelas "dark-mode" dari elemen body
    document.body.classList.remove("dark-mode");
  }
});
