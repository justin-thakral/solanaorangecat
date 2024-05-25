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

    // Create a temporary textarea element to hold the text
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = copyText.value;
    document.body.appendChild(tempTextArea);

    // Select the text in the temporary textarea and copy it
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the temporary textarea
    navigator.clipboard.writeText(tempTextArea.value).then(function() {
        alert("Copied the text: " + tempTextArea.value);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });

    // Remove the temporary textarea element
    document.body.removeChild(tempTextArea);
}
