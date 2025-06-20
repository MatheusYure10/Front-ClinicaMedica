// Seleciona todos os botões que abrem e fecham o modal
const openButtons = document.querySelectorAll(".open-modal");
const closeButtons = document.querySelectorAll(".close-modal");

// Percorre cada botão de abrir e adiciona o evento de click
openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Pega o id do modal que o botão abre
    const modalId = button.getAttribute("data-modal");

    // Pega o modal pelo id
    const modal = document.getElementById(modalId);

    // Abre o modal
    modal.showModal();
  });
});

// Percorre cada botão de fechar e adiciona o evento de click
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Pega o id do modal que o botão fecha
    const modalId = button.getAttribute("data-modal");

    // Pega o modal pelo id
    const modal = document.getElementById(modalId);

    // Fecha o modal
    modal.close();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btnPermissoes = document.getElementById('btnPermissoes');
  const modal = document.getElementById('modalPermissoes');
  const fecharModal = document.getElementById('fecharModal');

  btnPermissoes.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  fecharModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
document.getElementById("btnPermissoes").addEventListener("click", function () {
  document.getElementById("modalPermissoes").style.display = "block";
});

document.getElementById("fecharModal").addEventListener("click", function () {
  document.getElementById("modalPermissoes").style.display = "none";
});

document.getElementById("btnFecharModal").addEventListener("click", function () {
  document.getElementById("modalPermissoes").style.display = "none";
});




