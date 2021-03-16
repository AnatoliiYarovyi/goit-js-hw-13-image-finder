const apiKey = '20678910-4bf7e071ea6bce7ee5607a0cc';

export default {
    namberPage: 1,
    searchQuery: '',
    
    fetchImg() {    
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.namberPage}&per_page=12&key=${apiKey}`
  
    return fetch(url)
        .then(res => res.json())
        .then(({ hits }) => {
            this.incrementPage();

            return hits;
        })
        .catch(console.log);
    },
    resetPage() {
    this.namberPage = 1;
    },      
    incrementPage() {      
    this.namberPage += 1;
    },
    get query() {
    return this.searchQuery;
    },
    set query(value) {
    this.searchQuery = value;
    },
    
}