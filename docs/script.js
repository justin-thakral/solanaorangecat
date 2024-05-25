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
function copyToClipboard() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(copyText.value).then(function() {
        alert("Copied the text: " + copyText.value);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
