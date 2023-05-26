import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
const imgGalleryEl = document.querySelector('.gallery');

function createGalleryItems(items) {
  return items
    .map(
      (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image"src="${item.preview}"
        alt="${item.description}"
        title="${item.description}"
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
new SimpleLightbox('.gallery a', {captionDelay:250});
  
  imgGalleryEl.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}