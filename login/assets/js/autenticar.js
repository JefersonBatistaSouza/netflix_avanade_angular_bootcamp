function autenticar(nome_telefone,senha){
    senha = CryptoJS.MD5("netflix");
    senhaCRIPT = CryptoJS.MD5(senha);
    if((nome_telefone == "netflix") && senha == senhaCRIPT){
        alert("Login OK");
    }else{
        alert("Senha ou Usuario Incorreto");
    }
}
