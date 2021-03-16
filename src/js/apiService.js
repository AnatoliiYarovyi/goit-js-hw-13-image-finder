import refs from './refs.js'
import newsService from './news-service'
import updateImgsMarkup from './update-img.js'


refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.currentTarget;
    newsService.query = form.elements.query.value;

    refs.galleryContainer.innerHTML = '';
    form.reset();    

    newsService.resetPage();
    newsService.fetchImg().then(hits => {
        updateImgsMarkup(hits)
    })
}, 1000)

refs.btnNextPage.addEventListener('click', () => {
    newsService.fetchImg().then(hits => {
        updateImgsMarkup(hits)
    })
    window.scrollTo({ top: refs.galleryContainer.clientHeight, behavior: 'smooth' });
} )

refs.btnTopPage.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });    
} )
