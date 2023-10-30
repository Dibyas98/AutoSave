let text=document.querySelector('textarea')
text.value=localStorage.getItem('autosave')

text.addEventListener('keyup',function(){
    console.log(text.value);
    let autosave={}
    localStorage.setItem("autosave",`${text.value}`);
    console.log(localStorage);
})

function toggleDarkMode() {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'light');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'dark');
    }
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;


darkModeToggle.addEventListener('click', toggleDarkMode);

// const darkModeToggle = document.getElementById('dark-mode-toggle');
const theme1Toggle = document.getElementById('theme1-toggle');
const theme2Toggle = document.getElementById('theme2-toggle');
// const body = document.body;

darkModeToggle.addEventListener('click', toggleDarkMode);
theme1Toggle.addEventListener('click', () => toggleTheme('theme1'));
theme2Toggle.addEventListener('click', () => toggleTheme('theme2'));

function toggleTheme(theme) {
    console.log("he");
    body.classList.remove('theme1', 'theme2');
    body.classList.add(theme);
}