function count() {
	let count = 0;
	const num = document.getElementById("num");
	const buttons = document.querySelectorAll(".button");
	buttons.forEach(function (button) {
		button.addEventListener("click", function (e) {
			let classes = e.currentTarget.classList;
			if (classes.contains("increase")) {
				++count;
				if (count > 0) {
					num.style.color = `rgb(80, 223, 80)`;
				}
			} else if (classes.contains("decrease")) {
				--count;
				if (count < 0) {
					num.style.color = `red`;
				}
			} else if (classes.contains("reset")) {
				count = 0;
			}
			num.textContent = count;
			if (count == 0) {
				num.style.color = `rgb(26, 26, 26)`;
			}
		});
	});
}
count();
