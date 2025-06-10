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

slideHome.innerHTML = slideshow;
