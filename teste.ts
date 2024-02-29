let disciplinas =  ['ppi', 'so', 'pds', 'esp']
    console.log(disciplinas)
    console.log(`quantidade: ${disciplinas.length}`)
    disciplinas.push('hist') //add fim
    disciplinas.unshift('qui') //add começo
// disciplinas.pop() //tira ultimo
    console.log(disciplinas)
    disciplinas.splice(0, 3) //retira oq ta na posição 1 e o prox
    console.log(disciplinas)

let cursos = new Array(4)
cursos[0] = 'informatica'
console.log(cursos)

enum Curso {    
    INFO = 'informatica',
    MECA =  'mecatronica',
    REDES = 'redes de computadores'
}

let estudante = {
    nome: 'sibele',
    matricula: 20211144010069,
    curso: Curso.INFO, 
    ano: 4
}

console.log(estudante)