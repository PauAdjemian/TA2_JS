function reverseString(texto){
   
    let aux = texto.split("").reverse().join("");
    return aux;
};

const texto = document.getElementById('texto');
const boton = document.querySelector('button');
const resultado = document.getElementById('resultado');
boton.addEventListener("click", () => {
    const result = reverseString(texto.value);
            resultado.textContent = result;    
});