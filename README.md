## 🎯 Objetivo
Desenvolver a interface da página `endereco.html` contendo um formulário para cadastro de endereço. O formulário deve apresentar uma boa estilização visual e implementar validações de entrada rigorosas e formatação automática de campos em tempo real (máscaras) utilizando **HTML, CSS e JavaScript**.
 
---
 
## 📋 Requisitos dos Campos
 
**Campos Obrigatórios:**
* **CEP:** Deve possuir máscara automática no formato `00000-000` (ex: ao digitar `12345678` → deve exibir `12345-678`). A validação final deve ser feita usando **Regex com grupos de captura**.
* **Logradouro:** Deve conter no mínimo 5 caracteres.
* **Número:** Deve permitir **apenas** dígitos numéricos.
* **UF:** Deve aceitar **somente 2 letras maiúsculas** (ex: SP, RJ, MG). Deve ser validado via Regex e convertido automaticamente para maiúsculo durante a digitação do usuário.
 
**Campo Opcional:**
* **Complemento:** Campo de texto livre.
 
---
 
## ⚙️ Regras de Comportamento (Regras de Negócio)
 
1. O evento de envio do formulário deve ser interceptado (`addEventListener("submit", ...)`) e ter seu comportamento padrão cancelado (`preventDefault()`).
2. O campo **CEP** deve ser formatado dinamicamente enquanto o usuário digita.
3. O campo **UF** deve converter as letras para maiúsculo dinamicamente durante a digitação e bloquear números/caracteres especiais.
4. Cada entrada inválida no momento do *submit* deve interromper o envio e gerar um `alert()` com uma mensagem de erro clara e específica para aquele campo.
5. Se todos os campos estiverem válidos ao submeter, o sistema deve exibir o alerta: `Endereço cadastrado com sucesso`.
 
---
 
## ✅ Critérios de Aceite (Definition of Done)
 
- [ ] O arquivo `endereco.html` foi criado com todos os campos do formulário solicitados.
- [ ] O arquivo `style.css` foi criado e vinculado corretamente para a estilização visual do formulário.
- [ ] O arquivo `script.js` foi criado e vinculado corretamente ao HTML.
- [ ] O campo CEP aplica a máscara automaticamente e é validado com Regex de grupos de captura.
- [ ] O campo UF é convertido dinamicamente para maiúsculo e validado por Regex (2 caracteres).
- [ ] O formulário impede o envio se os campos obrigatórios estiverem em branco ou inválidos.
- [ ] Alertas de erro apropriados são exibidos para cada regra violada no momento do envio.
- [ ] O alerta "Endereço cadastrado com sucesso" é exibido com sucesso quando os dados são válidos.
- [ ] O código não apresenta erros no console do navegador (Clean Code).
- [ ] O Commit foi realizado com mensagem padronizada/descritiva (ex: `feat: criar página de cadastro de endereço`).
 
---
 
## 📂 Entregáveis
* `endereco.html`
* `style.css`
* `script.js`
