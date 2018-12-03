class Tempo {
	constructor () {
		Object.assign(this, {
			_datetime: localStorageIfHas(),
			_duracaoDia: 60000, // 1 minuto equivale a 1 dia
			eventTrocarDia: new Event('trocar-dia')
		});

		function localStorageIfHas() {
			if (getStorage('tempo-datetime') == null) {
				setStorage('tempo-datetime', new Date());
			} else {
				console.log(getStorage('tempo-datetime'));
			}

			return new Date(getStorage('tempo-datetime'));
		}
	}

	get datetimeString() {
		return this._datetime.toLocaleDateString('pt-BR');
	}

	set duracaoDia(duracaoDiaMs) {
		this._duracaoDia = duracaoDiaMs;

		this.intervalDia = setInterval(() => {
			this.trocarDia();
		}, this._duracaoDia);
	}

	trocarDia() {
		this._datetime.setDate(this._datetime.getDate() + 1);
		setStorage('tempo-datetime', this._datetime);

		wrldTime.emit(this.eventTrocarDia);
	}
}