// Exercício 01
function Tratamento() {
  str = document.getElementById("Frase").value;
  tratado = document.getElementById("FraseTratada");
  let vetorText = str.split("");
  str = "";
  for (let c = 0; c < vetorText.length; c++) {
    if (
      vetorText[c] == "1" ||
      vetorText[c] == "2" ||
      vetorText[c] == "3" ||
      vetorText[c] == "4" ||
      vetorText[c] == "5" ||
      vetorText[c] == "6" ||
      vetorText[c] == "7" ||
      vetorText[c] == "8" ||
      vetorText[c] == "9" ||
      vetorText[c] == "0"
    ) {
      vetorText[c].push;
    } else {
      str += vetorText[c].toUpperCase();
    }
  }
  tratado.value = str;
  console.log(tratado);
}
