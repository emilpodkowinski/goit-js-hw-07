import { galleryItems } from './gallery-items.js';
// Change code below this line

//  console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryItems.forEach((el) => {
  galleryEl.innerHTML += `<li> <a class="gallery__link" href="${el.oryginal}">
  <img class="gallery__image" src="${el.preview}" alt="${el.decription}" />
</a></li>`;
});
  

  var lightbox = $('.gallery li a').simpleLightbox({
    captionDelay: 250,
    captionsData: "alt", 
  });

