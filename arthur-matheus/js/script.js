

function clickBotao(){
    alert("CUIDADO COM O CHIFRE")

    let texto = document.getElementById('text-nome')
    console.log(texto);
    texto.className= 'texto-legal'

    let texto2 = document.getElementById('text-nome2')
    console.log(texto2);
    texto2.className= 'texto-sentimental'

    let texto3 = document.getElementById('text-nome3')
    console.log(texto3);
    texto3.className= 'texto-estranho'

    let texto4 = document.getElementById('text-nome4')
    console.log(texto4);
    texto4.className= 'texto-infinito'
}
