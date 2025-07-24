const words = ["Anytime", "Anywhere"];
const rotatingContainer = document.getElementById("rotating-word");
let wordIndex = 0;

function animateWord(word) {
  const oldLetters = Array.from(rotatingContainer.children);

  // Tambahkan animasi keluar
  oldLetters.forEach((letter, i) => {
    letter.classList.remove("rotate-in");
    letter.classList.add("rotate-out");
    letter.style.animationDelay = `${i * 0.05}s`;
  });

  // Setelah animasi keluar selesai, ganti dengan huruf baru
  setTimeout(() => {
    rotatingContainer.innerHTML = "";

    [...word].forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.classList.add("rotate-in");
      span.style.animationDelay = `${i * 0.1}s`;
      rotatingContainer.appendChild(span);
    });
  }, oldLetters.length * 50 + 400); // waktu untuk keluar + buffer
}

// Tampilkan pertama kali
animateWord(words[wordIndex]);

// Ganti kata setiap 3 detik
setInterval(() => {
  wordIndex = (wordIndex + 1) % words.length;
  animateWord(words[wordIndex]);
}, 3000);
