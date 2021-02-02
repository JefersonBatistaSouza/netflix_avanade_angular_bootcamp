function autenticar(nome_telefone, senha){
    //alert(nome_telefone +" "+ senha);
    var hash = md5('netflixclone');
    if((nome_telefone == "netflix") && md5(senha) == hash){
        window.location.href = "/netflix";
    }else{
        alert("Senha ou Usuario Incorreto");
    }
}
