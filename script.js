/* ============================================================
   script.js — Validação e formatação do formulário de endereço
   ============================================================ */

// ── Referências aos elementos ──────────────────────────────
const form         = document.getElementById("formEndereco");
const inputCEP     = document.getElementById("cep");
const inputLog     = document.getElementById("logradouro");
const inputNum     = document.getElementById("numero");
const inputUF      = document.getElementById("uf");
const inputComp    = document.getElementById("complemento");

// ── Helpers de estado visual ───────────────────────────────

/**
 * Marca um grupo de campo como erro.
 * @param {string} fieldId  – id do <input>
 */
function setError(fieldId) {
  const group = document.getElementById(`group-${fieldId}`);
  if (!group) return;
  group.classList.remove("success");
  group.classList.add("error");
}

/**
 * Marca um grupo de campo como sucesso.
 * @param {string} fieldId  – id do <input>
 */
function setSuccess(fieldId) {
  const group = document.getElementById(`group-${fieldId}`);
  if (!group) return;
  group.classList.remove("error");
  group.classList.add("success");
}

/**
 * Remove estados visuais de um grupo de campo.
 * @param {string} fieldId  – id do <input>
 */
function clearState(fieldId) {
  const group = document.getElementById(`group-${fieldId}`);
  if (!group) return;
  group.classList.remove("error", "success");
}

// ── Formatação automática do CEP ──────────────────────────
// Regex com grupos de captura: (\d{5})(\d{1,3})
const regexCEP = /^(\d{5})(\d{1,3})$/;

inputCEP.addEventListener("input", () => {
  // Remove tudo que não for dígito
  let raw = inputCEP.value.replace(/\D/g, "");

  // Aplica máscara usando grupos de captura
  if (regexCEP.test(raw)) {
    inputCEP.value = raw.replace(regexCEP, "$1-$2");
  } else {
    inputCEP.value = raw;
  }

  // Limpa estado ao digitar
  clearState("cep");
});

// ── Somente dígitos no campo Número ───────────────────────
inputNum.addEventListener("input", () => {
  inputNum.value = inputNum.value.replace(/\D/g, "");
  clearState("numero");
});

// ── UF: forçar maiúsculas + limpar estado ─────────────────
inputUF.addEventListener("input", () => {
  inputUF.value = inputUF.value.toUpperCase();
  clearState("uf");
});

// ── Limpar estados visuais ao digitar nos demais campos ───
[inputLog, inputComp].forEach(el => {
  el.addEventListener("input", () => clearState(el.id));
});

// ── Validações ────────────────────────────────────────────

/**
 * Valida o CEP no formato 00000-000.
 * Regex com grupos de captura para estruturar a validação.
 */
function validarCEP(valor) {
  const regexValidacao = /^(\d{5})-(\d{3})$/;
  return regexValidacao.test(valor);
}

/**
 * Valida o logradouro (mínimo 5 caracteres).
 */
function validarLogradouro(valor) {
  return valor.trim().length >= 5;
}

/**
 * Valida o número (somente dígitos, não vazio).
 */
function validarNumero(valor) {
  return /^\d+$/.test(valor.trim()) && valor.trim().length > 0;
}

/**
 * Valida a UF (exatamente 2 letras maiúsculas).
 * Regex com grupo de captura para garantir 2 letras.
 */
function validarUF(valor) {
  const regexUF = /^([A-Z]{2})$/;
  return regexUF.test(valor.trim());
}

// ── Submit ────────────────────────────────────────────────
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cep     = inputCEP.value.trim();
  const log     = inputLog.value.trim();
  const num     = inputNum.value.trim();
  const uf      = inputUF.value.trim();

  let valido = true;

  // Valida CEP
  if (!validarCEP(cep)) {
    setError("cep");
    alert("CEP inválido. Informe no formato 00000-000.");
    valido = false;
  } else {
    setSuccess("cep");
  }

  // Valida Logradouro
  if (!validarLogradouro(log)) {
    setError("logradouro");
    alert("Logradouro inválido. Deve conter no mínimo 5 caracteres.");
    valido = false;
  } else {
    setSuccess("logradouro");
  }

  // Valida Número
  if (!validarNumero(num)) {
    setError("numero");
    alert("Número inválido. Informe apenas dígitos numéricos.");
    valido = false;
  } else {
    setSuccess("numero");
  }

  // Valida UF
  if (!validarUF(uf)) {
    setError("uf");
    alert("UF inválida. Informe exatamente 2 letras maiúsculas (ex: SP, RJ, MG).");
    valido = false;
  } else {
    setSuccess("uf");
  }

  // Complemento é opcional — sem validação obrigatória
  if (inputComp.value.trim()) {
    setSuccess("complemento");
  }

  // Sucesso
  if (valido) {
    alert("Endereço cadastrado com sucesso");
    form.reset();
    ["cep","logradouro","numero","uf","complemento"].forEach(clearState);
  }
});

// ── Reset: limpa estados visuais ──────────────────────────
form.addEventListener("reset", () => {
  ["cep","logradouro","numero","uf","complemento"].forEach(clearState);
});
