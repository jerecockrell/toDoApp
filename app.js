console.log('hello world')

function sayItWorked () {
	var $element = $(event.target);
	var $form = $element.closest('form');
	var $inputs = $form.find('input');
	
	console.log('It worked!', $inputs);

	return false;
}



$('#submit-button').on('click', sayItWorked);