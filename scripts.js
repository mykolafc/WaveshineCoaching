const bootstrap = require("bootstrap")

(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


function showConfirm() {
    window.location = '/#showModal';
}

$('form').on('submit', showConfirm);


$(document).ready(function () {
    if (window.location.hash.indexOf('showModal') !== -1) {
        window.location.hash = '';
        jQuery('#confirm-modal').modal('show');
    }
});

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-link");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};