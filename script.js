"use strict";

// Hinzufügen des Modals

const modal = document.querySelector("dialog");
const addBookBtn = document.querySelector(".addBookBtn");
const closeBtn = document.querySelector(".closeBtn");

addBookBtn.addEventListener("click", () => modal.showModal());
closeBtn.addEventListener("click", () => modal.close());

// Book-Constructor

function book(title, author, publisher, releaseDate, pages) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.releaseDate = releaseDate;
    this.pages = pages;
}

// Zugriff auf die Daten der Inputs

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author"); 
const publisherInput = document.querySelector("#publisher"); 
const pagesInput = document.querySelector("#pages"); 
const releaseDateInput = document.querySelector("#releaseDate"); 

// Erstellung eines neuen Objekts + Erstellung eines neuen Buches in HTML mittel Buttons

function createNewBook() {
    let newBook = new book(titleInput.value, 
        authorInput.value, 
        publisherInput.value, 
        pagesInput.value, 
        releaseDateInput.value);
        
    // Erstellung einer neuen Karte

    const main = document.querySelector("main");
    const mainDiv = document.createElement("div");
    main.appendChild(mainDiv);
    
    const titleCard = document.createElement("p");
    titleCard.textContent = newBook.title;
    mainDiv.appendChild(titleCard);
    
    const cardLeftSide = document.createElement("div");
    cardLeftSide.classList.add("cardLeftSide");
    
    const authorLabel = document.createElement("p");
    authorLabel.textContent = "Author:";
    cardLeftSide.appendChild(authorLabel);
    
    const publisherLabel = document.createElement("p");
    publisherLabel.textContent = "Herausgeber:";
    cardLeftSide.appendChild(publisherLabel);
    
    const releaseDateLabel = document.createElement("p");
    releaseDateLabel.textContent = "Erscheinungsjahr:";
    cardLeftSide.appendChild(releaseDateLabel);
    
    const pagesLabel = document.createElement("p");
    pagesLabel.textContent = "Seiten:";
    cardLeftSide.appendChild(pagesLabel);
    
    mainDiv.appendChild(cardLeftSide);
    
    const cardRightSide = document.createElement("div");
    cardRightSide.classList.add("cardRightSide");
    
    const authorValue = document.createElement("p");
    authorValue.textContent = newBook.author;
    cardRightSide.appendChild(authorValue);
    
    const publisherValue = document.createElement("p");
    publisherValue.textContent = newBook.publisher;
    cardRightSide.appendChild(publisherValue);
    
    const pagesValue = document.createElement("p");
    pagesValue.textContent = newBook.pages;
    cardRightSide.appendChild(pagesValue);
    
    const releaseDateValue = document.createElement("p");
    releaseDateValue.textContent = newBook.releaseDate;
    cardRightSide.appendChild(releaseDateValue);

    mainDiv.appendChild(cardRightSide);
    
    const button1 = document.createElement("button");
    button1.textContent = "Gelesen";
    button1.classList.add("readedBtn");
    mainDiv.appendChild(button1);
    button1.addEventListener("click", () => {
        console.log(button1.parentElement.style.backgroundColor);
        if (button1.parentElement.style.backgroundColor !== "rgba(247, 215, 118, 0.596)") {
            button1.parentElement.style.backgroundColor = "rgba(247, 215, 118, 0.596)";
            button1.style.backgroundColor = "#444";
            button1.style.color = "white";
            button1.textContent = "Ungelesen";
        } else {
            button1.parentElement.style.backgroundColor = "#ffffff";
            button1.style.backgroundColor = "";
            button1.style.color = "";
            button1.textContent = "Gelesen";
        }
    })
    
    const button2 = document.createElement("button");
    button2.textContent = "Entfernen";
    button2.classList.add("removeBtn");
    mainDiv.appendChild(button2);
    button2.addEventListener("click", () => button2.parentElement.remove());

    modal.close()
}

const submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", () => createNewBook());
