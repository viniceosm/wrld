let pessoas = [];
let comidas = [];
let empresas = [];

(() => {
	let luiz = criaObjetoPushArray(new Pessoa('Luiz'), pessoas);
	let pao = criaObjetoPushArray(new Comida('Pao'), comidas);

	let padariaDoLuiz = luiz.criarEmpresa('Padaria do luiz');

	padariaDoLuiz.addMercadorias([
		{ produto: pao, quantidade: 2, preco: 1 }
	]);
})();

(() => {
	let vini = criaObjetoPushArray(new Pessoa('Vini', 10), pessoas);

	let empresa = procuraEmpresaPorNome('Padaria do luiz');
	let mercadoria = 'Pao';

	vini.comprarDeEmpresa(empresa, mercadoria);
	vini.comprarDeEmpresa(empresa, mercadoria);
})();



function criaObjetoPushArray(objeto, array) {
	array.push(objeto);

	return objeto;
}

function procuraEmpresaPorNome (nome) {
	return empresas.find((empresa) => {
		return empresa.nome = nome;
	})
}