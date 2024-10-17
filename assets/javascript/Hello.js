window.onscroll = function() {scrollFunction()};
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-70px";
  }
}
  // Saat halaman dimuat, kunci scroll
  document.body.classList.add('lock-scroll');

  function openInvitation() {
    const cover = document.getElementById('section-0');
    const content = document.getElementById('quotes');

    // Hapus atau sembunyikan elemen #section-0 setelah dibuka
    cover.classList.add('slide-up');

    setTimeout(() => {
      cover.style.display = 'none'; // Bisa juga menggunakan remove() untuk menghapus elemen sepenuhnya
      document.body.classList.remove('lock-scroll'); // Aktifkan scroll pada body
      window.location.hash = '#quotes'; // Arahkan ke quotes
    }, 500); // Sesuaikan durasi transisi
  }

function playAudio() {
  const audio = document.getElementById("player");
  audio.play();
}

function toggleMute() {
  const audio = document.getElementById("player");
  const muteButton = document.getElementById("mute-button");

  if (audio.muted) {
    audio.muted = false;
    muteButton.textContent = "Mute";
  } else {
    audio.muted = true;
    muteButton.textContent = "Unmute";
  }
}

//Check box
function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const giftForm = document.getElementById('gift-form');
  const messageForm = document.getElementById('message-form');
  
  giftForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Hadiah telah dikirim!');
      giftForm.reset();
  });

  messageForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Pesan untuk pengantin telah dikirim!');
      messageForm.reset();
  });
});
//copy
function myFunction() {
  var copyText = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999); 

 
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}


