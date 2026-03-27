const story = document.getElementById("story");
const choiceRow = document.getElementById("choice-row");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const audio = document.getElementById("song");
const status = document.getElementById("status");
const stars = document.getElementById("stars");

const chapters = [
  {
    id: "tori",
    label: "",
    title: "Tori",
    intro: "",
    memories: [
      {
        title: "Llevele llevele",
        image: "images/tori.jpeg",
        alt: "Llevele llevele",
        caption: "Vendiendo todas mis tiliches ahi poco a poco, a ti te hago un descuentico que dices ? ;) por cierto, reconoces la cancion?"
      }
    ]
  },
  {
    id: "micra",
    label: "",
    title: "Micra",
    intro: "",
    memories: [
      {
        title: "Micra I",
        image: "images/micra_1.png",
        alt: "Micra memory one",
        caption: "Con este canijo si siento feo venderlo, ya tengo varias ofertas, pero  me estoy esperando porque queria platicarlo contigo."
      },
      {
        title: "Micra II",
        image: "images/micra_2.png",
        alt: "Micra memory two",
        caption: "Hasta en mis clases le hago promocion. Veelo ahi tan bonito! Neto se puuede dar un topon  con un tesla y lo que sea! Ve ese rojo cherry tomato! Alto, alto nuestro micrita"
      }
    ]
  },
  {
    id: "pablito",
    label: "",
    title: "Depa",
    intro: "",
    memories: [
      {
        title: "Tratando de rentarselo completo a Pablito",
        image: "images/pablito_1.png",
        alt: "Pablito memory one",
        caption: "Siempre pensé que este depa era el lugar más bonito que te podía ofrecer en este momento, al menos por unas semanas, o meses. Pero bueno, para tratar de romper con la fragmentacion de mi vida, estoy tratando de rentarlo todo, a Pablito e Irene."
      },
      {
        title: "En espera",
        image: "images/pablito_2.png",
        alt: "Pablito memory two",
        caption: "Y sí, ya vinieron a verlo y les gustó, pero aun no me confirman los loquillos. De hecho sentí feo porque te quería hacer un mini estudio para que estudiaras para la barra"
      }
    ]
  },
  {
    id: "visa_application",
    label: "",
    title: "Visa Application",
    intro: "",
    memories: [
      {
        title: "Visa",
        image: "images/visa_application_1.png",
        alt: "Visa application memory one",
        caption: "Como verás salgo muy guapete en la foto no?"
      },
      {
        title: "Visa II",
        image: "images/visa_application_2.png",
        alt: "Visa application memory two",
        caption: "Mi entrevista es el siguiente martes, me voy ir de saquito y toda la cosa"
      }
    ]
  },
  {
    id: "renuncia",
    label: "",
    title: "Renuncia",
    intro: "",
    memories: [
      {
        title: "",
        image: "images/renuncia_1.png",
        alt: "Renuncia memory one",
        caption: "Hace 20 anhos"
      },
      {
        title: "",
        image: "images/renuncia_2.png",
        alt: "Renuncia memory two",
        caption: "y 20 anhos despues 1/2"
      },
      {
        title: "",
        image: "images/renuncia_3.png",
        alt: "Renuncia memory three",
        caption: "y 20 anhos despues 2/2"
      },
      {
        title: "",
        image: "images/renuncia_4.png",
        alt: "Renuncia memory four",
        caption: "Moi moi Profe"
      }
    ]
  },
  {
    id: "bitwards",
    label: "",
    title: "Next",
    intro: "",
    memories: [
      {
        title: "Por aqui y por alla",
        image: "images/bitwards.png",
        alt: "Bitwards",
        caption: "No me contestaron, pero bueno, le echaria muchas ganas. Te puedo poner desde un banho, una lampara, algo sé de robotica, informatic industrial,  y puedo correr un centro de datos con aplicaciones web distribuidas. Por cierto, si sabes que no me dedico a hacer paginas web cierto? :P "
      }
    ]
  }
];

function renderStory() {
  const chaptersMarkup = chapters.map((chapter) => {
    const memoriesMarkup = chapter.memories.map((memory) => `
      <article class="memory">
        <img class="memory__image" src="${memory.image}" alt="${memory.alt}">
        <div class="memory__body">
          <p class="memory__title">${memory.title}</p>
          <p class="memory__caption">${memory.caption}</p>
        </div>
      </article>
    `).join("");

    return `
      <section class="chapter" id="${chapter.id}">
        <div class="chapter__header">
          <p class="chapter__index">${chapter.label}</p>
          <h2 class="chapter__title">${chapter.title}</h2>
          <p class="chapter__intro">${chapter.intro}</p>
        </div>
        <div class="chapter__memories">
          ${memoriesMarkup}
        </div>
      </section>
    `;
  }).join("");

  const finalCardMarkup = `
    <section class="final-question">
      <div class="final-question__card">
        <p class="final-question__eyebrow">One Last Question</p>
        <h2 class="final-question__title">Do you want to know.... what it is?</h2>
        <div class="final-question__text">
          <p>This is your last chance. After this, there is no turning back.</p>
          <p>You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe.</p>
          <p>You take the red pill - you stay in Wonderland, and I show you how deep the rabbit hole goes.</p>
        </div>
        <div class="pill-row">
          <button id="red-pill" class="pill-button pill-button--red" type="button" aria-label="Red pill">
            <span class="pill-button__visual" aria-hidden="true">
              <img class="pill-image" src="images/red.jpg" alt="" decoding="async">
            </span>
          </button>
          <button id="blue-pill" class="pill-button pill-button--blue" type="button" aria-label="Blue pill">
            <span class="pill-button__visual" aria-hidden="true">
              <img class="pill-image" src="images/blue.jpg" alt="" decoding="async">
            </span>
          </button>
        </div>
      </div>
    </section>
  `;

  story.innerHTML = `${chaptersMarkup}${finalCardMarkup}`;
}

function setupPillActions() {
  const redPillButton = document.getElementById("red-pill");
  const bluePillButton = document.getElementById("blue-pill");

  if (!redPillButton || !bluePillButton) {
    return;
  }

  redPillButton.addEventListener("click", () => {
    openPillDestination("https://www.youtube.com/watch?v=7tuWYsB-xKk");
  });

  bluePillButton.addEventListener("click", () => {
    openPillDestination("https://www.nytimes.com/");
  });
}

function openPillDestination(url) {
  audio.pause();
  audio.currentTime = 0;
  const newTab = window.open(url, "_blank", "noopener");

  if (!newTab) {
    setStatus("Popup was blocked. Allow popups for this page and try again.");
  }
}

function setStatus(message) {
  if (!status) {
    return;
  }

  status.textContent = message;
}

function setButtonState(isPlaying) {
  yesButton.classList.toggle("is-playing", isPlaying);
  yesButton.textContent = isPlaying ? "Pausar música" : "Sí";
}

function revealStory() {
  story.classList.remove("story--hidden");
  document.body.classList.add("story-visible");
}

function scrollToFirstImage() {
  const firstImage = story.querySelector(".memory__image");

  if (!firstImage) {
    window.scrollTo({ top: story.offsetTop, behavior: "smooth" });
    return;
  }

  firstImage.scrollIntoView({ behavior: "smooth", block: "start" });
}

function createStars() {
  if (stars.childElementCount > 0) {
    return;
  }

  const totalStars = 56;

  for (let index = 0; index < totalStars; index += 1) {
    const star = document.createElement("span");
    const size = 1.4 + Math.random() * 3.2;
    const twinkleDuration = 3.5 + Math.random() * 5;
    const driftDuration = 12 + Math.random() * 14;
    const roll = Math.random();

    if (roll > 0.84) {
      star.className = "star star--bright";
    } else if (roll > 0.58) {
      star.className = "star star--dim";
    } else {
      star.className = "star";
    }
    star.style.setProperty("--size", `${size.toFixed(2)}px`);
    star.style.setProperty("--top", `${(Math.random() * 100).toFixed(2)}%`);
    star.style.setProperty("--left", `${(Math.random() * 100).toFixed(2)}%`);
    star.style.setProperty("--delay", `${(-Math.random() * 8).toFixed(2)}s`);
    star.style.setProperty("--twinkle-duration", `${twinkleDuration.toFixed(2)}s`);
    star.style.setProperty("--drift-duration", `${driftDuration.toFixed(2)}s`);
    star.style.setProperty("--drift-x", `${(Math.random() * 16 - 8).toFixed(2)}px`);
    star.style.setProperty("--drift-y", `${(Math.random() * 20 - 10).toFixed(2)}px`);
    stars.appendChild(star);
  }
}

function placeNoButton(left, top) {
  noButton.style.left = `${left}px`;
  noButton.style.top = `${top}px`;
}

function resetNoButtonPosition() {
  const rowRect = choiceRow.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();
  const top = Math.max((rowRect.height - buttonRect.height) / 2, 0);
  const left = 0;
  placeNoButton(left, top);
}

function moveNoButtonAway(clientX, clientY) {
  const rowRect = choiceRow.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();
  const currentLeft = buttonRect.left - rowRect.left;
  const currentTop = buttonRect.top - rowRect.top;
  const buttonCenterX = currentLeft + buttonRect.width / 2;
  const buttonCenterY = currentTop + buttonRect.height / 2;
  const dx = buttonCenterX - (clientX - rowRect.left);
  const dy = buttonCenterY - (clientY - rowRect.top);
  const distance = Math.hypot(dx, dy);

  if (distance > 130) {
    return;
  }

  const safeWidth = Math.max(rowRect.width - buttonRect.width, 0);
  const safeHeight = Math.max(rowRect.height - buttonRect.height, 0);
  const push = Math.max(38, 150 - distance);
  const scale = distance === 0 ? 1 : push / distance;
  let nextLeft = currentLeft + dx * scale;
  let nextTop = currentTop + dy * scale;

  if (distance < 36 || (Math.abs(dx) < 10 && Math.abs(dy) < 10)) {
    nextLeft = Math.random() * safeWidth;
    nextTop = Math.random() * safeHeight;
  }

  nextLeft = Math.min(Math.max(nextLeft, 0), safeWidth);
  nextTop = Math.min(Math.max(nextTop, 0), safeHeight);

  placeNoButton(nextLeft, nextTop);
}

choiceRow.addEventListener("mousemove", (event) => {
  moveNoButtonAway(event.clientX, event.clientY);
});

noButton.addEventListener("mouseenter", (event) => {
  moveNoButtonAway(event.clientX, event.clientY);
});

noButton.addEventListener("touchstart", (event) => {
  const touch = event.touches[0];
  if (!touch) {
    return;
  }
  event.preventDefault();
  moveNoButtonAway(touch.clientX, touch.clientY);
}, { passive: false });

window.addEventListener("resize", resetNoButtonPosition);

yesButton.addEventListener("click", async () => {
  if (!audio.currentSrc) {
    setStatus("Missing audio/song.mp3. Add the song file to the audio folder.");
    return;
  }

  if (audio.paused) {
    try {
      await audio.play();
      createStars();
      revealStory();
      setButtonState(true);
      setStatus("Music is playing. Scroll down.");
      requestAnimationFrame(() => {
        scrollToFirstImage();
      });
    } catch (error) {
      setStatus("Playback was blocked. Press Start again.");
    }
    return;
  }

  audio.pause();
});

audio.addEventListener("pause", () => {
  if (audio.ended) {
    setStatus("The song ended. Press Start to play it again.");
  } else {
    setStatus("Music paused.");
  }
  setButtonState(false);
});

audio.addEventListener("ended", () => {
  setButtonState(false);
  setStatus("The song ended. Press Start to play it again.");
});

audio.addEventListener("error", () => {
  setButtonState(false);
  setStatus("Could not load audio/song.mp3. Check the file name and path.");
});

renderStory();
setupPillActions();
resetNoButtonPosition();
