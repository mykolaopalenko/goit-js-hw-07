import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBlock = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map((item) => {
   return `<li>
   <a class="gallery__item" href="${item.original}">
      <img
         class="gallery__image"
         src="${item.preview}"
         alt="${item.description}"
      />
   </a>
</li>
  `

}).join(' ');

galleryBlock.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });


