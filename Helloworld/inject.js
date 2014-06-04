alert("test");

function main(){
	alert('dom content load...');
}

document.addEventListener("DOMContentLoad", function(){
	main();
});

$(document).ready(function(){
	alert('dom ready...');
});