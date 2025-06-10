//

const slideHome = document.getElementById("slide-home");
const cards = document.querySelectorAll(".card");

const slides = [
  {
    href: "testimonial-1.jpg",
    alt: "Happy Client",
    ptext: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat?",
  },
  {
    href: "testimonial-1.jpg",
    alt: "Happy Client",
    ptext: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat?",
  },
  {
    href: "testimonial-1.jpg",
    alt: "Happy Client",
    ptext: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat?",
  },
  {
    href: "testimonial-1.jpg",
    alt: "Happy Client",
    ptext: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat?",
  },
];

function closeAllCards() {
  cards.forEach((card) => card.classList.remove("open"));
}

cards[0].classList.add("open");v                                                                                                                                                                        

const slideshow = slides
  .map(({ alt, href, ptext }) => {
    return `
      <div class="card">
        <div class="image-container">
          <img src="${href}" alt="${alt}" />
        </div>
        <div class="text-box">
          <h2>Happy Client</h2>
          <p>${ptext}</p>
        </div>
      </div>
    `;
  })
  .join("");

slideHome.innerHTML= slideshow;


/* 
on hover of another  card others
the textbox width is 0px 
the text inside is display: none
on hover of the card
the textbox width is 300px
the text inside is display: block
then when theres no hover, the first one is always open
 */