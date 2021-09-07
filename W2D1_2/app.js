
"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = {findTitles,findAuthors, findIDs, addBook}; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * 
 * @returns {object} array holding all titles as elements
 */
function findTitles() {
    // titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
    // implement this and other functions
    let titles = [];
    for (let book of library){
        titles.push(book.title);
    }
    titles.sort();
    return titles;
    
}

/**
 * 
 * @returns {object} array holding all authors as elements
 */
function findAuthors(){
    let authors = [];
    for (let book of library){
        authors.push(book.author);
    }
    authors.sort();
    return authors;
}

/**
 * 
 * @returns {object} array holding all library IDs 
 */

function findIDs (){
    let libIDs = [];
    for (let book of library){
        libIDs.push(book.libraryID);
    }
    libIDs.sort();
    return libIDs;
}


// /**
//  * @returns {undefined} no return
//  * Event handler for Add book button.  Creates and adds book to the library
//  */

function addBook(title,author,libraryID){
    let newBook = {};
    for (let book of library){
        newBook.title = title;
        newBook.author = author;
        newBook.libraryID = libraryID;
    }
    library.push(newBook);
    return newBook;

}

// const title = document.getElementById("title"); //retrieves the book title from the title textbox
 //finish the implementation -- get the author, create a book object, and add to the library array
