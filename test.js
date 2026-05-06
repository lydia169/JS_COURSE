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

//  let personne = {
//   nom: "lydia",
//   age: 25 ,
//   ville: "Goma",
       
// };
// if (personne.age < 25 && personne.age >= 18) {
//   console.log(personne.nom  +  "est un etudiant")
// }
// else{
//   console.log(personne.nom + "n'est pas un etudiant");
// };

let personne = {
  nom: "lydia",
  age: 25,
  ville: "Goma",
};

let estEtudiant;

if (personne.age >= 18 && personne.age < 25) {
  estEtudiant = true;
} else {
  estEtudiant = false;
}

console.log(estEtudiant);



