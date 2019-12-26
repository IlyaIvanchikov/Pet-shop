const clbm = document.querySelector('.clbm');
let select;

const opac = (td) => {
    if (select) { 
        select.classList.remove('highlight');
      }
      select = td;
      select.classList.add('highlight'); 
}


$( '.clbm' ).on( 'click', function( event ) {
    const td = event.target.closest(".clb"); 
    opac(td);
  });