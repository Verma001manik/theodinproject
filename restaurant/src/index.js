import _ from 'lodash';
import './style.css';
import Icon from './rest.jpg';


function component() {
    const element = document.createElement('div');
    const content  = document.getElementById('content');
    const h3 = document.createElement("h3");
    h3.innerText = "Why should you taste us?"
    const text = document.createElement("p");
    text.innerText = "We bring the taste of fine wine ever made in the entire history of production  of the wine";
    content.appendChild(h3);
    content.appendChild(text);
;
  
    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  const myIcon = new Image();
 
  myIcon.src = Icon;
  myIcon.width =  450;
  myIcon.height = 450;
  myIcon.style.borderRadius = "300px";

  element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());