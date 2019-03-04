require('../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

var SDK = require('blocksdk');
var sdk = new SDK();
var fieldvalue;

function debounce (func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}


function load()
{
var storedvalue= localStorage.getItem('text');
}
function x1 () {
	document.getElementById('textfield').value = fieldvalue;
	
} 


function x2()
{
	 fieldvalue= document.getElementById('textfield').value;
	if (!fieldvalue) {
		return;
	}
	sdk.setContent(fieldvalue);
	sdk.setData({
		fieldvalue: fieldvalue
	});
localStorage.setItem('key1',fieldvalue);
	
}

sdk.getData(function (data) {
	fieldvalue = data.fieldvalue || localStorage.getItem('key1');
	x1();
	
	x2();
});

document.getElementById('workspace').addEventListener("input", function () {
	debounce(x2, 500)();
	});
