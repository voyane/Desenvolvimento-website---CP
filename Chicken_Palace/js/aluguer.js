// ====== FORM VALIDATION ======
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  let valid = true;

  function validarCampo(id, regex, msg) {
    const campo = document.getElementById(id);
    const valor = campo.value.trim();
    const small = campo.parentElement.querySelector("small");
    if (!regex.test(valor)) {
      campo.style.borderColor = "red";
      small.style.visibility = "visible";
      small.innerText = msg;
      valid = false;
    } else {
      campo.style.borderColor = "green";
      small.style.visibility = "hidden";
    }
  }

  validarCampo("username", /^.{3,}$/, "Digite ao menos 3 caracteres.");
  validarCampo("email", /^[^ ]+@[^ ]+\.[a-z]{2,3}$/, "Digite um e-mail válido.");
  validarCampo("contact", /^[0-9]{9,12}$/, "Digite um número válido.");
  validarCampo("event-type", /^.{3,}$/, "Especifique o evento.");
  validarCampo("number-guest", /^[0-9]+$/, "Digite apenas números.");
  validarCampo("date-event", /.+/, "Escolha uma data.");

  if (valid) {
    alert("Formulário enviado com sucesso!");
    this.reset();
    document.querySelectorAll("input").forEach(input => input.style.borderColor = "");
  }
});

// ====== MENU HAMBURGUER ======
const toggle = document.querySelector(".menu-toggle");
const header = document.querySelector(".hero-header");

toggle.addEventListener("click", () => {
  header.classList.toggle("active");
});
