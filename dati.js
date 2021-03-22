const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];


// Partendo dalla seguente struttura dati , mostriamo in pagina
// tutte le icone disponibili come da layout.

// Milestone 2
// Coloriamo le icone per tipo.
// let lista = $("#lista")

icone.forEach((item, i) => {
	let color;
	if (item.type == "animal") {
		 color = "blue";
	}else if (item.type == "vegetable") {
		 color = "orange";
	}else {
		 color = "purple";
	}
	$("#icone").append(`<div class="card ${item.type}"> <i class="${item.family} ${item.prefix}${item.name} ${color}"></i><span>${item.name}</span> </div>`);

});

// Milestone 3 (BONUS)🏥
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

$('#lista').change(function() {
	let valore = $(this).val();
	if (valore == "All") {
		$(".card").show();
	}else {
		$(".card").hide();
		$(`.card.${valore}`).show();
	}
});
