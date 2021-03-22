
// JSNACK 1
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
// Usiamo il forEach
$(document).ready(() => {

 const bikes = [
	 {
		 nome: "bmx",
		 peso: 10,
	 },
	 {
		 nome: "graziella",
		 peso: 2,
	 },
	 {
		 nome: "bici",
		 peso: 4,
	 },
	 {
		 nome: "mountbike",
		 peso: 15,
	 },
 ];
  let index = 0;
	let min = bikes[0].peso;
	bikes.forEach((item, i) => {
		if (item.peso < min) {
		 	 min = item.peso;
		 	index = i;
		}

	});
  console.log(`${bikes[index].nome} e il suo peso è ${min} `);



})
