// replacing all the elements with the word "lol"

let elements = Array.prototype.slice.call(
    document.querySelectorAll('p, body, header')
);
elements.forEach(function(ele) {
    ele.textContent = ele.textContent.replace(/.*/g, 'lol');
});