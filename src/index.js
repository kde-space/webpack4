import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import xmlData from './data.xml';
import jsonData from './data.json';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  console.log('xmlData :', xmlData);
  console.log('jsonData :', jsonData);
  
  return element;
}

document.body.appendChild(component());