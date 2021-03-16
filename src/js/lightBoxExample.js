import refs from './refs.js'
import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css'

const createAndOpenLightBox = (imageSrc) => {
const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">
`)

    instance.show()
}

refs.galleryContainer.addEventListener('click', event => {
    
    const { target } = event;
    const { largeImage } = target.dataset;
    if (!largeImage) return;

    console.log(largeImage)
    createAndOpenLightBox(largeImage);
})