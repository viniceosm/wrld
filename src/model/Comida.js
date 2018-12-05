class Comida {
	constructor (_nome) {
		Object.assign(this, {
			_nome
		});
	}

	get nome() {
		return this._nome;
	}

	set nome(nome) {
		this._nome = nome;
	}
}