var link = document.querySelector(".map__sticker-btn");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup__btn");

link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
    });
    close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");        
    });