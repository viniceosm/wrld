class Pessoa {
	constructor (_nome, _moeda = 0) {
		Object.assign(this, {
			_nome,
			_moeda,
			_produtos: [],
			_emprego: {}
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
				console.log('Sistema: Mercadoria comprada.');
			}
		});
	}

	candidatarAVaga(empresa, descricao) {
		let self = this;

		empresa.contratar(this, descricao, function (valido, funcao) {
			if (valido === true) {
				self._emprego = { empresa, funcao };
			}
		});
	}
}