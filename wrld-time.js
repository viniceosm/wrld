let wrldTime = {
	on: Element.prototype.addEventListener.bind(this),
	emit: Element.prototype.dispatchEvent.bind(this)
};