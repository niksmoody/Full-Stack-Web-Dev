console.log("connected");

class Book{
    constructor(name, author, type){
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display{
    add(book){        
        const tbody = document.getElementById("tbody");
        const row = table.rows.length;
        tbody.innerHTML +=
        `<tr>
            <td>${row}</td>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
            <td><button onclick={deletes(this)} class="btn btn-outline-danger">❌</button></td>
      </tr>`
    }

    clear(){
        const libraryform = document.getElementById("libraryform");
        libraryform.reset();
    }
}

function deletes(r){
    const table = document.getElementById("table");
    table.deleteRow(r.parentNode.parentNode.rowIndex);
}

function deleteAll(){
    const body = document.getElementById("tbody");
    body.deleteAll();
}

const libraryform = document.getElementById("libraryform");
libraryform.addEventListener("submit", library)

function library(e)
{
    e.preventDefault();
    console.log("submitted");

    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    let type;
    const type1 = document.getElementById("Read");
    const type2 = document.getElementById("Will read");
    const type3 = document.getElementById("Need to buy");

    if(type1.checked){
        type = type1.value;
    }

    else if(type2.checked){
        type = type2.value;
    }

    else{
        type = type3.value;
    }

    const book = new Book(name, author, type);
    console.log(book);

    const display = new Display();
    display.add(book);
    display.clear();
}