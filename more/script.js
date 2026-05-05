function openTool(type) {
  const popup = document.getElementById("popup");
  const content = document.getElementById("toolContent");
  const loader = document.getElementById("loader");

  // 🔊 صوت
  const sound = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");
  sound.volume = 0.4;
  sound.play();

  // 🔥 loader
  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";
    popup.style.display = "flex";

    content.innerHTML = "";

    // 🔥 FILE CONVERTER
    if (type === "file-converter") {
      localStorage.setItem("nextTool", "");
      
      // 👇 فتح في تبويب جديد بدل نفس الصفحة
      window.open("loading.html", "_blank");
      return;
    }

    // 🖼 IMAGE TOOL
    if (type === "image") {
      localStorage.setItem("nextTool", "https://www.iloveimg.com/ar/remove-background");

      // 👇 برضو تبويب جديد
      window.open("loading.html", "_blank");

      content.innerHTML = `
        <iframe src="https://www.iloveimg.com/ar/remove-background"></iframe>
      `;
    }

    // 🎥 VIDEO TOOL
    else if (type === "video") {
      localStorage.setItem("nextTool", "https://www.freeconvert.com/video-to-mp3");

      // 👇 تبويب جديد
      window.open("loading.html", "_blank");

      content.innerHTML = `
        <iframe src="https://www.freeconvert.com/video-to-mp3"></iframe>
      `;
    }

  }, 2000);
}

function closeTool() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("toolContent").innerHTML = "";
}









function loadFavorites() {
  const list = document.getElementById("favoritesList");
  list.innerHTML = "";

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.forEach((site, index) => {
    list.innerHTML += `
      <div class="favorite-card">
        <span class="delete-btn" onclick="deleteFavorite(${index})">❌</span>

        <img src="https://www.google.com/s2/favicons?domain=${site.url}" width="32">

        <a href="${site.url}" target="_blank">${site.name}</a>
      </div>
    `;
  });
}

function addFavorite() {
  const name = document.getElementById("siteName").value;
  const url = document.getElementById("siteURL").value;

  if (!name || !url) return;

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.push({ name, url });

  localStorage.setItem("favorites", JSON.stringify(favorites));

  document.getElementById("siteName").value = "";
  document.getElementById("siteURL").value = "";

  loadFavorites();
}

function deleteFavorite(index) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.splice(index, 1);

  localStorage.setItem("favorites", JSON.stringify(favorites));

  loadFavorites();
}

loadFavorites();