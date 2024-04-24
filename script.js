let ticked = document.querySelectorAll(".funnel_checkbox");

function myFunc(val) {
	ticked.forEach((element) => {
		if (element.id !== val) {
			element.checked = false;
		}
	});
}
