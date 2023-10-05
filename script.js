document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const mensagemEnviada = document.getElementById("mensagemEnviada");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Simule o envio do formulário (você pode adicionar sua lógica de envio aqui)
        // Neste exemplo, apenas exibimos a mensagem de sucesso
        mensagemEnviada.style.display = "block";

        // Limpa o formulário após o envio
        contactForm.reset();
    });
});
