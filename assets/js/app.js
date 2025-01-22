
// Toggle menu
document.addEventListener('DOMContentLoaded', function() {
    const btnToggle = document.querySelector('#toggle-button');

    btnToggle.addEventListener('click', function() {
        console.log('click');
        const menu = document.querySelector('#toggle-menu');
        menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
     }); 
});