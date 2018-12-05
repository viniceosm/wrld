window.addEventListener('load', function () {
	setTempoDatetime();

	setInterval(function () {
		setTempoDatetime();
	}, wrld.tempo._duracaoDia);

	document.getElementById('pesssoa-selecionada').innerHTML = '';
	for (let index in pessoas) {
		document.getElementById('pesssoa-selecionada').innerHTML += `<option value="${index}">${pessoas[index].nome}</option>`;
	}

	document.getElementById('pesssoa-selecionada').addEventListener('change', function () {
		setInfoPessoaSelecionada();
	});

	wrldTime.on('pagamento-dia', function () {
		setInfoPessoaSelecionada();
	});

	function setTempoDatetime() {
		document.querySelector('#tempo-datetime').innerHTML = wrld.tempo.datetimeString;
		document.querySelector('#tempo-duracao-dia').innerHTML = (wrld.tempo._duracaoDia / 1000) + 's equivale 1 dia';
		document.querySelector('#tempo-duracao-mes').innerHTML = (wrld.tempo._duracaoDia * 30 / 1000) + 's equivale 1 mês';

		document.querySelector('#tempo-dias-falta-salario').innerHTML = (wrld.tempo.diasFaltaPagamento()) + ' dias para receber salario';
	}

	function setInfoPessoaSelecionada() {
		let indexPessoa = document.getElementById('pesssoa-selecionada').value;
		if (indexPessoa.trim() !== '') {
			let pessoaSelecionada = pessoas[indexPessoa];

			document.getElementById('infos-pessoa-selecionada').innerHTML = `${pessoaSelecionada.nome}<br>
				Moeda: ${pessoaSelecionada._moeda}`;

			document.getElementById('infos-pessoa-selecionada').innerHTML += `<div class="b">
					<div class="b-t">Emprego</div>
					<div class="b-c" id="infos-emprego-pessoa-selecionada"></div>
				</div>`;

			for (let [key, value] of Object.entries(pessoaSelecionada._emprego)) {
				document.getElementById('infos-emprego-pessoa-selecionada').innerHTML += `${key}: ${value}<br>`;
			}

			if (pessoaSelecionada._produtos.length > 0) {
				document.getElementById('infos-pessoa-selecionada').innerHTML += `<div class="b">
					<div class="b-t">Produtos</div>
					<div class="b-c" id="infos-prod-pessoa-selecionada"></div>
				</div>`;

				for (let index in pessoaSelecionada._produtos) {
					let prod = pessoaSelecionada._produtos[index];

					if (index > 0) {
						document.getElementById('infos-prod-pessoa-selecionada').innerHTML += `<hr>`;
					}

					for (let [key, value] of Object.entries(prod)) {
						document.getElementById('infos-prod-pessoa-selecionada').innerHTML += `${key}: ${value}<br>`;
					}
				}
			}

		}
	}
});