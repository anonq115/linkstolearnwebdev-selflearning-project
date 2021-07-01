const mainLinks = document.querySelector(".main-links");
x = document.getElementsByClassName('menu-icon');
x[0].addEventListener('click', function () {

	toggleList(); // triggers menu list
	toggleX(); //triggers burger animation
});


function toggleList() {

	mainLinks.classList.toggle('active');
	console.log("testtetet");
}

function toggleX() {
	x[0].classList.toggle('hover');
}


//
