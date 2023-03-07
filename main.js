const videos = [
  {
    title:
      "4K African Wildlife _ African Nature Showreel 2017 by Robert Hofmeyr",
    time: "3:12",
  },
  {
    title: "Super Trofeo [4K]",
    time: "4:25",
  },
  {
    title: "Transient - 4K, UHD, 1000FPS",
    time: "3:18",
  },
  {
    title: "4K Forest - Cinematic Forest - 4K Nature Video Ultra HD",
    time: "1.50",
  },
  {
    title: "4K Ultra HD _ SONY 4K UHD Demo_ Another World (Madagascar)",
    time: "3:11",
  },
];

const videoEl = document.querySelector("video");
const playlist = document.querySelector(".playlist");

function createElements() {
  videos.forEach((item) => {
    let playlistItem = document.createElement("div");
    playlistItem.setAttribute("data-title", `${item.title}`);
    playlistItem.classList = "playlist--item";
    playlistItem.innerHTML = `
        <img src="./images/${item.title}.jpg" alt="">
        <p>${
          item.title.length > 25 ? item.title.slice(0, 25) + "..." : item.title
        }</p>
        <span>${item.time}</span>
    `;
    playlist.appendChild(playlistItem);
    playlistItem.addEventListener("click", (e) => {
      changeVideo(playlistItem);
    });
  });
}

function changeVideo(item) {
  videoEl.src = `./videos/${item.dataset.title}.mp4`
  videoEl.play()
}

createElements();
