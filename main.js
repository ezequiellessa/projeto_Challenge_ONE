
    var textoinput = document.querySelector("#textarea");
    var textooutput = document.querySelector("#textarea2");
    var botaoLimpar = document.getElementById('botaoLimpar');





        function criptografar() {
            var texto = textoinput.value;
            var resultado = texto.replace(/e/g, "enter").replace(/i/g, "ingrid").replace(/o/g, "onda").replace(/a/g, "angu").replace(/u/g, "unha");
            document.querySelector("#textarea2").innerHTML= resultado;
            if(document.querySelector("#textarea").value.length < 1){
                alert('Digite Algo!!!!');
            }

}

function descriptografar() {
    var texto = textoinput.value;
    var desresultado = texto.replace(/enter/g, "e").replace(/ingrid/g, "i").replace(/onda/g, "o").replace(/angu/g, "a").replace(/unha/g, "u");
    document.querySelector("#textarea2").innerHTML= desresultado;




}

function copiar(){

    document.querySelector("#textarea2").select();
    document.execCommand("copy");
    if(document.querySelector("#textarea2").value.length < 1){
        alert('Nada para copiar');
    }
     else{
        alert('Parabens!! Copiado.');
        }

    }
  


function limpar(){
   
    document.getElementById("textarea2").value = "";
    document.getElementById("textarea").value = "";
}
