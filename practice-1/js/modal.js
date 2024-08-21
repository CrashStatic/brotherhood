const pageElement = document.querySelector('.page');
const modalElement = pageElement.querySelector('.modal');
const openBtm = pageElement.querySelector('.container__button');
const closeBtn = pageElement.querySelector('.form__close');
const inputsForm = pageElement.querySelectorAll('.form__input');
const imgPreviewElement = document.querySelector('.form__logo-img img');

const isEscapeKey = (evt) => evt.key === 'Escape';

const displayModal = () => {
  if (!pageElement || !modalElement || !openBtm || !closeBtn) {
    return;
  }

  const clearForm = () => {
    imgPreviewElement.src = `img/logo-example.jpg`;
    inputsForm.forEach((element) => {
      element.value = '';
    })
  };

  const openFormModal = () => {
    modalElement.classList.add('modal--open');
    pageElement.classList.add('scroll-lock');
    document.addEventListener('keydown', onDocumentKeydown);
  };

  const closeFormModal = () => {
    clearForm();
    modalElement.classList.remove('modal--open');
    pageElement.classList.remove('scroll-lock');
    document.removeEventListener('keydown', onDocumentKeydown);
  };

  function onDocumentKeydown (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeFormModal();
    }
  }

  openBtm.addEventListener('click', () => {
    openFormModal();
  })

  closeBtn.addEventListener('click', () => {
    closeFormModal();
  });
}

export { displayModal, imgPreviewElement };
