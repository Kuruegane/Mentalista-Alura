var n = parseInt(Math.random() * 100);
var t = 3;

while (t > 0) {
  
  var k = parseInt(prompt("Digite um Número entre 0 e 99"));


  if (n == k) {
    Swal.fire(
    'Parabéns!',
    'Você Acertou!',
    'success', 
  )
    break
  }
    else if (k > n) {
      alert("O Número Secreto é Menor!")}
    else if (k < n) {
      alert("O Número Secreto é Maior!")}

    t = t - 1;
}

if (k != n) {
 Swal.fire(
  'Essa Não!',
  'Suas Tentativas Acabaram! O Número Era: ' + n,
  'error', 
)
}
