const form = document.querySelector('.container');
const viewButton = document.querySelector('.view-form');

const openForm = () => {
    // form se torna visivel e o botão some
    form.classList.add('visible');
    viewButton.classList.add('hidden');
}

const closeForm = () => {
    // o botão se torna visivel e o form some
    form.classList.remove('visible');
    viewButton.classList.remove('hidden');
}