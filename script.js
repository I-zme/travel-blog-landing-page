const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', toggleNavigation);

primaryHeader.addEventListener('click',(e)=>{
    if(e.target.classList.contains('nav-link')){
        toggleNavigation()
    }
    else if(primaryHeader.hasAttribute('data-overlay')&&(!primaryNav.contains(e.target)) && (!navToggle.contains(e.target))){
        toggleNavigation()
    }
    
});

function toggleNavigation(){
    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', 'false') : navToggle.setAttribute('aria-expanded', 'true');
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
}



const contactRadio = document.querySelector('#contact-radio');
const subscribeCheckbox = document.querySelector('#subscribe-checkbox');
const subscribeRadio = document.querySelector('#subscribe-radio');
const subscribeDiv = document.getElementById('for-subscribe');
const contactDiv = document.getElementById('for-contact');

const buttons = [contactRadio, subscribeRadio, subscribeCheckbox];

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        contactRadio.checked ? contactDiv.setAttribute('data-visible','') : contactDiv.removeAttribute('data-visible');
        (subscribeRadio.checked || subscribeCheckbox.checked) ? subscribeDiv.setAttribute('data-visible','') : subscribeDiv.removeAttribute('data-visible');
        //  ? subscribeDiv.setAttribute('data-visible','') : subscribeDiv.removeAttribute('data-visible');
    });
});
