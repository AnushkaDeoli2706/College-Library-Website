class Book{
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display
{
    add(book){
        let tableBody = document.getElementById('tableBody');
        let uiString = `
        <tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
         </tr>
        `
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2)
            return false;
        else
            return true;
    }
    show(type,displayMessage) {
        let message = document.getElementById("message");
        message.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Message:</strong>${displayMessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
    
        setTimeout(function()
        {
            message.innerHTML = ``
        },5000)
    }
}

//add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
    let name = document.getElementById('bookName').value
    let author = document.getElementById('author').value
    let type;

    //to get type of book ticked
    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let nonFiction = document.getElementById('nonFiction')

    if (fiction.checked)
        type = fiction.value;
    else if (programming.checked)
        type = programming.value;
    else if (nonFiction.checked)
        type = nonFiction.value;

    let book = new Book(name, author, type);  //object creation

    //to display book in table
    let display = new Display(); //obj creation

    if (display.validate(book)) //to check if book is a valid object
    {
        display.add(book); //to add book to table
        display.clear(); //to clear the form    
        display.show('success'," Your book has been successfully added")
    }
    else {
        //show error to user
        display.show('danger'," You cannot add this book")
    }

    e.preventDefault();

}

