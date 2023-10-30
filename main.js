let text=document.querySelector('textarea')
text.value=localStorage.getItem('autosave')

text.addEventListener('keyup',function(){
    console.log(text.value);
    let autosave={}
    localStorage.setItem("autosave",`${text.value}`);
    console.log(localStorage);
})