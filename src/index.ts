import * as _ from 'lodash';
import './style.css';
import pic from './yaon.jpg';

function component(): HTMLElement {
  const img: HTMLImageElement = new Image();
  const element: HTMLElement = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  img.src = pic;
  img.width = 200;
  element.appendChild(img);
  console.log(img);
  return element;
}

document.body.appendChild(component());