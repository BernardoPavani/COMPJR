function validarEmail(input) {
    // Expressão regular para validar e-mail
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var email = input.value;

    if (regexEmail.test(email)) {
        document.getElementById('mensagemErro').innerText = '';
        // O e-mail é válido, você pode executar outras ações aqui se desejar
    } else {
        document.getElementById('mensagemErro').innerText = 'E-mail inválido';
        // O e-mail é inválido, você pode exibir uma mensagem de erro ou realizar outras ações aqui
    }
}