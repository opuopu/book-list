//  global variable
const totalBooks = document.getElementById("all-books")
// handelling error function
const error = (display) =>{
    document.getElementById("error").style.display = display
}
const cheekName = (displayName) =>{
    document.getElementById("cheekInput").style.display = displayName
}

error("none")
cheekName("none")
//  onlick function
const search = () =>{
    
const inputField = document.getElementById("field")
const fieldValue = inputField.value
if( fieldValue === ''){
error("block")}
else{
error("none")
const url = `http://openlibrary.org/search.json?q=${fieldValue}`
fetch(url)
.then(res => res.json())
.then( data => DisplayBooks(data))
inputField.value = ""

}


}


const DisplayBooks = (data) =>{
    const docs = data.docs
  
// console.log(data.docs);
totalBooks.innerText =""
totalBooks.innerText =`showing ${docs.length} results of ${data.numFound}`
    const box = document.getElementById("box")
    box.textContent = ""
    docs?.forEach(books => {
        if(!books){
            cheekName("block")
        }
console.log(books.cover_i);
    // create element



    const div = document.createElement("div")
    div.classList.add("col")
    div.innerHTML =` 
    <div class="card h-100">
    <img src="https://covers.openlibrary.org/b/id/${books.cover_i ? books.cover_i: "sorry image not find" }-M.jpg" class="card-img-top h-75 img-fluid" alt="sorry image not found sir">
    
    <div class="card-body">
      <h5 class="card-title">${books.title ? books.title: "cant find" }</h5>
      <p class="card-text">authors name:<span class ="text-info">${books.author_name[0] ? books.author_name[0]:"sorry not find"}</span></p>
     
    <P> published year: <span class = "text-info" > ${books.first_publish_year ? books.first_publish_year: "cant find"}</span></P>
    </div>
  </div>
    
    
    
    `
   
    box.appendChild(div)
   
        
    });
   

}