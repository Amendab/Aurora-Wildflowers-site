const products = [
  {
    id:'sea-keychains', category:'Key Chains', title:'Sea Themed Key Chain', price:'$8.00', oldPrice:'$10.00',
    images:['assets/sea-keychain-1.jpg','assets/sea-keychain-2.jpg'],
    description:[
      'Handcrafted resin keychains made to capture memories in a small, stylish keepsake you can carry everywhere. Each piece is carefully designed and customized to reflect your personal story, style, or special moment.',
      '❤️ Can be designed with preserved flowers, petals, charms, sea items, glitter, photos, or meaningful tiny items inside crystal-clear resin to create a unique accessory just for you.',
      '❤️ Perfect for everyday use or as thoughtful gifts, combining both style and function.',
      '🌼 Available in different shapes: Letter shape, Cross Shape, Round, Square, Heart,',
      '🌼 Customization options available and these Add-ons such as photos, names, dates, or short wordings are available (extra charges apply as listed separately in the catalogue).',
      '🌼 Each piece is handmade, so slight variations may occur, adding to its uniqueness.'
    ]
  },
  {
    id:'pet-keychains', category:'Pet Keepsakes', title:'Personalized Pet Keychains 🔑', price:'$15.00', oldPrice:'$18.00',
    images:['assets/pet-keychain-coming.jpg','assets/pet-keychain-cats.jpg'],
    description:['Custom resin keychains featuring your pet’s photo and name.','❤️ A small and meaningful keepsake that allows you to carry your pet’s memory wherever you go.','🌼 Can be customized with photos, names, colours, flowers, glitter, charms, or themed designs.','🌼 Available in different shapes, including circles, hearts, bones, and paw prints.','🌼 Perfect as a personal keepsake or thoughtful gift.']
  },
  {
    id:'paw-keepsakes', category:'Pet Keepsakes', title:'Paw-Shaped Pet Keepsakes 🐾', price:'$90.00', oldPrice:'$95.00',
    images:['assets/paw-keepsakes.jpg'],
    description:['Personalized paw-shaped resin keepsakes designed to hold meaningful memories of your pet.','❤️ Can include pet hair, fur, a photo, name, dates, flowers, or special wording.','🌼 Optional lighting can be added to create a warm display piece.','🌼 Colours, decorations, and layout can be customized.','🌼 A thoughtful keepsake for remembering a beloved pet.']
  },
  {
    id:'pet-memory-blocks', category:'Pet Keepsakes', title:'Pet Memory Blocks 🐾', price:'$100.00', oldPrice:'$120.00',
    images:['assets/pet-memory-block.jpg'],
    description:['Elegant resin keepsake blocks created to preserve special memories of your beloved pet.','❤️ Can include pet hair, fur, flowers, names, dates, paw prints, or meaningful wording.','🌼 Can be customized in Heart Shaped, Rectangular shaped, Arch Shaped or Hexagonal shape.','🌼 The preserved hair can be arranged in a heart or another preferred shape.','🌼 Can be customized with dried flowers, glitter, gold flakes, colours, and personal messages.','🌼 Perfect for shelf or desk display.']
  },
  {
    id:'custom-coaster', category:'Coasters', title:'Customized Coaster designs', price:'$30.00', oldPrice:'$40.00',
    images:['assets/custom-coaster.jpg'],
    description:['Add a touch of beauty and personality to your space with handmade resin coasters.','❤️ Designed with care using dried flowers, sea-inspired elements, or simple glitter finishes, each coaster is unique and one of a kind.','❤️ Perfect for everyday use or as thoughtful gifts, combining both style and function.','🌼 Available in different shapes: Round, Square, Heart, Irregular, and Leaf designs.','🌼 Customization options available (photos, names, dates, or short messages) and prices will be vary based on the design','🌼 Add-ons such as photos and wordings are available (extra charges apply as listed separately in the catalogue).','🌼 Each piece is handmade, so slight variations may occur, adding to its uniqueness.','🌼 Orders are carefully packed and delivered safely via courier service.']
  },
  {
    id:'glitter-coaster', category:'Coasters', title:'Glitter Coaster', price:'$20.00', oldPrice:'$30.00',
    images:['assets/glitter-coaster-1.jpg','assets/glitter-coaster-2.jpg'],
    description:['Add a touch of beauty and personality to your space with handmade resin coasters.','❤️ Designed with care using dried flowers, sea-inspired elements, or simple glitter finishes, each coaster is unique and one of a kind.','❤️ Perfect for everyday use or as thoughtful gifts, combining both style and function.','🌼 Available in different shapes: Round, Square, Heart, Irregular, and Leaf designs.','🌼 Customization options available (photos, names, dates, or short messages).','🌼 Add-ons such as photos and wordings are available (extra charges apply as listed separately in the catalogue).','🌼 Each piece is handmade, so slight variations may occur, adding to its uniqueness.','🌼 Orders are carefully packed and delivered safely via courier service.']
  },
  {
    id:'sea-coaster', category:'Coasters', title:'Sea-Themed Coaster', price:'$30.00', oldPrice:'$40.00',
    images:['assets/sea-coaster-1.jpg','assets/sea-coaster-2.jpg'],
    description:['Add a touch of beauty and personality to your space with handmade resin coasters.','❤️ Designed with care using dried flowers, sea-inspired elements, or simple glitter finishes, each coaster is unique and one of a kind.','❤️ Perfect for everyday use or as thoughtful gifts, combining both style and function.','🌼 Available in different shapes: Round, Square, Heart, Irregular, and Leaf designs.','🌼 Customization options available (photos, names, dates, or short messages).','🌼 Add-ons such as photos and wordings are available (extra charges apply as listed separately in the catalogue).','🌼 Each piece is handmade, so slight variations may occur, adding to its uniqueness.','🌼 Orders are carefully packed and delivered safely via courier service.']
  },
  {
    id:'dried-flower-coaster', category:'Coasters', title:'Dried Flower Coaster xxx', price:'$20.00', oldPrice:'$30.00',
    images:['assets/photo-coming-soon.jpg'],
    description:['Add a touch of beauty and personality to your space with handmade resin coasters.','❤️ Designed with care using dried flowers, sea-inspired elements, or simple glitter finishes, each coaster is unique and one of a kind.','❤️ Perfect for everyday use or as thoughtful gifts, combining both style and function.','🌼 Available in different shapes: Round, Square, Heart, Irregular, and Leaf designs.','🌼 Customization options available (photos, names, dates, or short messages).','🌼 Add-ons such as photos and wordings are available (extra charges apply as listed separately in the catalogue).','🌼 Each piece is handmade, so slight variations may occur, adding to its uniqueness.','🌼 Orders are carefully packed and delivered safely via courier service.']
  },
  {
    id:'baby-memory-l', category:'Baby Memory Keeper', title:'Baby Memory Keeper L', price:'$130.00', oldPrice:'$150.00', images:['assets/baby-memory.jpg'],
    description:['Preserve your baby’s precious early memories in a beautiful and lasting way.','❤️ Special items such as hospital bands, Umbilical Ornament, first hair, baby photos, Name, Date, Weight & Time, or small keepsakes can be carefully preserved in resin. Each piece is created to capture those once-in-a-lifetime moments and turn them into a timeless memory.','❤️ Every creation is unique and designed with love, making it a meaningful keepsake for you or a thoughtful gift for loved ones.','🌼 Available in different in different shapes: Round, & Heart','🌼 Custom designs can be created based on your preferences.','🌼 Add-ons such as photos, wordings, and other elements are available (extra charges apply as listed separately in the catalogue).','🌼 Flowers and items must be provided in good condition for the best results.','🌼 As each piece is handmade, only a limited number of orders are accepted.','🌼 Orders are carefully packed and delivered safely via courier service.']
  },
  {
    id:'baby-memory-s', category:'Baby Memory Keeper', title:'Baby Memory Keeper S', price:'$100.00', oldPrice:'$130.00', images:['assets/baby-memory.jpg'],
    description:['Preserve your baby’s precious early memories in a beautiful and lasting way.','❤️ Special items such as hospital bands, Umbilical Ornament, first hair, baby photos, Name, Date, Weight & Time, or small keepsakes can be carefully preserved in resin. Each piece is created to capture those once-in-a-lifetime moments and turn them into a timeless memory.','❤️ Every creation is unique and designed with love, making it a meaningful keepsake for you or a thoughtful gift for loved ones.','🌼 Available in different shapes: Round, Square, Heart, and Irregular','🌼 Custom designs can be created based on your preferences.','🌼 Add-ons such as photos, wordings, and other elements are available (extra charges apply as listed separately in the catalogue).','🌼 Flowers and items must be provided in good condition for the best results.','🌼 As each piece is handmade, only a limited number of orders are accepted.','🌼 Orders are carefully packed and delivered safely via courier service.']
  },
  {
    id:'shadow-box', category:'Other Customized Items', title:'Resin Shadow Boxes (Names / Dates / Memories)', price:'$38.99', oldPrice:'$40.00', images:['assets/shadow-box.jpg'],
    description:['Beautiful layered resin shadow boxes designed to preserve memories in a deeper, dimensional way.','❤️ These pieces are perfect for capturing important milestones, names, dates, or meaningful moments in a visually striking display.','🌼 Can include flowers, photos, initials, wedding details, baby memories, or memorial elements.','🌼 Fully customizable with names, dates, and wording inside the design.','🌼 Suitable for wall hanging or shelf display.','🌼 Each shadow box is handcrafted, making every piece truly unique and personal.']
  },
  {
    id:'resin-cross', category:'Other Customized Items', title:'Resin Cross', price:'$28.00', oldPrice:'$30.00', images:['assets/resin-cross.jpg'],
    description:['Faith-inspired resin crosses designed to hold spiritual meaning and personal remembrance.','❤️ These crosses can be created as a symbol of faith, a memorial for a loved one, or a meaningful gift for special occasions such as baptisms, confirmations, or remembrance days. Each piece is carefully handcrafted to reflect peace, love, and remembrance.','🌼 Available in 3 unique designs with options for subtle floral embedding, glitter accents, or plain elegant finishes.','🌼 Can include dried flowers, names, dates, or small meaningful elements inside the resin.','🌼 Custom colour themes available upon request.']
  },
  {
    id:'bookmarks', category:'Other Customized Items', title:'Resin Bookmarks 🔖', price:'$10.00', oldPrice:'$12.00', images:['assets/bookmarks.jpg'],
    description:['Personalized resin bookmarks designed to make reading more special and memorable.','❤️ Perfect for book lovers, students, or as thoughtful gifts, each bookmark carries a touch of personality and creativity.','🌼 Can be customized with dried flowers, names, quotes, glitter, or themed designs.','🌼 Lightweight, durable, and smooth finish for easy use in books.','🌼 Ideal for gifting on birthdays, graduations, or special occasions.']
  },
  {
    id:'wall-clock', category:'Other Customized Items', title:'Resin Wall Clocks 🕰️', price:'$68.00', oldPrice:'$70.00', images:['assets/wall-clock.jpg'],
    description:['Elegant resin clocks that combine functionality with personal memory preservation.','❤️ Each clock is designed to be both a useful timepiece and a meaningful decorative item, making it perfect for home decor or gifting.','🌼 Can be customized with Aurora Lights themed, Sea themed, flowers, photos, glitter, or special wording inside the Clock.','🌼 Each clock is uniquely handmade, ensuring no two designs are ever the same.']
  }
];

const grid=document.querySelector('#productGrid');
const filters=document.querySelector('#filters');
const modal=document.querySelector('#productModal');
const categories=['All',...new Set(products.map(p=>p.category))];
let active='All';

function renderFilters(){filters.innerHTML=categories.map(c=>`<button class="filter-btn ${c===active?'active':''}" data-category="${c}">${c}</button>`).join('');}
function renderProducts(){const list=active==='All'?products:products.filter(p=>p.category===active);grid.innerHTML=list.map(p=>`<article class="product-card" tabindex="0" data-id="${p.id}"><img class="card-image" src="${p.images[0]}" alt="${p.title}" loading="lazy"><div class="card-body"><p class="card-category">${p.category}</p><h3 class="card-title">${p.title}</h3><div class="price-row"><strong>${p.price}</strong>${p.oldPrice?`<del>${p.oldPrice}</del>`:''}</div></div></article>`).join('');}
function openProduct(id){const p=products.find(x=>x.id===id);if(!p)return;document.querySelector('#modalCategory').textContent=p.category;document.querySelector('#modalTitle').textContent=p.title;document.querySelector('#modalPrice').textContent=p.price;document.querySelector('#modalOldPrice').textContent=p.oldPrice||'';const main=document.querySelector('#modalImage');main.src=p.images[0];main.alt=p.title;document.querySelector('#modalDescription').innerHTML=p.description.map((x,i)=>`<p class="${i?'bullet':''}">${x.replace(/^[❤️🌼]\s*/, '')}</p>`).join('');document.querySelector('#modalThumbs').innerHTML=p.images.map((img,i)=>`<button class="${i===0?'active':''}" data-img="${img}"><img src="${img}" alt="${p.title} image ${i+1}"></button>`).join('');const msg=encodeURIComponent(`Hi, I would like to order: ${p.title} (${p.price}).`);document.querySelector('#modalWhatsApp').href=`https://wa.me/16728339631?text=${msg}`;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');}
filters.addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;active=b.dataset.category;renderFilters();renderProducts();});
grid.addEventListener('click',e=>{const card=e.target.closest('[data-id]');if(card)openProduct(card.dataset.id)});
grid.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-id]'))openProduct(e.target.dataset.id)});
modal.addEventListener('click',e=>{if(e.target.closest('[data-close]'))closeModal();const thumb=e.target.closest('[data-img]');if(thumb){document.querySelector('#modalImage').src=thumb.dataset.img;document.querySelectorAll('.thumbs button').forEach(b=>b.classList.toggle('active',b===thumb));}});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open))});nav.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')});
renderFilters();renderProducts();
