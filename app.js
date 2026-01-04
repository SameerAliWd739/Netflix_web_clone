//DOM ELEMENT
const faqItems = document.querySelectorAll(".faq");

//EVENT Listeners
for (let i = 0; i < faqItems.length; i++) {
  faqItems[i].addEventListener("click", function () {
    toggleFAQ(faqItems[i]);
  })
}

//Functions 
function toggleFAQ (faqEl) {
  const answer = getAnswerContainer(faqEl);

  //Make sure we have a paired answer for whatever answer container is being clicked
  if (!answer) {
    return;
  }

  //Toggle "open" the faq element
  if (faqEl.classList.contains("open")) {
    faqEl.classList.remove("open")
  } else {
    faqEl.classList.add("open");
  }
}

//Check if a question has an answer
function getAnswerContainer(faqEl) {
  const sibling = faqEl.nextElementSibling;

  if(!sibling || !sibling.classList.contains("faq-answer-container")) {
    return null;
  } else {
    return sibling;
  }
}



const movies = [
  {
    title: "One Piece",
    year: "1999",
    age: "13+",
    genre: "Adventure, Action, Fantasy",
    desc: "A young pirate sets sail with his crew to find the legendary treasure known as One Piece and become the Pirate King.",
    banner: "https://images7.alphacoders.com/788/thumb-1920-788699.jpg",
    video: "img/video/onepice.mp4"
  },
  {
    title: "NCIS",
    year: "2003",
    age: "13+",
    genre: "Crime, Drama, Thriller",
    desc: "A team of special agents investigates crimes involving the U.S. Navy and Marine Corps.",
    banner: "https://television-b26f.kxcdn.com/wp-content/uploads/2016/03/ncis-banner.jpg",
    video: "img/video/ncis.mp4"
  },
  {
    title: "Wednesday",
    year: "2022",
    age: "13+",
    genre: "Mystery, Thriller, Comedy",
    desc: "Wednesday Addams uncovers dark secrets while navigating life at Nevermore Academy.",
    banner:  "https://i0.wp.com/popvaulture.com/wp-content/uploads/2025/09/Wednesday-Season-2.png?fit=768%2C402&ssl=1",
    video: "img/video/video3.mp4"
  },
  {
    title: "Beauty in Black",
    year: "2024",
    age: "16+",
    genre: "Thriller, Drama",
    desc: "A suspenseful story exploring power, secrets, and identity beneath a glamorous surface.",
    banner: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/67d6665cd8fa79001d28ca10.jpg",
    video: "img/video/video4.mp4"
  },
  {
    title: "K-Pop Demon Hunters",
    year: "2025",
    age: "10+",
    genre: "Action, Fantasy, Music",
    desc: "A group of K-pop stars live double lives as demon hunters protecting the world from supernatural threats.",
    banner: "https://hype.my/wp-content/uploads/2025/06/KPop-Demon-Hunters-Banner-scaled.jpg",
    video: "img/video/video5.mp4"
  },
  {
    title: "Unknown Number",
    year: "2023",
    age: "16+",
    genre: "Thriller, Mystery",
    desc: "A tense thriller centered around a mysterious phone number linked to dangerous secrets.",
    banner: "https://wellsvillesun.com/wp-content/uploads/2025/09/images-1-2.jpeg",
    video: "img/video/video6.mp4"
  }
];

let currentVideo = "";

function openModal(movie) {
  document.getElementById("modalTitle").innerText = movie.title;
  document.getElementById("modalYear").innerText = movie.year;
  document.getElementById("modalAge").innerText = movie.age;
  document.getElementById("modalGenre").innerText = movie.genre;
  document.getElementById("modalDesc").innerText = movie.desc;
  document.getElementById("modalBanner").style.backgroundImage =
    `url(${movie.banner})`;

  currentVideo = movie.video;
  document.getElementById("movieModal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("movieModal").style.display = "none";
  document.body.style.overflow = "auto";
}

function playVideo() {
  window.open(`player.html?video=${currentVideo}`, "_blank");
}

/* Outside click */
document.getElementById("movieModal").addEventListener("click", e => {
  if (e.target.id === "movieModal") closeModal();
});

/* ESC key */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});