function openTool(type) {
  const popup = document.getElementById("popup");
  const content = document.getElementById("toolContent");
  const loader = document.getElementById("loader");

  // 🔊 صوت
  const sound = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");
  sound.volume = 0.4;
  sound.play();

  // 🔥 show loader
  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";
    popup.style.display = "flex";

    if(type === 'image') {
      content.innerHTML = `
        <iframe src="https://www.iloveimg.com/ar/remove-background"></iframe>
      `;
    }

    if(type === 'video') {
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



if(tool === "video-to-audio") {
  window.location.href = "https://user.hilltopads.com/publisher/history";
}
