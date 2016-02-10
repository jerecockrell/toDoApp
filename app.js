console.log('hello world')

function sayItWorked () {
	event.preventDefault();
	var $event = $(event.target);
	var $form = $event.closest('form');
	var $inputs = $form.find('input');

	var taskName = $inputs.first().val();
	var dueDate = $inputs.last().val();

if(taskName !== "" || dueDate !== ''){
	
	var $list = $('#todoTable');
	$list.append('<tr> \
  				<td>' + taskName + '</td> \
  				<td>' + dueDate +'</td> \
  				<td><input type="checkbox"></td> \
  				 </tr>');
				
}



	console.log('Submitted with ', value1, ' and ', value2);
	return false;
}



$('#submit-button').on('click', sayItWorked);