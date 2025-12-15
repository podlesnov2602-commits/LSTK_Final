(function() {
  document.body.className += ' js-enabled';

  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.querySelectorAll('.site-nav a');
  if (navToggle && navLinks.length) {
    Array.prototype.forEach.call(navLinks, function(link) {
      link.addEventListener('click', function() {
        if (navToggle.checked) navToggle.checked = false;
      });
    });
  }

  var lightboxLinks = document.querySelectorAll('.gallery-link');
  if (lightboxLinks.length) {
    Array.prototype.forEach.call(lightboxLinks, function(link) {
      link.addEventListener('click', function(event) {
        var targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          var lightbox = document.querySelector(targetId);
          if (lightbox) {
            event.preventDefault();
            lightbox.classList.add('is-open');
            lightbox.addEventListener('click', function(e) {
              if (e.target === lightbox) lightbox.classList.remove('is-open');
            }, { once: true });
          }
        }
      });
    });
    var closeButtons = document.querySelectorAll('.lightbox__close');
    Array.prototype.forEach.call(closeButtons, function(btn) {
      btn.addEventListener('click', function() {
        var box = btn.closest('.lightbox');
        if (box) box.classList.remove('is-open');
      });
    });
  }
})();
