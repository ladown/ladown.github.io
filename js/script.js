"use strict";

window.addEventListener(`DOMContentLoaded`, () => {


// Hamburger
const hamburger = document.querySelector(`.hamburger`);
const closeBtn = document.querySelector(`.menu__close`);
const menu = document.querySelector(`.menu`);
function menuOpen () {
    hamburger.addEventListener("click", () => {
        menu.classList.toggle('active');
    });
    closeBtn.addEventListener("click", () => {
        menu.classList.toggle('active');
    });
}
menuOpen();

// Lines with skill

const counters = document.querySelectorAll(`.skills__ratings-counter`);
const lines = document.querySelectorAll(`.skills__ratings-line span`);
counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

// Menu press and close

const menuItem = document.querySelectorAll(`.menu__link a`);
menuItem.forEach((item,i) => {
    item.addEventListener("click", (e) => {
        menu.classList.toggle(`active`);
    });
});

//Icon Up and asidePanel show

const iconUp = document.querySelector(`.link`);
const asidePanel = document.querySelector(`.sidepanel`);

function showModalByScroll() {
    if (window.pageYOffset >= 1000) {
        iconUp.classList.toggle(`hide`);
        asidePanel.classList.toggle(`hide`);
        window.removeEventListener('scroll', showModalByScroll);
    }
    }
window.addEventListener('scroll', showModalByScroll);

//Portfolio undone works

const corkItem = document.querySelectorAll(`.development_process`);
const modalArea = document.querySelector(`.modal__area`);
const modalClose = document.querySelector(`.modal__img`);

function modalOpenClose () {
    corkItem.forEach((item,i) => {
        item.addEventListener("click", () => {
            modalArea.classList.remove(`hide`);
            modalArea.classList.add(`active`);
        });
    });
    modalClose.addEventListener("click", () => {
        modalArea.classList.remove(`active`);
        modalArea.classList.add(`hide`);
    });
}
modalOpenClose();

// Form

const inputName = document.querySelector(`#name`);
const email = document.querySelector(`#email`);
const contactsForm = document.querySelector(`.contacts__form`);
const formBtn = document.querySelector(`.contacts__btn`);
const contactsModal = document.querySelector(`.modal__area-contacts`);
const contactsModalClose = document.querySelector(`.modal__img-contacts`);

formBtn.addEventListener("submit", (e) => {

    inputName.addEventListener("input", (e) => {
        if ( inputName.value.length <= 2) {
            inputName.setCustomValidity("Введите своё настоящее имя!");
          } else {
            inputName.setCustomValidity("");
          }
    });

    email.addEventListener("input", function (event) {
        if (email.validity.typeMismatch) {
          email.setCustomValidity("Введите вашу электронную почту!");
        } else {
          email.setCustomValidity("");
        }
      });

    contactsModal.classList.add(`active`);
    contactsModal.classList.remove(`hide`);
    contactsModalClose.addEventListener("click", () => {
        contactsModal.classList.remove(`active`);
        contactsModal.classList.add(`hide`);
    });
    e.preventDefault();
    contactsForm.reset();
});
});