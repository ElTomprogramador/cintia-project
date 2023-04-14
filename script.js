const mainTag=document.querySelector('main')



function reloadMyWebPage(){
    location.reload()
}



const facebookButton = document.querySelector('.social1 button');
const instagramButton = document.querySelector('.social2 button');
const twitterButton = document.querySelector('.social3 button');


facebookButton.addEventListener('click', () => {
 
    window.open('https://www.facebook.com/');
});

instagramButton.addEventListener('click', () => {
 
    window.open('https://www.instagram.com/');
});

twitterButton.addEventListener('click', () => {

    window.open('https://twitter.com/');
});



