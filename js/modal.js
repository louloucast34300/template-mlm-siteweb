const buttonModal = document.getElementById('btn-modal');
const buttonModal2 = document.getElementById('btn-modal2');
const modalContainer = document.getElementById('modal-container');
const crossIcon = document.getElementById('modal-close');

/* OPEN MODAL "DEVENIR DISTRIBUTEUR" */
const modalClosed = () => modalContainer.classList.remove('anim-close');

buttonModal.addEventListener('click', e => modalContainer.classList.add('show'));

if(window.location.pathname === "/"){
buttonModal2.addEventListener('click', e => modalContainer.classList.add('show')); 
}


const closeModal = () =>{
    modalContainer.classList.remove('show');
    modalContainer.classList.add('anim-close');
    setTimeout(modalClosed, 300);
}
crossIcon.addEventListener('click', (e) => closeModal());


