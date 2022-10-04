var header = document.querySelector('header');

window.addEventListener('scroll', stickyNav);

function stickyNav() {
  if (window.scrollY > header.offsetHeight + 150) {
    header.classList.add('active')
  }else {
    header.classList.remove('active')
  }
}

