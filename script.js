/* Aurora Wildflowers catalog
   Edit products here when you want to change item names, prices or photos. */
const products = [
  {
    name: "Wedding & Memorial Flower Preservation",
    price: "From $120",
    category: ["flowers", "memorial"],
    tag: "Best seller",
    image: "assets/images/rose-hexagon-preservation-thumb.webp",
    alt: "White roses and greenery preserved in a hexagon resin block",
    description: "A custom resin block using natural flowers, greenery, pearls and optional names, dates or a short quote."
  },
  {
    name: "Large Hexagon Bouquet Keepsake",
    price: "From $150",
    category: ["flowers", "home"],
    tag: "Custom size",
    image: "assets/images/purple-hexagon-wedding-thumb.webp",
    alt: "Purple and white flowers preserved in a hexagon resin keepsake",
    description: "Beautiful for wedding bouquets, anniversaries and statement display pieces with pastel floral arrangements."
  },
  {
    name: "Arch Memorial Keepsake",
    price: "From $75",
    category: ["memorial", "flowers"],
    tag: "Meaningful gift",
    image: "assets/images/purple-arch-keepsake-thumb.webp",
    alt: "Arch-shaped resin keepsake with purple and white wildflowers",
    description: "A standing arch with natural flowers, pearls and custom lettering for remembrance, love or home blessings."
  },
  {
    name: "Photo Memory Heart",
    price: "From $65",
    category: ["memorial", "gifts"],
    tag: "Photo option",
    image: "assets/images/photo-heart-keepsake-thumb.webp",
    alt: "Heart-shaped resin photo keepsake with dried flowers",
    description: "A heart-shaped keepsake with a small photo, soft flowers, pearls and a custom message for family memories."
  },
  {
    name: "Ocean Table Coaster Set",
    price: "From $40 / set of 4",
    category: ["home", "gifts"],
    tag: "Coasters",
    image: "assets/images/ocean-coaster-set-thumb.webp",
    alt: "Ocean-inspired resin coasters with blue waves, shells and sand",
    description: "Beach-style coasters with shells, sand, pebble accents and soft blue resin waves."
  },
  {
    name: "Single Floral or Ocean Coaster",
    price: "From $12 each",
    category: ["home", "gifts"],
    tag: "Small gift",
    image: "assets/images/ocean-coaster-main-thumb.webp",
    alt: "Ocean resin coaster with shells and sand",
    description: "A sweet handmade coaster for desks, side tables, ring dishes or small gifts."
  },
  {
    name: "Gold Leaf Trinket Dish",
    price: "From $16",
    category: ["home", "gifts"],
    tag: "Pastel gold",
    image: "assets/images/gold-ring-dish-thumb.webp",
    alt: "Gold leaf resin ring dish and tray",
    description: "Soft pastel resin dish with gold flakes for jewelry, keys, candles or vanity décor."
  },
  {
    name: "Custom Scripture / Quote Tray",
    price: "From $25",
    category: ["home", "gifts"],
    tag: "Custom text",
    image: "assets/images/shepherd-trinket-tray-thumb.webp",
    alt: "Resin tray with custom scripture lettering",
    description: "A personalized tray with lettering, silhouettes, soft shimmer and your favourite short phrase."
  },
  {
    name: "Resin Keychains",
    price: "From $8 each",
    category: ["gifts"],
    tag: "Cute add-on",
    image: "assets/images/cat-keychains-bright-thumb.webp",
    alt: "Two cat-shaped resin keychains",
    description: "Lightweight keychains with glitter, tiny flowers, initials or cute shapes. Great for party gifts."
  },
  {
    name: "Baby Memory Keeper",
    price: "From $45",
    category: ["memorial", "gifts"],
    tag: "Keepsake",
    placeholder: "Baby\nMemory",
    description: "A tender resin piece for baby bracelets, tiny dried flowers, hospital tags, first curls or name/date details."
  },
  {
    name: "Resin Bookmarks",
    price: "From $10",
    category: ["gifts"],
    tag: "Reader gift",
    placeholder: "Bookmarks",
    description: "Pastel bookmarks with dried flowers, shimmer, initials or small gold details."
  },
  {
    name: "Resin Wall Clock",
    price: "From $70",
    category: ["home", "flowers"],
    tag: "Home décor",
    placeholder: "Wall\nClock",
    description: "A custom resin wall clock with pastel colour themes, floral accents and gold details."
  },
  {
    name: "Resin Shadow Box",
    price: "From $80",
    category: ["memorial", "flowers"],
    tag: "Display piece",
    placeholder: "Shadow\nBox",
    description: "A layered floral display for preserving special petals, cards, photos or memory items."
  }
];

const priceRows = [
  ["Keychains", "$8 each / 2 for $15", "small gifts, party favours, initials"],
  ["Bookmarks", "$10–$15", "reader gifts, teachers, stocking stuffers"],
  ["Single coaster / small dish", "$12–$18", "desk décor, jewelry, small gifts"],
  ["Coaster set of 4", "$40–$55", "housewarming, table décor"],
  ["Custom quote tray", "$25–$35", "Bible verses, names, short messages"],
  ["Baby memory keeper", "$45–$80", "baby tags, small keepsakes, dried flowers"],
  ["Photo memory heart", "$65–$110", "family photos, graduation, memorials"],
  ["Arch memorial keepsake", "$75–$130", "memorial flowers, love quotes, remembrance"],
  ["Small/medium flower block", "$110–$160", "wedding flowers, anniversary flowers"],
  ["Large bouquet preservation", "$150–$190", "larger hexagon, heart or custom mold"],
  ["Resin wall clock", "$70–$120", "home décor, gifts"],
  ["Resin shadow box", "$80–$150", "layered memory display"],
];

const grid = document.querySelector("#product-grid");
const template = document.querySelector("#product-card-template");
const quoteSelect = document.querySelector("#quote-product");
const quoteNote = document.querySelector("#quote-note");
const copyStatus = document.querySelector("#copy-status");

function renderProducts(filter = "all") {
  grid.innerHTML = "";
  const filtered = filter === "all" ? products : products.filter(product => product.category.includes(filter));

  filtered.forEach((product) => {
    const card = template.content.cloneNode(true);
    const article = card.querySelector("article");
    const imageWrap = card.querySelector(".product-image");
    const meta = card.querySelector(".product-meta");
    const title = card.querySelector("h3");
    const desc = card.querySelector("p");
    const price = card.querySelector("strong");
    const button = card.querySelector(".quote-button");

    if (product.image) {
      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.alt || product.name;
      img.loading = "lazy";
      imageWrap.appendChild(img);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "placeholder-art";
      placeholder.innerHTML = `<span>${(product.placeholder || product.name).replace(/\n/g, "<br>")}</span>`;
      imageWrap.appendChild(placeholder);
    }

    meta.innerHTML = `<span>${product.tag}</span>`;
    title.textContent = product.name;
    desc.textContent = product.description;
    price.textContent = product.price;
    button.addEventListener("click", () => selectQuote(product.name));
    article.dataset.category = product.category.join(" ");
    grid.appendChild(card);
  });

  observeReveals();
}

function renderPriceTable() {
  const tbody = document.querySelector("#price-table-body");
  tbody.innerHTML = priceRows.map(row => `
    <tr>
      <td>${row[0]}</td>
      <td>${row[1]}</td>
      <td>${row[2]}</td>
    </tr>
  `).join("");
}

function fillQuoteSelect() {
  quoteSelect.innerHTML = products.map(product => `<option value="${product.name}">${product.name} — ${product.price}</option>`).join("");
}

function selectQuote(productName) {
  quoteSelect.value = productName;
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth", block: "start" });
  quoteNote.focus({ preventScroll: true });
}

async function copyQuoteMessage() {
  const productName = quoteSelect.value;
  const product = products.find(item => item.name === productName);
  const note = quoteNote.value.trim();
  const message = `Hi Amenda, I would like a quote for ${productName} (${product ? product.price : "starting price"}).${note ? ` My idea: ${note}` : ""} Thank you.`;

  try {
    await navigator.clipboard.writeText(message);
    copyStatus.textContent = "Message copied. You can paste it into SMS or Facebook Messenger.";
  } catch (error) {
    copyStatus.textContent = message;
  }
}

function setupFilters() {
  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      renderProducts(button.dataset.filter);
    });
  });
}

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector("#nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

let observer;
function observeReveals() {
  const revealItems = document.querySelectorAll(".reveal:not(.visible)");
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach(item => item.classList.add("visible"));
    return;
  }
  if (!observer) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }
  revealItems.forEach(item => observer.observe(item));
}

function setupBackToTop() {
  document.querySelector(".back-to-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#year").textContent = new Date().getFullYear();
  renderProducts();
  renderPriceTable();
  fillQuoteSelect();
  setupFilters();
  setupMobileMenu();
  setupBackToTop();
  document.querySelector("#copy-quote").addEventListener("click", copyQuoteMessage);
  observeReveals();
});
