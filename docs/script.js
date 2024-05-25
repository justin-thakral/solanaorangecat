document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const closeMenu = document.querySelector('.close-menu');
    const dropdownLinks = document.querySelectorAll('.dropdown-menu ul li a');

    menuToggle.addEventListener('click', function () {
        dropdownMenu.classList.remove('fade-out');
        dropdownMenu.style.display = 'flex';
        dropdownMenu.classList.add('fade-in');
    });

    closeMenu.addEventListener('click', function () {
        dropdownMenu.classList.remove('fade-in');
        dropdownMenu.classList.add('fade-out');
        setTimeout(function () {
            dropdownMenu.style.display = 'none';
        }, 500); // Match the duration of the fade-out animation
    });

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function () {
            dropdownMenu.classList.remove('fade-in');
            dropdownMenu.classList.add('fade-out');
            setTimeout(function () {
                dropdownMenu.style.display = 'none';
            }, 500); // Match the duration of the fade-out animation
        });
    });
});
