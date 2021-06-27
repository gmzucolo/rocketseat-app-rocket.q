import Modal from "./modal.js";

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDesciption = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

//Pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");

/*checkButtons.forEach(button => {
    //Adicionar a escuta
    button.addEventListener("click", event => {
        
        modalTitle.innerHTML = "Marcar como lida";
        
        modal.open()});
});

Quando o botão delete for clicado, ele abre a modal
const deleteButtons = document.querySelectorAll(".actions a.delete");

deleteButtons.forEach(button => {
    button.addEventListener("click", event => {
        
        modalTitle.innerHTML = "Excluir essa pergunta";
        
        modal.open()});
});*/

checkButtons.forEach(button => {
    //Adicionar a escuta
    button.addEventListener("click", handleClick);
});

/*Quando o botão delete for clicado, ele abre a modal*/
const deleteButtons = document.querySelectorAll(".actions a.delete");

deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false));

});

function handleClick(event, check = true) {
    event.preventDefault();    
    modalTitle.innerHTML= check ? "Marcar como lida" : "Excluir";
    const slug = check ? "check" : "delete";
    const roomId = document.querySelector("#room-id").dataset.id;
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form");
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`);

    modalDesciption.innerHTML= check ? "Tem certeza que deseja marcar como lida essa pergunta" : "Tem certeza que deseja excluir essa pergunta";
    modalButton.innerHTML= check ? "Sim, marcar como lida" : "Sim, excluir";
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red");

    modal.open();
};
