const counter = document.getElementById('counter');
let count = 1000;

const timer = setInterval(() => counter.innerText = ++count, 1000);

if (module.hot) {
  module.hot.dispose(() => {
    clearInterval(timer);
  });
  module.hot.accept();
}
