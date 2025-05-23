import 'boxicons';

const headerEl = document.querySelector('.header');
window.addEventListener('scroll', handleScroll);

function handleScroll() {
    if (window.scrollY > 200) {
        headerEl.classList.add('header-scrolled');
    } else if (window.scrollY <= 120) {
        headerEl.classList.remove('header-scrolled');
    }
}

// const tabs = document.querySelectorAll('.tab-link');

// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         // Remove a classe 'active' de todos
//         tabs.forEach(t => t.classList.remove('active'));
//         // Adiciona apenas no clicado
//         tab.classList.add('active');
//     });
// });

//search Container  
function changeSearch(change) {

    const searchAll = document.getElementById('searchAll');
    const restaurant = document.getElementById('restaurant');
    const hotel = document.getElementById('hotel');
    const turist = document.getElementById('turist');

    if (change === 'searchAll') {
        searchAll.style.display = 'flex';
        restaurant.style.display = 'none';
        hotel.style.display = 'none';
        turist.style.display = 'none';
    } else if (change === 'restaurant') {
        searchAll.style.display = 'none';
        restaurant.style.display = 'flex';
        hotel.style.display = 'none';
        turist.style.display = 'none';
    }
    else if (change === 'hotel') {
        searchAll.style.display = 'none';
        restaurant.style.display = 'none';
        hotel.style.display = 'flex';
        turist.style.display = 'none';
    } else if (change === 'turist') {
        searchAll.style.display = 'none';
        restaurant.style.display = 'none';
        hotel.style.display = 'none';
        turist.style.display = 'flex';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        }
    });
});
// const swiper2 = new Swiper('.swiper2', {
//       slidesPerView: 4,
//       spaceBetween: 30,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });










