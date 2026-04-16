function openTool(type) {
  const popup = document.getElementById("popup");
  const content = document.getElementById("toolContent");

  popup.style.display = "block";

  if(type === 'video') {
    content.innerHTML = `
      <h2>تحويل فيديو إلى صوت</h2>
      <input type="file" accept="video/*"><br><br>
      <button onclick="alert('هنا هتربطه بالسيرفر')">تحويل</button>
    `;
  }

  if(type === 'image') {
    content.innerHTML = `
      <h2>إزالة خلفية صورة</h2>
      <input type="file" accept="image/*"><br><br>
      <button onclick="alert('هنا API أو AI')">تنفيذ</button>
    `;
  }
}

function closeTool() {
  document.getElementById("popup").style.display = "none";
}