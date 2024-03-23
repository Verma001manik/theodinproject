let myLibrary = [];

function Book(author, title , pages, read){
    this.title = title
    this.author = author 
    this.pages = pages
    this.read = Boolean(read)
    this.info = function(){
        return (title +  ",by " + author +  ", "+ pages + ", " + read  )
    }
}


function addBookToLibrary(book){
    myLibrary.push(book);
    // myLibrary.table();
    
    
    
    console.log(myLibrary.table());
}
function openForm() {
    document.getElementById("myForm").style.display = "block";
    const submit = document.getElementById("btn");
    submit.addEventListener('click', function(event){
        event.preventDefault();
        
        
        
        let author = document.getElementById('author');
        // console.log("author : " + author.value);
        let title = document.getElementById('title');
        // console.log("title : " + title.value);
        let pages = document.getElementById("pages");
        // console.log("pages : "+ pages.value );

        let read = document.getElementById("select");
        // console.log("read : " + read.value);

        if(title.value !=" "|| author.value !=" "|| pages.value != " "){
            let userEntry = new Book(title.value,author.value,pages.value,read.value);
            // console.log(userEntry.info());
            author.value = "";
            title.value = "";
            pages.value = "";
            addBookToLibrary(userEntry);

            closeForm();

        }else {
            console.log("dont leave this thing empty");
            author.value = "";
            title.value = "";
            pages.value = "";

        }


        

    


    })  
}


  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
} 

// function createTable(array){
//     let table = document.createElement('table');
//     let row = table.insertRow();
//     // let cell = row.insertCell();

//     for (let row of array){
//         table.insertRow();
//         for(let cell of row ){
//             let newcell = table.rows[table.rows.length-1].insertCell();
//             newcell.textContent = cell;
//         }
//     }
//     document.body.appendChild(table);

// }
