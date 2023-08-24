
const menuButtons = document.querySelectorAll('.menu_button');
const menuList = document.getElementById('menuList');
const removeMenuList = document.getElementById('cancel');
const search = document.getElementById('search_button');
const inputSearch = document.getElementById('input');
const removeMenuList2 = document.getElementById('cancel2');


search.addEventListener('click', () => {
    inputSearch.classList.toggle('open');
})

removeMenuList2.addEventListener('click', () => {
    inputSearch.classList.toggle('open');
});


// menuButton.addEventListener('click', () => {
//     menuList.classList.toggle('open');
// });

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        menuList.classList.toggle('open');
    });
});

removeMenuList.addEventListener('click', () => {
    menuList.classList.toggle('open');
});



const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const imageContainer = document.querySelector('.overflow-x-scroll');
const scrollDistance = 100; 

prevButton.addEventListener('click', () => {
    imageContainer.scrollLeft -= scrollDistance;
});

nextButton.addEventListener('click', () => {
    imageContainer.scrollLeft += scrollDistance;
});

  