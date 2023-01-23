const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.fechar-modal')
const video = document.getElementById('video')
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
    alert('Assista o Trailer!')
    modal.classList.add("aberto")
    video.setAttribute('src', linkDoVideo)
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('aberto');
    video.setAttribute('src', "")
});



