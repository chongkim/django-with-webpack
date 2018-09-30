const name = document.getElementById('name');

name.innerText = 'x';

if (module.hot) {
  module.hot.accept();
}
