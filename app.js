//  global variable
const totalBooks = document.getElementById("all-books")
const box = document.getElementById("box")
// handelling error function
const cheekTotal = (length,numFounds) =>{
  totalBooks.innerText =`showing ${length} results of ${numFounds}`
}

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
const url = `https://openlibrary.org/search.json?q=${fieldValue}`
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
   cheekTotal(docs.length,data.numFound)
  

  }
  else{
  totalBooks.innerText =""
  cheekTotal(docs.length,data.numFound)

    box.textContent = ""
    docs?.forEach(books => {
    const div = document.createElement("div")
    div.classList.add("col")
    div.innerHTML =` 
    <div class="card h-100" style="box-shadow:0 5px 10px gray;">
    <div>
    <img height="300px" width="100px"   src="https://covers.openlibrary.org/b/id/${books.cover_i}-M.jpg" class="card-img-top" alt="sorry image not found ">
    </div>
    <div class="card-body">
      <h5 class="card-title text-center">${books.title ? books.title: "cant find" }</h5>
      <div class = "d-flex justify-content-between">
      <p class="card-text fw-bold ">authors name:</p>
      <p class ="text-info">${books.author_name ? books.author_name[0]:"sorry not find"}</p>
      </div>
      <div class ="d-flex justify-content-between">
      <P P class = "fw-bold ">publisher:</P>
      <p class ="text-info"> ${books.publisher ? books.publisher[0]: "cant find"}</p>
      </div>
     
      <div class ="d-flex justify-content-between">
      <P class = "fw-bold " > published year: </P>
      <p class = "text-info" > ${books.first_publish_year ? books.first_publish_year: "cant find"}</p>
      </div>
   
    </div>
    
  </div>
    `
    box.appendChild(div)  
    }); 
}
}