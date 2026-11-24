
/* ==========================
   ANIMASI GALAXY
========================== */

const starsContainer = document.getElementById("stars");

// Membuat 120 bintang
for (let i = 0; i < 120; i++) {

    const star = document.createElement("span");

    star.classList.add("star");

    // Posisi acak
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    // Ukuran bintang
    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    // Kecepatan animasi
    star.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

    // Waktu mulai animasi
    star.style.animationDelay =
        Math.random() * 3 + "s";

    // Memasukkan bintang
    starsContainer.appendChild(star);
}

// Pesan console
console.log("WELCOME TO DAME RIA SIAGIAN PORTFOLIO");
