//DOM
/* let links = document.querySelectorAll('a');
links.forEach(function (link) {
  console.log(link);
});
 */
/* let celdas = document.querySelectorAll('td');

celdas.forEach(function (td) {
  td.addEventListener('click', function () {
    console.log('Click');
  });
}); */

let links = document.querySelectorAll('.close');

links.forEach(function (link) {
  link.addEventListener('click', function (evento) {
    evento.preventDefault();
    let content = document.querySelector('.content');
    contenido.classList.remove(animate__fadeInDown);
    contenido.classList.remove(animate__animated);

    contenido.classList.add(animate__fadeOutUp);
    contenido.classList.add(animate__animated);

    setTimeout(function () {
      location.href = '/boletines';
    }, 600);

    return false;
  });
});
