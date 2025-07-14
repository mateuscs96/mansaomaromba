// Alternar campo de busca
document.getElementById("icone-busca").addEventListener("click", () => {
  const campo = document.getElementById("campoBusca");
  campo.style.display = campo.style.display === "flex" ? "none" : "flex";
  campo.style.flexDirection = "row";
});

// Simular busca
function executarBusca() {
  const valor = document.getElementById("inputBusca").value;
  if (valor.trim() !== "") {
    alert(`Você pesquisou por: ${valor}`);
    // Aqui você pode redirecionar ou filtrar algo com JS de verdade
  }
}

  