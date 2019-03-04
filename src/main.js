require('../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css');

var SDK = require('blocksdk');
var sdk = new SDK();

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

function save()
{
	var fieldvalue= document.getElementById('textfield').value;
localStorage.setItem('text',fieldvalue);
	
}

function load()
{
var storedvalue= localStorage.getItem('text');
}
var fieldvalue= document.getElementById('textfield').value;
sdk.getContent(function save() {
		var quill = new Quill('textfield'});
		quill.root.innerHTML = fieldvalue;
		function saveText() {
			var html = quill.root.innerHTML;
			sdk.setContent(html);
			sdk.setSuperContent('This is super content: ' + html);

			sdk.getData(function (data) {
				var numberOfEdits = data.numberOfEdits || 0;
				sdk.setData({
					numberOfEdits: numberOfEdits + 1
				});
			});
		}
		quill.on('text-change', saveText);
	});
