document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


$('.collapse').collapse();

(function () {
  'use strict';
  window.addEventListener('load', function () {
    
    var forms = document.getElementsByClassName('needs-validation');
   console.log(forms)
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();  
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();