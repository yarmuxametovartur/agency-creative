const button = document.querySelector('#nav-call-btn');
const startProjectButton = document.querySelector('#start-project-btn');
const getStartedButton = document.querySelector('#get-started-btn');
const modalWindow = document.querySelector('#modal');
const modalWindowCloseButton = document.querySelector('#close');

button.addEventListener('click', function () {
    modalWindow.classList.add('modal-window_active');
    $("body").css("overflow-y","hidden");
});
modalWindowCloseButton.addEventListener('click', function () {
    modalWindow.classList.remove('modal-window_active');
    $("body").css("overflow-y","scroll");
});

startProjectButton.addEventListener('click', function () {
    modalWindow.classList.add('modal-window_active');
    $("body").css("overflow-y","hidden");
});
modalWindowCloseButton.addEventListener('click', function () {
    modalWindow.classList.remove('modal-window_active');
    $("body").css("overflow-y","scroll");
});

getStartedButton.addEventListener('click', function () {
    modalWindow.classList.add('modal-window_active');
    $("body").css("overflow-y","hidden");
});
modalWindowCloseButton.addEventListener('click', function () {
    modalWindow.classList.remove('modal-window_active');
    $("body").css("overflow-y","scroll");
});