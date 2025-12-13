const box = document.getElementsByClassName('textbox')

const myImage = document.getElementById('artwork_1');
const myTextBox = document.getElementById('myTextBox');

myImage.addEventListener('click', () => {
    myTextBox.classList.toggle('show');
});

const myImage_2 = document.getElementById('artwork_2');
const myTextBox_2 = document.getElementById('myTextBox-2');

myImage_2.addEventListener('click', () => {
    myTextBox_2.classList.toggle('show');
});

const myImage_3 = document.getElementById('artwork_3');
const myTextBox_3 = document.getElementById('myTextBox-3');

myImage_3.addEventListener('click', () => {
    myTextBox_3.classList.toggle('show');
});

const myImage_4 = document.getElementById('artwork_4');
const myTextBox_4 = document.getElementById('myTextBox-4');

myImage_4.addEventListener('click', () => {
    myTextBox_4.classList.toggle('show');
});
const myImage_5 = document.getElementById('artwork_5');
const myTextBox_5 = document.getElementById('myTextBox-5');

myImage_5.addEventListener('click', () => {
    myTextBox_5.classList.toggle('show');
});
const myImage_6 = document.getElementById('artwork_6');
const myTextBox_6 = document.getElementById('myTextBox-6');

myImage_6.addEventListener('click', () => {
    myTextBox_6.classList.toggle('show');
});
const myImage_7 = document.getElementById('artwork_7');
const myTextBox_7 = document.getElementById('myTextBox-7');

myImage_7.addEventListener('click', () => {
    myTextBox_7.classList.toggle('show');
});
const myImage_8 = document.getElementById('artwork_8');
const myTextBox_8 = document.getElementById('myTextBox-8');

myImage_8.addEventListener('click', () => {
    myTextBox_8.classList.toggle('show');
});
const myImage_9 = document.getElementById('artwork_9');
const myTextBox_9 = document.getElementById('myTextBox-9');

myImage_9.addEventListener('click', () => {
    myTextBox_9.classList.toggle('show');
});
const myImage_10 = document.getElementById('artwork_10');
const myTextBox_10 = document.getElementById('myTextBox-10');

myImage_10.addEventListener('click', () => {
    myTextBox_10.classList.toggle('show');
});
const myImage_11 = document.getElementById('artwork_11');
const myTextBox_11 = document.getElementById('myTextBox-11');

myImage_11.addEventListener('click', () => {
    myTextBox_11.classList.toggle('show');
});
const myImage_12 = document.getElementById('artwork_12');
const myTextBox_12 = document.getElementById('myTextBox-12');

myImage_12.addEventListener('click', () => {
    myTextBox_12.classList.toggle('show');
});

const hide_button = document.getElementById('hide');
const all_textboxes = [myTextBox, myTextBox_2, myTextBox_3, myTextBox_4, myTextBox_5, myTextBox_6, myTextBox_7, myTextBox_8, myTextBox_9, myTextBox_10, myTextBox_11, myTextBox_12]

hide_button.addEventListener('click', () => {
    all_textboxes.forEach(textbox => {
        textbox.classList.toggle('hidden');
    });
    location.reload();
});
