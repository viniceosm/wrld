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

		if (this._datetime.getDate() == 5) {
			wrldTime.emit(new Event('pagamento-dia'));
		}
	}

	getUltimoDia() {
		let d = new Date(this._datetime.getTime());

		d.setMonth(d.getMonth() + 1);
		d.setDate(-1);

		return d.getDate();
	}

	diffDatas(data1, data2) {
		let dia1 = data1.getTime();
		let dia2 = data2.getTime();

		let diaMaior = Math.max(dia1, dia2);
		let diaMenor = Math.min(dia1, dia2);

		let diffMs = diaMaior - diaMenor;

		return diffMs;
	}

	diasFaltaPagamento() {
		let diaPagamento = 5;

		let somaMesDia1 = (this._datetime.getDate() > diaPagamento) ? 1 : 0;
		let data1 = new Date(this._datetime.getFullYear(), this._datetime.getMonth() + somaMesDia1, diaPagamento);
		let data2 = this._datetime;

		let faltaMs = this.diffDatas(data1, data2);

		return Math.ceil(faltaMs / (1000 * 60 * 60 * 24));
	}
}