//const arr = ['matheus', 'Andre','Julio','Mauricio','Marcelo']

//const [a,b,...c] = arr

/* Aloca o a = matheus, b = Andre  e c= [Julio, Mauricio , Marcelo]

    Para chamar um elemento do grupo c, se usa o [], seguindo a logica do array
*/

//console.log(c[0])
/*
const carros = {
    marca: 'renault',
    modelo: 'duster',
    cor: 'Verde'
}

const {modelo:tipo} = carros 

console.log(tipo)

const frutas = ['banana', 'pera', 'melancia']

const [a, ...resto_das_frutas] = frutas

console.log(a)
console.log(resto_das_frutas)
*/

/*
function empresa ({s1}){
    console.log(s1)
    console.log(suporte)
    console.log(dev)
}
*/

const suporte = {
    s1: 'Matheus',
    s2: 'julio',
    s3: 'Andre'
}

const dev = {
    d1: 'Mauricio',
    d2: 'Marcelo'
}

//empresa(suporte,dev)

const {s1:r1} = suporte

console.log(r1)

