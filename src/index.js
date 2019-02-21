import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import './hoge.css';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click memememe';
  btn.onclick = printMe;
  element.appendChild(btn);
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('print.jsが更新されました');
    printMe();
  })
}