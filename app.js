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

//chart.js - main traffic
//create datasets for main traffic chart
let hourlyData = [ 0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1500, 2000, 1500, 2250 ];
let dailyData = [ 250, 600, 200, 2400, 3200, 3000, 2900, 1900, 1000, 1200, 200 ];
let weeklyData = [ 10000, 14000, 24000, 20000, 13000, 13400, 25000, 23000, 15000, 20000, 30000 ];
let monthlyData = [ 240000, 500000, 450000, 700000, 600000, 400000, 500000, 600000, 300000, 400000, 650000 ];

const ctx = document.querySelector('#traffic-chart').getContext('2d');
const trafficChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: [ '16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31' ],
		datasets: [
			{
				label: 'Stuff',
				backgroundColor: 'rgba(115,119,191, 0.1)',
				lineTension: 0,
				pointRadius: 6,
				pointBackgroundColor: 'white',
				pointBorderWidth: 3,
				borderColor: 'rgb(115,119,191)',
				data: hourlyData
			}
		]
	},
	options: {
		responsive: true,
		legend: {
			display: false
		}
	}
});

//main traffic chart interactivity
const setChartData = (chart, data) => (chart.data.datasets[0].data = data);
document.addEventListener('click', (e) => {
	if (e.target.id === 'hourlyTraffic') {
		setChartData(trafficChart, hourlyData);
	} else if (e.target.id === 'dailyTraffic') {
		setChartData(trafficChart, dailyData);
	} else if (e.target.id === 'weeklyTraffic') {
		setChartData(trafficChart, weeklyData);
	} else if (e.target.id === 'monthlyTraffic') {
		setChartData(trafficChart, monthlyData);
	}
	trafficChart.update();
});

//change chart name style
const trafficNav = document.querySelector('#traffic-nav');
const trafficNavLink = document.querySelectorAll('.traffic-nav-link');
trafficNav.addEventListener('click', changeButton);

function changeButton(e) {
	if (e.target.className === 'traffic-nav-link') {
		for (let i = 0; i < trafficNavLink.length; i++) {
			trafficNavLink[i].classList.remove('active');
		}
		e.target.classList.add('active');
	}
}

//chart.js - daily traffic
const dtc = document.querySelector('#daily-traffic-chart').getContext('2d');
const dailyChart = new Chart(dtc, {
	type: 'bar',
	data: {
		labels: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
		datasets: [
			{
				barPercentage: 0.5,
				backgroundColor: 'rgb(77, 76, 114)',
				data: [ 75, 100, 175, 125, 225, 200, 100 ]
			}
		]
	},
	options: {
		responsive: true,
		legend: {
			display: false
		}
	}
});

const muc = document.querySelector('#mobile-users-chart').getContext('2d');
const mobileUsersChart = new Chart(muc, {
	type: 'doughnut',
	data: {
		labels: [ 'Phone', 'Tablet', 'Desktop' ],
		datasets: [
			{
				label: 'Users %',
				backgroundColor: [ '#3e95cd', '#8e5ea2', '#3cba9f' ],
				data: [ 34, 45, 23 ]
			}
		]
	},
	options: {
		legend: {
			position: 'right',
			labels: {
				fontSize: 24
			}
		}
	}
});

//bell notifications
const bell = document.querySelector('#bell-icon');
