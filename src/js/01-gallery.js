import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
const imgGalleryEl = document.querySelector('.gallery');

function createGalleryItems(items) {
  return items
    .map(
      (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>`
    )
    .join('');
}

const addGalleryMarkup = createGalleryItems(galleryItems);
imgGalleryEl.innerHTML = addGalleryMarkup;
imgGalleryEl.addEventListener('click', onImageClick);

function onImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const source = e.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${source}" alt="Image">`);
  instance.show();

  imgGalleryEl.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}



