function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('.trailer video');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    trailer.classList.toggle('active');
}

function changeBg(bg, title) {
    console.log("Chamada da função changeBg()");
    console.log("Imagem de fundo:", bg);
    console.log("Título:", title);

    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');

    banner.style.background = `url("./images/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}

