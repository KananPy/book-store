// Search Book  Task 1
//  AIzaSyBVPbis3ztuFP7Sf2A35kq6NBXJt0xoAmY
//  https://www.googleapis.com/books/v1/volumes?q=search+terms
//const searchInput = document.querySelector("#bookName")
// const searchBtn = document.querySelector("#span-img")
// const searchInformations = document.querySelector(".search-informations")
// searchBtn.addEventListener("click",function(){
//     const searchInput = document.querySelector("#bookName").value.trim()


//   let books = fetch(` https://www.googleapis.com/books/v1/volumes?q=${searchInput}`)

// books.then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })





// })

const searchInput = document.querySelector('#bookName');
searchInput.addEventListener('input', debounce(searchBooks, 500));
function debounce(func, wait) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  function searchBooks() {
    const searchQuery = searchInput.value;
   
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        const books = data.items;
        const booksHTML = books.map(book => {
          const title = book.volumeInfo.title;
          const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(',') : 'Author not found';

          return `  <div class="search-information" >${title} by ${author} </div>`;
        }).join('');
    
        document.querySelector('.search-informations').innerHTML = booksHTML;
      })
      .catch(error =>document.querySelector('.search-informations').innerHTML =error );
        
        
       // console.error(error)
      
     
  }

  document.querySelector(".search-informations").addEventListener("click",function(e){
   let BookName =  e.target.textContent
   fetch(`https://www.googleapis.com/books/v1/volumes?q=${BookName}`)
   .then((response)=>{
    return response.json()
   }).then(data=>{
   document.querySelector("#Angels").value = data.items[0].volumeInfo.title
    document.querySelector("#authorName").value= data.items[0].volumeInfo.authors[0]
    document.querySelector("#BookImageUrl").value = data.items[0].volumeInfo.imageLinks.smallThumbnail
    document.querySelector("#textArea").value = data.items[0].volumeInfo.description
    console.log(data)
   } ) 

    
   // console.log(data)

  //  // console.log(e.target.textContent)
   
})
