function mostrarMensagem() {
    document.getElementById("mensagem").textContent = "Olá Mundo!";
  }
  
  function somar() {
    const n1 = parseInt(document.getElementById("num1").value);
    const n2 = parseInt(document.getElementById("num2").value);
    const resultado = isNaN(n1) || isNaN(n2) ? "Insira dois números válidos!" : (n1 + n2);
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
  }
  
  function alterarPorId() {
    const el = document.getElementById("elementoId");
    el.textContent = "Texto alterado por ID!";
    el.style.backgroundColor = "#fde2e2";
    el.style.color = "#c0392b";
  }
  
  function alterarPorName() {
    const el = document.getElementsByName("elementoName")[0];
    if (el) {
      el.textContent = "Texto alterado por NAME!";
      el.style.backgroundColor = "#e8f8f5";
      el.style.color = "#117a65";
    }
  }
  
  function alterarPorClass() {
    const el = document.getElementsByClassName("classe-alvo")[0];
    if (el) {
      el.textContent = "Texto alterado por CLASS!";
      el.style.backgroundColor = "#fef9e7";
      el.style.color = "#b7950b";
    }
  }  