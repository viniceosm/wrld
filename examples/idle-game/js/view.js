let pessoas = [];
let empresas = [];
let indexVini = 1;

wrld.setDuracaoDia(1 * 1000); // 1 segundo

(() => {
	let david = criaObjetoPushArray(new Pessoa('David'), pessoas);

	// Cria empresa com vaga para funcionários
	let nuBank = david.criarEmpresa('Nubank');

	nuBank.criarVaga('Programador', 2000, 1);
})();

(() => {
	let vini = criaObjetoPushArray(new Pessoa('Vini', 10), pessoas);

	// Candidata à uma vaga de programador
	let nuBank = procuraEmpresaPorNome('Nubank');

	vini.candidatarAVaga(nuBank, 'Programador');
})();

window.addEventListener('load', function () {
	let indexPessoaSelecionada = indexVini;

	setTempoDatetime();

	setInterval(function () {
		setTempoDatetime();
	}, wrld.tempo._duracaoDia);

	let pessoaSelecionada = pessoas[indexPessoaSelecionada];
	setInfoPessoaSelecionada();

	wrldTime.on('pagamento-dia', function () {
		setInfoPessoaSelecionada();
	});

	for (let el of [[document.getElementById('acelera-tempo'), 'keyup'], [document.getElementById('btn-acelera-tempo'), 'click']]) {
		el[0].addEventListener(el[1], function (e) {
			wrld.setDuracaoDia(0.5 * 1000); // 0.5 segundo
			setTimeout(function () {
				wrld.setDuracaoDia(1 * 1000); // 1 segundo
			}, 2 * 1000);
		});
	}


	function setTempoDatetime() {
		document.querySelector('#tempo-datetime').innerHTML = wrld.tempo.datetimeString;
		document.querySelector('#tempo-duracao-dia').innerHTML = (wrld.tempo._duracaoDia / 1000) + 's equivale 1 dia';
		document.querySelector('#tempo-duracao-mes').innerHTML = (wrld.tempo._duracaoDia * 30 / 1000) + 's equivale 1 mês';

		document.querySelector('#tempo-dias-falta-salario').innerHTML = (wrld.tempo.diasFaltaPagamento()) + ' dias para receber salario';
	}

	function setInfoPessoaSelecionada() {
		document.getElementById('infos-pessoa-selecionada').innerHTML = `${pessoaSelecionada.nome}<br>
			Moeda: ${pessoaSelecionada._moeda}`;
	}
});

function criaObjetoPushArray(objeto, array) {
	array.push(objeto);

	return objeto;
}

function procuraEmpresaPorNome(nome) {
	return empresas.find((empresa) => {
		return empresa.nome == nome;
	})
}