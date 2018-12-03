let pessoas = [];
let comidas = [];
let empresas = [];

(() => {
	let luiz = criaObjetoPushArray(new Pessoa('Luiz'), pessoas);
	let pao = criaObjetoPushArray(new Comida('Pao'), comidas);

	// Cria empresa com suas mercadorias
	let padariaDoLuiz = luiz.criarEmpresa('Padaria do luiz');

	padariaDoLuiz.addMercadorias([
		{ produto: pao, quantidade: 2, preco: 1 }
	]);
})();

(() => {
	let david = criaObjetoPushArray(new Pessoa('David'), pessoas);

	// Cria empresa com vaga para funcionários
	let nuBank = david.criarEmpresa('Nubank');

	nuBank.criarVaga('Programador', 20000, 1);
})();

(() => {
	let vini = criaObjetoPushArray(new Pessoa('Vini', 10), pessoas);

	// Faz compra de pão
	let empresa = procuraEmpresaPorNome('Padaria do luiz');
	let mercadoria = 'Pao';

	vini.comprarDeEmpresa(empresa, mercadoria);
	vini.comprarDeEmpresa(empresa, mercadoria);

	// Candidata à uma vaga de programador
	let nuBank = procuraEmpresaPorNome('Nubank');

	vini.candidatarAVaga(nuBank, 'Programador');
})();



function criaObjetoPushArray(objeto, array) {
	array.push(objeto);

	return objeto;
}

function procuraEmpresaPorNome (nome) {
	return empresas.find((empresa) => {
		return empresa.nome == nome;
	})
}