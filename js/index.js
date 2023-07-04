const buttonClosePopup = document.getElementById('button_close_popup');
const buttonOpenPopup = document.getElementById('button_open_popup');
const popupContact = document.getElementById('popup_contact');

buttonOpenPopup.addEventListener('click', () => {
    popupContact.classList.remove('hidden');

    document.body.style.overflow = 'hidden';
    
});

function closeModal() {
    popupContact.classList.add('hidden');
    document.body.style.overflow = '';
};

buttonClosePopup.addEventListener('click', closeModal);

popupContact.addEventListener('click', (e) => {
    if (e.target === popupContact) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && !popupContact.classList.contains('hidden')) {
        closeModal();

    }
});

