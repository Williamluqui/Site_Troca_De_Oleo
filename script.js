const btnMobile = document.getElementById('btn-mobile');

function menu(event){
    if (event.type === 'touchstart') event.preventDefault() ;
        
    
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', menu );
btnMobile.addEventListener('touchstart', menu );