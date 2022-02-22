// Selecting the HTML elements
const funComponent = document.querySelector("fun-component");
const popUp = document.querySelector('.popUp');


// Event listiner for our custom event
funComponent.addEventListener('button-click', (e) =>  {
    e.preventDefault();
    popUp.classList.add("popUpShow");
    
    setTimeout(function(){ 
        popUp.classList.remove("popUpShow");
    }, 500);
})