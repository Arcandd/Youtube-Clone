function createVideoTemplate(
  thumbnail,
  duration,
  profile,
  title,
  author,
  stats
) {
  return `
    <div class="video-preview">
      <div class="thumbnail-section">
        <img class="thumbnail" src="${thumbnail}" alt="" />
        <div class="video-duration">${duration}</div>
      </div>
      <div class="video-info-grid">
        <div class="video-profile">
          <img src="${profile}" alt="" class="profile-picture" />
        </div>
        <div class="video-desc">
          <p class="video-title">${title}</p>
          <p class="video-author">${author}</p>
          <p class="video-stats">${stats}</p>
        </div>
      </div>
    </div>
    `;
}

const videos = [
  {
    thumbnail: "thumbnails/f1thumbnail.webp",
    duration: "7.03",
    profile: "channel-pictures/f1profile.jpg",
    title: "Sprint Qualifying Highlights | 2024 United States Grand Prix",
    author: "FORMULA 1 ✓",
    stats: "1.6M views · 11 hours ago",
  },

  {
    thumbnail: "thumbnails/tnbeethumbnail.webp",
    duration: "4.20",
    profile: "channel-pictures/tnbeeprofile.jpg",
    title:
      "Burnice Theme Music ft. Hu Tao's VA @Brianna-Knickerbocker - Burning Desires (tnbee mix) | ZZZ",
    author: "tnbee ♪",
    stats: "52K views · 12 hours ago",
  },

  {
    thumbnail: "thumbnails/leinthumbnail.webp",
    duration: "16.13",
    profile: "channel-pictures/leinprofile.jpg",
    title:
      "Kombinasi RPG Open World &amp; Dress-Up Game Yang Unik Parah! - Infinity Nikki",
    author: "Lein Xceed ✓",
    stats: "3.5K views · 1 hour ago",
  },

  {
    thumbnail: "thumbnails/genshinthumbnail.webp",
    duration: "3.40",
    profile: "channel-pictures/hoyomixprofile.jpg",
    title:
      "Passing Memories (feat. Faouzia) (Genshin Impact's 4Th Anniversary English Theme Song)",
    author: "HOYO-MIX ♪",
    stats: "236K views · 3 weeks ago",
  },

  {
    thumbnail: "thumbnails/ssdthumbnail.webp",
    duration: "12.58",
    profile: "channel-pictures/ssdprofile.jpg",
    title: "Backend web development - a complete overview",
    author: "SuperSimpleDev ✓",
    stats: "1.8M views · 2 years ago",
  },

  {
    thumbnail: "thumbnails/pznthumbnail.webp",
    duration: "16.30",
    profile: "channel-pictures/pznprofile.jpg",
    title: "API GATEWAY #SoftwareArchitecture 5",
    author: "Programmer Zaman Now ✓",
    stats: "26K views · 5 years ago",
  },

  {
    thumbnail: "thumbnails/tiothumbnail.webp",
    duration: "4.01",
    profile: "channel-pictures/tioprofile.jpg",
    title: "三月のパンタシア  -『街路、ライトの灯りだけ』Guitar Cover",
    author: "tio",
    stats: "274 views · 3 months ago",
  },

  {
    thumbnail: "thumbnails/starrailthumbnail.webp",
    duration: "2.08",
    profile: "channel-pictures/starrailprofile.jpg",
    title: "Trailer Karakter Rappa: “No Dazzle, No Break” | Honkai: Star Rail",
    author: "Honkai: Star Rail ✓",
    stats: "308K views · 5 hours ago",
  },

  {
    thumbnail: "thumbnails/gronggrongthumbnail.webp",
    duration: "29.39",
    profile: "channel-pictures/gronggrongprofile.jpg",
    title:
      "Subnautica Beaten in under 29 minutes for the FIRST time - Any% World Record (28:37 RTA)",
    author: "GrongGrong",
    stats: "1.9M views · 1 year ago",
  },

  {
    thumbnail: "thumbnails/kantanthumbnail.webp",
    duration: "5.28",
    profile: "channel-pictures/kantanprofile.jpg",
    title: "The 3 Laws of Writing Readable Code",
    author: "Kantan Coding",
    stats: "643K views · 4 months ago",
  },
];

const videoGrid = document.getElementsByClassName("video-grid")[0];
videos.forEach((video) => {
  videoGrid.innerHTML += createVideoTemplate(
    video.thumbnail,
    video.duration,
    video.profile,
    video.title,
    video.author,
    video.stats
  );
});
