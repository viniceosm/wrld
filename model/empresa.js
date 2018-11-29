class Empresa {
	constructor (_nome, _moeda = 0) {
		Object.assign(this, {
			_nome,
			_mercadorias: [],
			_moeda,
			vagas: [],
			funcionarios: []
		});
	}

	get nome() {
		return this._nome;
	}

	set nome(nome) {
		this._nome = nome;
	}

	addMercadorias(mercadorias) {
		for (let mercadoria of mercadorias) {
			this._mercadorias.push(mercadoria);
		}
	}

	venderMercadoria(pessoa, nomeMercadoria, fnCallback) {
		let mercadoriaEncontrada = this._mercadorias.find((mercadoria) => {
			return mercadoria.produto.nome === nomeMercadoria;
		})

		if (pessoa._moeda >= mercadoriaEncontrada.preco) {
			pessoa._moeda -= mercadoriaEncontrada.preco;

			pessoa._produto = { ...mercadoriaEncontrada.produto, quantidade: 1 };

			mercadoriaEncontrada.quantidade--;

			this._moeda += mercadoriaEncontrada.preco;

			if (mercadoriaEncontrada.quantidade == 0) {
				this._mercadorias = this._mercadorias.map((mercadoria) => {
					if (mercadoria.produto.nome !== nomeMercadoria) {
						return mercadoria;
					}
				});
			}

			fnCallback(true, mercadoriaEncontrada);
			return;
		} else {
			console.warn('Sistema: Seu saldo é inválido.');
		}

		fnCallback(false);
	}

	criarVaga(descricao, salario, quantidade) {
		if (this.vagas.findIndex(vaga => vaga.descricao === descricao) == -1) {
			this.vagas.push({ descricao, salario, quantidade });
		} else {
			console.warn('Sistema: Já existe uma vaga com essa descrição');
		}
	}
}