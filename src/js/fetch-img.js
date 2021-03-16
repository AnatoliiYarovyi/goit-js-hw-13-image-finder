const apiKey = '20678910-4bf7e071ea6bce7ee5607a0cc';

function fetchImg(inputValue, namberPage) {    
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${inputValue}&page=${namberPage}&per_page=12&key=${apiKey}`
  
    return fetch(url)
        .then(res => res.json())
        .then(({ hits }) => hits)    
        .catch(console.log);
}

export default fetchImg;