const themeSelector = document.querySelector('select');
const body = document.body;
const logo = document.querySelector('.logo');

function changeTheme() {
    const selectedTheme = themeSelector.value;
    body.classList.remove('dark');

    if (selectedTheme === 'dark'){
        body.classList.add('dark')
        logo.src = 'byui-logo_white.png';
    }

    else {
       logo.src = "byui-logo_blue.webp"
    }
};

themeSelector.addEventListener('change', changeTheme);