
import _ from 'lodash';

function component(){
	var element = document.createElement('div');

	element.innerHTML = _.join(['hello', 'fuck'], '--');

	return element;
}

document.body.appendChild(component());