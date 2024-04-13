const callback = () => {
    alert("Hello, World!");
};

const button = document.querySelector('#myButton');
button.addEventListener('submit', callback);