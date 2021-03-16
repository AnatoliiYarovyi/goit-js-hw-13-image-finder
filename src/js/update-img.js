import galleryTpl from '../templates/images.hbs';
import refs from './refs';

function updateImgsMarkup(images) {
  const markup = galleryTpl(images);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateImgsMarkup;