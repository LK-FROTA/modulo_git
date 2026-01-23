const form = document.getElementById('form-validacao');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = Number(document.getElementById('campoA').value);
    const campoB = Number(document.getElementById('campoB').value);
    const mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagem.textContent = 'Formulário válido: Campo B é maior que Campo A ✅';
        mensagem.style.color = 'green';

        // limpa os campos
        form.reset();
    } else {
        mensagem.textContent = 'Formulário inválido: Campo B deve ser maior que Campo A ❌';
        mensagem.style.color = 'red';
    }
});
