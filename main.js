const $ = (data) => document.querySelector(data);

const playPauseBtn = $(".play_pause");
const prevBtn = $(".prevBtn");
const nextBtn = $(".nextBtn");
const videoEl = $("video");
const playlist = $(".playlist");
const progressBar = $(".progressbar");
const progressBarControl = $(".progressbar_control");

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

let currentVideo = 0;
let lastVideo = videos.length - 1;

function createElements() {
  videos.forEach((item, index) => {
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
      currentVideo = index;
      changeVideo(index);
    });
  });
}




nextBtn.addEventListener("click", () => {
  if (currentVideo == lastVideo) {
    currentVideo = 0;
  } else {
    currentVideo++;
  }
  changeVideo(currentVideo);
});

prevBtn.addEventListener("click", () => {
  if (currentVideo == 0) {
    currentVideo = lastVideo;
  } else {
    currentVideo--;
  }
  changeVideo(currentVideo);
});

playPauseBtn.addEventListener("click", () => {
  if (videoEl.paused) {
    videoEl.play();
    playPauseBtn.innerHTML = "❚ ❚";
  } else {
    videoEl.pause();
    playPauseBtn.innerHTML = "►";
  }
});

videoEl.addEventListener("timeupdate", () => {
  const { currentTime, duration } = videoEl;
  let percent = (currentTime / duration) * 100;
  progressBar.style.width = percent + "%";
});

function changeVideo(index) {
  videoEl.src = `./videos/${videos[index].title}.mp4`;
  videoEl.play();
}

createElements();
