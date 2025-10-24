// function updateTime() {
//   const timeElement = document.getElementById("time");
//   timeElement.textContent =Time.now();
// }

// updateTime();

// setInterval(updateTime, 1000);

function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const readable = now.toLocaleString();
  const ms = now.getTime();
  timeElement.textContent = `Current Time: ${readable} (${ms})`;
}

updateTime();
setInterval(updateTime, 1000);
