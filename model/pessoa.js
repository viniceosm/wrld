class Pessoa {
	constructor (_nome, _moeda = 0) {
		Object.assign(this, {
			_nome,
			_moeda,
			_produto: []
		});
	}

	get nome() {
		return this._nome;
	}

	set nome(nome) {
		this._nome = nome;
	}

	criarEmpresa(nome) {
		let empresa = new Empresa(nome);
		empresas.push(empresa);

		return empresa;
	}

	comprarDeEmpresa(empresa, nomeMercadoria) {
		let self = this;

		empresa.venderMercadoria(self, nomeMercadoria, function (valido, mercadoria) {
			if (valido === true) {

			}
		});
	}
}