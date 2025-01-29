window.onload = () => {
    let image1 = document.getElementById('image1');
    let image2 = document.getElementById('image2');

    setInterval(() => {
        // Alternar as opacidades para a transição de imagens
        image1.classList.toggle('opacity-100');
        image1.classList.toggle('opacity-0');

        image2.classList.toggle('opacity-100');
        image2.classList.toggle('opacity-0');
    }, 3000); // 6000ms = 3 segundos
};


function showPrompt() {
    let searchQuery = prompt("O que você procura?");
    if (searchQuery !== null) {
        // Aqui você pode adicionar lógica para lidar com a pesquisa
        console.log("Usuário está procurando por: " + searchQuery);
    }
}




document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4, // Mostra 4 slides ao mesmo tempo
        spaceBetween: 10, // Pequeno espaço entre os slides
        slidesPerGroup: 4, // Avança 4 slides por vez
        centeredSlides: false, // Garante que os slides centrais fiquem visíveis com partes laterais
        centeredSlidesBounds: true, // Mantém os slides alinhados corretamente no início e fim
        slidesOffsetBefore: 40, // Move os slides um pouco para dentro no início
        slidesOffsetAfter: 40, // Mantém o deslocamento no final
        loop: false, // Desativa o loop para evitar cortes no início
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1024: { slidesPerView: 4, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 1, spaceBetween: 5 },
        }
    });
});


