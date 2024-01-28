/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hasta aquí el generador de dominios");
};

let pronoun = ["the", "a"];
let adj = ["wonderful", "beautiful"];
let noun = ["guineapig", "toast"];
let domain = [".es", ".com", ".org"];

for (let i = 0; i <= pronoun.length - 1; i++) {
  for (let j = 0; j <= adj.length - 1; j++) {
    for (let k = 0; k <= noun.length - 1; k++) {
      for (let l = 0; l <= domain.length - 1; l++) {
        console.log(pronoun[i] + adj[j] + noun[k] + domain[l]);
      }
    }
  }
}
