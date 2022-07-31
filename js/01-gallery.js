import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeryBlock = document.querySelector('.gallery');



const galeryMarkup = galleryItems.map((item) => {
   return `<div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
}).join(' ');

galeryBlock.innerHTML = galeryMarkup;



function bigImage(event) {
   event.preventDefault()

   if (event.target === event.currentTarget) {
      return
   };

   const originalImg = event.target.dataset.source;

   const instance = basicLightbox.create(`<img src="${originalImg}" width="100%" height="100%">`)



   instance.show()

   document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
         instance.close()
      }
   })

};



galeryBlock.addEventListener('click', bigImage);