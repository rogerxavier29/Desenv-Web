/*  */

function validacao(){

    var senha = cadastro.senha.value;
    var confirmesenha = cadastro.confirmesenha.value;
    var nomec = cadastro.nomec.value;
    var endereço = cadastro.endereço.value;
    var cidade = cadastro.cidade.value;
    var uf = cadastro.uf.value;
    var nomedousuario = cadastro.nomedousuario.value;




    if (document.cadastro.nomec.value==""){
        alert("Por favor digite o campo Nome");
        document.cadastro.nomec.focus();
        return false;

    }

    if (document.cadastro.endereço.value==""){
        alert("Por favor digite o seu Endereço");
        document.cadastro.endereço.focus();
        return false;

    }

    if (document.cadastro.cidade.value==""){
        alert("Por favor digite a sua Cidade");
        document.cadastro.cidade.focus();
        return false;

    }

    if (document.cadastro.uf.value==""){
        alert("Por favor digite o seu Estado");
        document.cadastro.uf.focus();
        return false;    

    }

    if (document.cadastro.nomedousuario.value==""){
        alert("Por favor digite o seu Nome do Usuario");
        document.cadastro.nomedousuario.focus();
        return false;
    }
    if(senha == " " || senha.length <=5){
        alert("Preencha o campo senha com no minimo 6 caracteres");
        cadastro.senha.focus();
        return false;
    }    

    if(senha != confirmesenha){
        alert("As Senhas devem ser IGUAIS");
        cadastro.senha.focus();
        return false;
     
    }
    
    document.write("Seu Nome Completo é: "+nomec);
    document.write ('<br>')
    document.write ('<br>')
    document.write("Seu Endereço é: "+endereço);
    document.write ('<br>')
    document.write ('<br>')
    document.write("Sua Cidade é: "+cidade);
    document.write ('<br>')
    document.write ('<br>')
    document.write("Seu Estado é: "+uf);
    document.write ('<br>')
    document.write ('<br>')
    document.write("Nome do usuario: "+nomedousuario);
    document.write ('<br>')
    document.write ('<br>')
    document.write("Sua senha é: "+senha)
    document.write ('<br>')
    document.write ('<br>')
    document.write("Sua Confirma senha é: "+confirmesenha);
}

