const inputBusca = document.getElementById("input-busca");
const cursos = document.querySelectorAll(".curso-card");
const contador = document.querySelector(".resultados-count");

inputBusca.addEventListener("input", () => {
  const termo = inputBusca.value.toLowerCase();
  let total = 0;

  cursos.forEach(curso => {
    const nome = curso.dataset.nome.toLowerCase();
    const categoria = curso.dataset.categoria.toLowerCase();

    const corresponde = nome.includes(termo) || categoria.includes(termo);

    curso.style.display = corresponde ? "block" : "none";

    if (corresponde) total++;
  });

  contador.textContent = `A mostrar ${total} curso${total === 1 ? '' : 's'}`;
});