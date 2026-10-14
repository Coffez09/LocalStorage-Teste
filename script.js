
function salvar() {
    let nome = document.getElementById("nome").value;

    localStorage.setItem("nome", nome);

    document.getElementById("mensagem").innerHTML = "Seu nome foi salvo";
}
