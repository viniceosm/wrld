window.addEventListener('load', function () {
	let indexPessoaSelecionada = '';
	let indexEmpresaSelecionada = '';

	setTempoDatetime();

	setInterval(function () {
		setTempoDatetime();
	}, wrld.tempo._duracaoDia);

	inicializaAutocompletev();

	document.getElementById('pesssoa-selecionada').addEventListener('change', function () {
		indexPessoaSelecionada = document.getElementById('pesssoa-selecionada').value;

		if (indexPessoaSelecionada.trim() !== '') {
			let pessoaSelecionada = pessoas[indexPessoaSelecionada];
			document.getElementById('pesssoa-selecionada').value = pessoaSelecionada.nome;
		}

		setInfoPessoaSelecionada();
	});

	document.getElementById('empresa-selecionada').addEventListener('change', function () {
		indexEmpresaSelecionada = document.getElementById('empresa-selecionada').value;

		if (indexEmpresaSelecionada.trim() !== '') {
			let empresaSelecionada = pessoas[indexEmpresaSelecionada];
			document.getElementById('empresa-selecionada').value = empresaSelecionada.nome;
		}

		setInfoEmpresaSelecionada();
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
		let indexPessoa = indexPessoaSelecionada;
		if (indexPessoa.trim() !== '') {
			let pessoaSelecionada = pessoas[indexPessoa];

			document.getElementById('infos-pessoa-selecionada').innerHTML = `${pessoaSelecionada.nome}<br>
				Moeda: ${pessoaSelecionada._moeda}`;

			addEmpresaPessoa();
			addProdutosPessoa();

			function addProdutosPessoa() {
				if (pessoaSelecionada._produtos.length > 0) {
					document.getElementById('infos-pessoa-selecionada').innerHTML += `<div class="b">
						<div class="b-t">Produtos</div>
						<div class="b-c" id="infos-prod-pessoa-selecionada"></div>
					</div>`;

					appendKeyValueOfObjectIn(pessoaSelecionada._produtos, 'infos-prod-pessoa-selecionada');
				}
			}

			function addEmpresaPessoa() {
				if (pessoaSelecionada._emprego.empresa != null) {
					document.getElementById('infos-pessoa-selecionada').innerHTML += `<div class="b">
							<div class="b-t">Emprego</div>
							<div class="b-c" id="infos-emprego-pessoa-selecionada"></div>
						</div>`;

					document.getElementById('infos-emprego-pessoa-selecionada').innerHTML += `empresa: ${pessoaSelecionada._emprego.empresa.nome}<br>`;

					for (let [key, value] of Object.entries(pessoaSelecionada._emprego.funcao)) {
						document.getElementById('infos-emprego-pessoa-selecionada').innerHTML += `${key}: ${value}<br>`;
					}
				}
			}
		}
	}

	function setInfoEmpresaSelecionada() {
		if (indexEmpresaSelecionada.trim() !== '') {
			let empresaSelecionada = empresas[indexEmpresaSelecionada];

			document.getElementById('infos-empresa-selecionada').innerHTML = `${empresaSelecionada.nome}<br>
				Moeda: ${empresaSelecionada._moeda}`;
		}
	}

	function appendKeyValueOfObjectIn(objects, idElement) {
		for (let index in objects) {
			let object = objects[index];

			if (index > 0) {
				document.getElementById(idElement).innerHTML += `<hr>`;
			}

			for (let [key, value] of Object.entries(object)) {
				document.getElementById(idElement).innerHTML += `${key}: ${value}<br>`;
			}
		}
	}

	function inicializaAutocompletev() {
		individual('pesssoa-selecionada', function (elAc) {
			for (let index in pessoas) {
				elAc.innerHTML += `<div class="datalist-option" value="${index}">${pessoas[index].nome}</div>`;
			}
		});

		individual('empresa-selecionada', function (elAc) {
			for (let index in empresas) {
				elAc.innerHTML += `<div class="datalist-option" value="${index}">${empresas[index].nome}</div>`;
			}
		});

		function individual(idInput, fnCallback) {
			document.getElementById('ac-' + idInput).innerHTML = '';

			fnCallback(document.getElementById('ac-' + idInput));

			autocompletev.adicionaEventosDataList('#' + idInput);
		}
	}
});