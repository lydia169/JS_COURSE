// const a= 0
// if (a<=100 && a>=80){
//     console.log("Mension tres bien")
// }
// else if (a<=79 && a>=70){
//     console.log("Mension bien")
// }
// else if (a<=69 && a>=50){
//         console.log("Mension assez bien")
//     }
// else if (a<=49 && a>=0){
//     console.log("Mension insuffisant")
// }
// else {console.log("Erreur: la note doit etre entre 0 et 100")
// }

// const a= 2
// const b= 3
// const c= 5
// const delta= b*b-4*a*c
// if (delta>0){
//     const x1= (-b+Math.sqrt(delta))/(2*a)
//     const x2= (-b-Math.sqrt(delta))/(2*a)
//     console.log(`les solutions sont: "+x1+" et "+x2"`)
// }

// else if (delta=0){
//     const x= (-b/(2*a))
//     console.log("pas des racines reels")

// }
// else

function listeElementsUpdated( fruits, nouvelleValeur, i) {
  
  if ( i>=0 && i<fruits.length){ 
    fruits[i] = nouvelleValeur;
    console.log(fruits);
  }

else { console.log("Erreur: l'indece doit etre entre 0 et la longueur du tableau");
 }
}
 const fruits = ["mangue", "banane", "orange", "pomme", "fraise"];
listeElementsUpdated(fruits, "avocat", 4);

