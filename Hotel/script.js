function reserva() {
    alert("Obrigado por escolher nosso hotel! Redirecionando para a página de reservas.");
    // Aqui você pode redirecionar para uma página específica de reservas
}

function enviarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome && email) {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        document.getElementById("formContato").reset();
        return false; // Previne o envio real do formulário
    }

    alert("Por favor, preencha todos os campos.");
    return false;
}
