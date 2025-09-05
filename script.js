document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');
    
    // Credenciais válidas (substitua com seu nome)
    const validUsername = "SeuNome"; // Coloque seu nome aqui
    const validPassword = "SuaSenha"; // Coloque sua senha aqui
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Verificar credenciais
        if (username === validUsername && password === validPassword) {
            showMessage('Login realizado com sucesso!', 'success');
            
            // Limpar formulário
            loginForm.reset();
            
            // Simular redirecionamento (substitua pela ação desejada)
            setTimeout(() => {
                alert('Bem-vindo ao sistema!');
            }, 1000);
            
        } else {
            showMessage('Usuário ou senha incorretos. Tente novamente.', 'error');
        }
    });
    
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = 'message ' + type;
        messageDiv.classList.remove('hidden');
        
        // Esconder a mensagem após 5 segundos
        setTimeout(() => {
            messageDiv.classList.add('hidden');
        }, 5000);
    }
});
