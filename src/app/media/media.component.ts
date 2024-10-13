export function media(lista:number[]) {

  let sumaA = 0;
  lista.forEach(numero => {
    sumaA += numero;  
  });

  return sumaA/lista.length;
}