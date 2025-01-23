window.onload = () => {
    let image1 = document.getElementById('image1');
    let image2 = document.getElementById('image2');

    setInterval(() => {
        // Alternar as opacidades para a transição de imagens
        image1.classList.toggle('opacity-100');
        image1.classList.toggle('opacity-0');

        image2.classList.toggle('opacity-100');
        image2.classList.toggle('opacity-0');
    }, 6000); // 6000ms = 3 segundos
};
