let wrldTime = {
	addEventListener: Element.prototype.addEventListener.bind(this),
	dispatchEvent: Element.prototype.dispatchEvent.bind(this)
};