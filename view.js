window.addEventListener('load', function () {
	setTempoDatetime();

	setInterval(function () {
		setTempoDatetime();
	}, wrld.tempo._duracaoDia);

	function setTempoDatetime() {
		document.querySelector('#tempo-datetime').innerHTML = wrld.tempo.datetimeString;
		document.querySelector('#tempo-duracao-dia').innerHTML = (wrld.tempo._duracaoDia / 1000) + 's equivale 1 dia';
		document.querySelector('#tempo-duracao-mes').innerHTML = (wrld.tempo._duracaoDia * 30 / 1000) + 's equivale 1 mes';

		document.querySelector('#tempo-dias-falta-salario').innerHTML = (wrld.tempo.diasFaltaPagamento()) + ' dias para receber salario';
	}
});