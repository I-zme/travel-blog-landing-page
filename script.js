const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', ()=>{
    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', 'false') : navToggle.setAttribute('aria-expanded', 'true');
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
});

const contactRadio = document.querySelector('#contact-radio');
const subscribeCheckbox = document.querySelector('#subscribe-checkbox');
const subscribeRadio = document.querySelector('#subscribe-radio');
const subscribeDiv = document.getElementById('for-subscribe');
const contactDiv = document.getElementById('for-contact');

const buttons = [contactRadio, subscribeRadio, subscribeCheckbox];

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        contactRadio.checked ? contactDiv.setAttribute('data-visible','') : contactDiv.removeAttribute('data-visible');
        subscribeRadio.checked ? subscribeDiv.setAttribute('data-visible','') : subscribeDiv.removeAttribute('data-visible');
        subscribeCheckbox.checked ? subscribeDiv.setAttribute('data-visible','') : subscribeDiv.removeAttribute('data-visible');
    });
});
