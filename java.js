// alert("Hola Mundo!");

const slides = document.querySelectorAll(".slide");
const botonSiguiente = document.querySelector(".nextBtn");
const botonAnterior = document.querySelector(".prevBtn");

slides.forEach(function (slide, index){
	slide.style.bottom = `${index * 100}%`;
	});

let counter = 0;

botonSiguiente.addEventListener("click", function(){
	counter++;
	carousel();
	});

botonAnterior.addEventListener("click", function(){
	counter--;
	carousel();
	});

function carousel() {
	if (counter < slides.length - 1){
		botonSiguiente.style.display = "block";
	} else {
		botonSiguiente.style.display = "none";
	}
	if (counter > 0) {
		botonAnterior.style.display = "block";
	} else {
		botonAnterior.style.display = "none"; 
	}
		slides.forEach(function (slide){
			slide.style.transform = `translateY(-${counter * 100}%)`;	
	});
		botonAnterior.style.display = "none";
} 

let inactivoToggle = document.querySelector("i.bi.bi-toggle-off");
let activoToggle = document.querySelector("i.bi.bi-toggle-on");
let colorDocument = document.querySelector("link#colorDocumento");
let hojaEstilo = colorDocument.getAttribute('href');

function color() {
	let hojaEstilo = colorDocument.getAttribute('href');
	switch (hojaEstilo) {
	case 'Estilos.css':
		inactivoToggle.style.display = "none";
		activoToggle.style.display = "block";
		colorDocument.setAttribute('href', 'Estilos2.css');
		break;
	default: 
		inactivoToggle.style.display = "block";
		activoToggle.style.display = "none";
		colorDocument.setAttribute('href', 'Estilos.css');
		break;
	}
}