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












let deferredPrompt;
const installBtn = document.getElementById("installBtn");

// لما المتصفح يسمح بالتثبيت
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // إظهار الزر
  installBtn.style.display = "block";
});

// لما المستخدم يضغط على الزر
installBtn.addEventListener("click", async () => {
  installBtn.style.display = "none";

  deferredPrompt.prompt(); // يظهر نافذة التثبيت

  const choiceResult = await deferredPrompt.userChoice;

  deferredPrompt = null;
});