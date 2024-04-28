function mostrarAlerta() {
    alert ("Cadastro feito com sucesso!");
    window.alert(message);
}

function fecharAvisoCookies() {
    document.getElementById('cookie-message').style.display = 'none';
    localStorage.setItem('cookiesAceitos', 'true');
}

window.onload = function() {
    if (!localStorage.getItem('cookiesAceitos')) {
        document.getElementById('cookie-message').style.display = 'block';
    }
}
