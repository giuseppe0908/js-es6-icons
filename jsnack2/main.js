// JSNACK 2
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// ES. [1,2,3,4,5,6,7,8] => [3,4,5,6] (a=2, b=5)

$(document).ready(() => {
	 const array = [1,2,3,4,5,6,7,8];
   console.log(array);
	 function funzione(array,a,b){
		const new_array = array.filter((item, i, array) =>{
			return i >= a && i <= b;
		});
      return new_array;
			// stessa cosa con .map
			//const new_array = array.map((item,i,array) =>{
			// 	 if(i >= a && i<=b){
			// 		 return item;
			// 	 }
			//  });
	}

   console.log(funzione(array,2,5));

})
// stesso esercizio svolto con slice e for
// $(document).ready(() => {
// 	const funzione = (array, a, b) => {
// 		const new_array = array.slice(a,b+1);
// 		return new_array;
// 	}
//
//   const array = [1,2,3,4,5,6,7,8,9];
// 	let risultato = funzione(array, 2,5);
// 	console.log(risultato);
// })

// stesso esercizio svolto con il for
// $(document).ready(() => {
// 	const array = [1,2,3,4,5,6,7,8,9];
// 	const funzione = (array, a, b) => {
// 	let new_array = [];
//  		for (var i = 0; i < array.length; i++) {
//    		if (i >= a && i <= b) {
//  				new_array.push(array[i]);
// 			}
//  		}
//  return new_array;
//  }
// 	 console.log(funzione(array,4,8));
//  })
