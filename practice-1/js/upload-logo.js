import { imgPreviewElement } from './modal.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const resetLogoBtn = document.querySelector('.form__logo-button');
const chooseFileElement = document.querySelector('.form__logo-input');

chooseFileElement.addEventListener('change', () => {
  const file = chooseFileElement.files[0];
  const fileName = file.name.toLowerCase();

  const acceptableExtension = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (acceptableExtension) {
    imgPreviewElement.src = URL.createObjectURL(file);
    imgPreviewElement.style.backgroundImage = `url(${imgPreviewElement.src})`;
  }
});

const resetLogo = () => {
  resetLogoBtn.addEventListener('click', () => {
    imgPreviewElement.src = `img/logo-example@2x.jpg`;
  });
}

resetLogo();
