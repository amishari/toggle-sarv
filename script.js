let ticked = document.querySelectorAll(".funnel_checkbox");

function myFunc(val) {
	ticked.forEach((element) => {
		if (element.id !== val) {
			element.checked = false;
		}
	});
}

let signs = document.querySelector(".quantity-btn");

function decrease() {
	let input = document.querySelector(".quantity-input");
	let current = input.value;
	if (current > 1) {
		input.value = +current - 3;
	}
}
function increase() {
	let input = document.querySelector(".quantity-input");
	let current = input.value;
	input.value = +current + 3;
}
