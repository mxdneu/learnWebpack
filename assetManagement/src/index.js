
import _ from 'lodash';
import './style.css';
import cronaldo from './cronaldo.jpg';
import Data from './data.xml';

function component(){
	var element = document.createElement('div');

	element.innerHTML = _.join(['hello', 'webpack'], '--');
	element.classList.add('hello');

	var ronaldo = new Image();
	ronaldo.src = cronaldo;
	ronaldo.classList.add('imgs');
	element.appendChild(ronaldo);

	console.log(Data);

	return element;
}

document.body.appendChild(component());