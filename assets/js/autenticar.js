function autenticar(nome_telefone, senha){
    /*Exemple de criptografia em javascript*/
    var hash = md5('netflixclone');
    if((nome_telefone == "netflix") && md5(senha) == hash){
        window.location.href = "/netflix";
    }else{
        alert("Senha ou Usuario Incorreto\nUsuario:netflix\nSenha: netflixclone\nTudo em Minúsculo");
    }
}
