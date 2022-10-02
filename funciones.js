//Funciones sin parametros

function saludar(){
    console.log("Buenos dias chicos!");
}
saludar();



function sumar(){
    let num1=parseInt(prompt("Ingresa el primer numero"));
    let num2=parseInt(prompt("Ingresa el segundo numero"));
    let resultado=num1+num2;
    console.log("El resultado es: "+resultado);
}


for(let i=1;i<=3;i++){
    sumar();
}


//Funciones con parametros
function armarFrase(palabra1,palabra2){
    console.log("La frase es: "+palabra1+" "+palabra2+".");
}
armarFrase("Tengo","sueño");
armarFrase("Buenas","noches");

let p1=prompt("Ingresa la primera palabra para la frase");
let p2=prompt("Ingresa la segunda palabra para la frase");

armarFrase(p1,p2);



function calcularEdad(anioNac,anioActual){
    let edad=anioActual-anioNac;
    console.log("Tenes "+edad+" años");
}

calcularEdad(2002,2022);

calcularEdad(parseInt(prompt("Ingresa el año de tu nacimiento")),2022);



let precioProd=parseFloat(prompt("Ingresa el precio del producto"));

function calcularIva(precio){
    return precio * 0.21;
}

//precio=100 -> iva=21

let ivaCalculado = calcularIva(precioProd);
console.log("El iva = $"+ivaCalculado);
/////////
function calcularPrecioFinal(precio,iva){
    return precio + iva;
}

let precioFinal = calcularPrecioFinal(precioProd,ivaCalculado);
console.log("El precio final con iva incluido es $"+precioFinal);


//ambito de una variable (local o global)

let soyGlobal="soy un dato que esta siempre disponible";

function mostrarMensaje(){
    let soyLocal="Soy un dato que vive dentro de MostrarMensaje()";
    console.log(soyGlobal);
    console.log(soyLocal);
    return soyLocal;
}

let variableLocal=mostrarMensaje();

console.log(soyGlobal);
//console.log(soyLocal);
console.log(variableLocal);
console.log



//funcion anonima
const descuento = function (precio){
    return precio * 0.10
}
console.log(descuento(2000));

//funcion flecha (arrow function)
const suma = (num1,num2,num3) => num1+num2+num3;

console.log(suma(1,2,3));