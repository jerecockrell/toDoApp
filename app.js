console.log('hello world')

function sayItWorked () {
	var $element = $(event.target);

	console.log('It worked!', $element);

	return false;
}



$('#submit-button').on('click', sayItWorked);