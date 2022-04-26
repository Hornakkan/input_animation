const inpWrap = document.querySelector('.inp-wrap');
const input = document.querySelector('.inp-anim');
const validation = document.querySelector('.inp-wrap span');
const regex = /[^a-zA-Z ]/g;

input.addEventListener('input', function(e) {
    //console.log(e.target.value);

    if(e.target.value !== ""){
        e.target.parentNode.classList.add('active-input');
    } else if(e.target.value === "") {
        e.target.parentNode.classList.remove('active-input');
    }

    //if(e.target.value.includes('$')){
        if(e.target.value.match(regex)){
        input.classList.add('erreur');
        validation.classList.add('visible');
    } else {
        input.classList.remove('erreur');
        validation.classList.remove('visible');
    }
});