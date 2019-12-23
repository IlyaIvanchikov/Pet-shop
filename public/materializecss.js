$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tabs').tabs();
  });

const show = document.querySelector('.show')
show.addEventListener('click', (event) => {
  // let id = event.target.dataset.toggleId;
  // if (!id) return;

  let elem = document.getElementById('showId');

  elem.hidden = !elem.hidden;
})