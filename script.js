const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.add('active');
        
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}

const mybutton = document.getElementById("to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
     
        mybutton.style.display = "block";
        
        
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}