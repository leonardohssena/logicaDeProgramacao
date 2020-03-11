// Pensando em todos os números naturais inferiores a 10 que são múltiplos de 3 ou 5, temos 3, 5, 6 e 9.
// Somando esses múltiplos obtemos o valor 23.
// Utilize um algorítimo para calcular a soma de todos os múltiplos de 3 ou 5 abaixo de 1000

const checaMultiplos = (maximo, multiplicadores) => {
  let multiplos = []
  for (let i = maximo - 1; i > 0; i--) {
    multiplos = multiplicadores.some(multiplicador => i % multiplicador === 0) ? [ ...multiplos, i ] : [ ...multiplos ]
  }
  return multiplos.sort((a, b) => a-b)
}

const maximo = 1000
const multiplicadores = [3, 5]

const somaArray = (array) => {
  return array.reduce((acc, curr) => acc + curr, 0)
}

const multiplos = checaMultiplos(maximo, multiplicadores)
const soma = somaArray(multiplos)

console.log(`Os múltiplos de [${multiplicadores}] menores que ${maximo} são [${multiplos}] e sua soma é ${soma}`)

