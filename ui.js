function uCard (label = '', inner = '') {
	return (UCard => {
		UCard.classList.add('u-card');
		UCard.innerHTML = `
			<div class="u-list-header">
				<h2 class="typo-list-title">${label}</h2>
			</div>
			<div class="u-card-inner">
				${inner}
			</div>
		`
		return UCard;
	})(document.createElement('div'));
}

function progress (label, percentage=0, size='l') {
	return (progress => {
		progress.classList.add('u-progress', `size-${size}`);
		progress.innerHTML = `
		<ul class="u-progress-bar" style="animation-delay: 0s;">
			<li class="primary" style="width: ${percentage}%;"></li>
		</ul>
		<ul class="u-progress-labels">
			<li class="secondary" style="text-shadow: 0px 0px 2px #000000a8;">${label}</li>
		</ul>`
		return progress
	})(document.createElement('div'));
}

function checkbox (label, size='l') {
	return (checkbox => {
		checkbox.classList.add(...(`u-button size-${size} show-all toggle-problem-only`.split(' ')));
		checkbox.innerHTML = `
			<input type="checkbox">
			<span>${label}</span>`
		return checkbox;
	})(document.createElement('label'));
}

module.exports = {
	uCard,
	progress,
	checkbox
}
