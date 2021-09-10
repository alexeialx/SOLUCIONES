// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// // function contarCaracteres(cadena=""){
// //     if(!cadena){
// //         console.warn("la cadena esta vacia")
// //     }else{
// //         console.info(`la cadena"${cadena}" tiene ${cadena.length} caracteres`)
// //     }

// // }

// const contarCaracteres= (cadena="")=>(!cadena)? console.warn("la cadena esta vacia"):console.info(`la cadena"${cadena}" tiene ${cadena.length} caracteres`);

// contarCaracteres("hola mundo")

// //     }

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// const textoRecortado= (cadena="",longitud="")=>(!cadena)?console.warn("la cadena esta vacia"):console.info(cadena.slice(0,longitud))

// textoRecortado("hola mundo",4)


// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// const cadenaArreglo=(cadena="",separador=undefined)=>(!cadena)?console.warn("no ingresaste una cadena de texto"):(separador===undefined)?console.warn("no ingresaste el caracter separador"):console.info(cadena.split(separador));

// cadenaArreglo("hola que tal"," ")


// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// const repetir =(texto="",veces="")=>{
//     if(!texto){
//         return console.warn("no ingresaste u texto")
//     }
//     else if(veces===0){
//         return console.warn("el numero de veces no puede ser 0")
//     }
//     else if(Math.sign(veces)===-1){
//         return console.warn("el numero de veces no puede ser un numero negativo")
//     }else{
//     for (let i=1; i<=veces;i++)console.log(`${texto}, ${i}`)
//     }
// }

// repetir("hola mundo",3)

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

// const reversa=(texto="")=>{
//     if (texto){
//         return console.info(texto.split("").reverse().join(""))  
//     }else{
//         return console.warn("esto no es un texto")
//     }
// }

// reversa("hola mundo")

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const textoCadena=(cadena="",texto="")=>{
    if(!cadena){
        return console.warn("no ingresar la palabra a evaluar")   
    }
    if (!texto){
        return console.warn("no ingresaste el texto a buscar")
    }
    let i=0;
    contador=0;
    while(i !==-1){
        i=cadena.indexOf(texto,i);
        if(i !==-1){
            i++;
            contador++;
        }
    }
    return console.info(`la palabra ${texto} se repite ${contador} veces`)
}

textoCadena("texto mundo no tiene mundo del mundo","mundo")

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (frase="")=>{
    if(!frase){
        return console.warn("no ingresaste la frases")
    }
    frase=frase.toLowerCase();
    let alrevez=frase.split("").reverse().join("");

    return (frase!==alrevez) ? console.warn(`no es palindromo palabra original ${frase} palabra alrevez ${alrevez}`)
    :console.info(`si es palindromo palabra original ${frase} palabra alrevez ${alrevez}`)
    
}
 palindromo("oruras")
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 const eliminar=(texto="",patron="")=>
     (!texto)? console.warn("no ingresaste el texto")
     :(!patron)? console.warn("no ingresaste un otron de caracteres")
     :console.info(texto.replace(new RegExp(patron,"ig"),""))
 eliminar("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
 eliminar("saasaslalsooasklalksj akjshkahs ka hkshkaskh s.s,-.ma als,.as- laksja,sa.samsoiajsl","[a-z]")