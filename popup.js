// playing with the buttons

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.nice').addEventListener('click', function() {
        document.body.style.border = '5px solid red';
    });

    document.querySelector('.lol').addEventListener('click', function() {
        document.body.style.border = '';
    });
});