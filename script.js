function debounce(func , delay){
    let timer;
    return function (...args){
        clearTimeout(timer);
        timer=setTimeout(()=>func.apply(this,args),delay)
    }
}
function handleSearch(event){
    const query = event.target.value;
    document.getElementById("output").textContent`search for ${query}`;
    console.log(`API call for : ${query}`)
}

const searchInput = document.getElementById("search");
searchInput.addEventListener('click',debounce(handleSearch,500));