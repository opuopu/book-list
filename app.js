//  global variable
const totalBooks = document.getElementById("all-books")
const box = document.getElementById("box")
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
const fieldValue = inputField.value;
// error checcking
if( fieldValue === ''){
error("block")
}
else{
  cheekName("none")
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
    // error checking
    if(data.docs.length === 0){
   cheekName("block")
   box.textContent =""
   totalBooks.innerText =""

  }
  else{
  totalBooks.innerText =""
  totalBooks.innerText =`showing ${docs.length} results of ${data.numFound}`

    box.textContent = ""
    docs?.forEach(books => {
    const div = document.createElement("div")
    div.classList.add("col")
    div.innerHTML =` 
    <div class="card h-100" style="box-shadow:0 5px 10px gray;">
    <img height="300px" width="100px"   src="https://covers.openlibrary.org/b/id/${books.cover_i}-M.jpg" class="card-img-top" alt="sorry image not found ">
    <div class="card-body">
      <h5 class="card-title">${books.title ? books.title: "cant find" }</h5>
      <p class="card-text fw-bold">authors name:<span class ="text-info">${books.author_name ? books.author_name[0]:"sorry not find"}</span></p>
      <P P class = "fw-bold">publisher:<span class ="text-info"> ${books.publisher ? books.publisher[0]: "cant find"}</span></P>
    <P class = "fw-bold" > published year: <span class = "text-info" > ${books.first_publish_year ? books.first_publish_year: "cant find"}</span></P>
    </div>
    
  </div>
    `
    box.appendChild(div)  
    }); 
}
}