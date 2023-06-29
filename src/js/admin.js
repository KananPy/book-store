

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
    $('.example').shCircleLoader({
      color:"#720418",
      width:"10px",
      height:"10px"
      
    });
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
// BookType

let selectForm = document.querySelector("#selectForm")
document.querySelector("#addBook").addEventListener("click",function(){

  document.querySelector("#right").style.display="block"
})

document.querySelector("#cancel").addEventListener("click",function(){
  document.querySelector("#right").style.display="none"

})

document.querySelector("#save").addEventListener("click",function(){
  let option = document.createElement("option")
  option.classList.add("optionName")
let bookType = document.querySelector("#BooktypeText").value.trim()
//console.log(!bookType)
if(!bookType){
  alert("Zehmet olmasa xanani doldurun")
  return
}
option.innerHTML = bookType
selectForm.appendChild(option)
document.querySelector("#BooktypeText").value = ""
})