
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("loginMessage");

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value;
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const passwordValid = password.length >= 8;

      emailInput.classList.toggle("is-invalid", !emailValid);
      emailInput.classList.toggle("is-valid", emailValid);
      passwordInput.classList.toggle("is-invalid", !passwordValid);
      passwordInput.classList.toggle("is-valid", passwordValid);

      if (!emailValid || !passwordValid) {
        message.className = "mt-3 alert alert-danger";
        message.textContent =
          "Periksa kembali email dan password. Password minimal 8 karakter.";
        return;
      }

      message.className = "mt-3 alert alert-success";
      message.textContent =
        "Validasi berhasil! Ini hanya simulasi login, bukan login akun sungguhan.";
    });
  }
});
