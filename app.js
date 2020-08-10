const alertBanner = document.querySelector('#alert');
const user = document.querySelector('#userField');
const message = document.querySelector('#messageField');
const submit = document.querySelector('#messageUserSubmit');

//DISPLAY ALERT

alertBanner.innerHTML = `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
    `;

alertBanner.addEventListener('click', (e) => {
	const element = e.target;
	if (element.classList.contains('alert-banner-close')) {
		alertBanner.style.display = 'none';
	}
});

//MESSAGE USER

submit.addEventListener('click', () => {
	if (user.value === '' && message.value === '') {
		alert('Please enter a user and message!');
	} else if (user.value === '') {
		alert('Please enter a user!');
	} else if (message.value === '') {
		alert('Please enter a message to the user!');
	} else {
		alert(`Message sent to ${user.value}!`);
	}
});
