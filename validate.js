function validateForm() {
  let isValid = true;
  // Xóa lỗi trước đó
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const nameError = document.getElementById("nameError");
  const retypepasswordError = document.getElementById("retypepasswordError");
  emailError && (emailError.style.display = "none");
  passwordError && (passwordError.style.display = "none");
  nameError && (nameError.style.display = "none");
  retypepasswordError && (retypepasswordError.style.display = "none");

  // Kiểm tra
  const password = document.getElementById("password").value;

  if (password.trim() === "") {
    document.getElementById("passwordError").textContent =
      "password không được để trống";
    document.getElementById("passwordError").style.display = "block";

    if (retypepasswordError) {
      document.getElementById("retypepasswordError").textContent =
        "Vui lòng Nhập password";
      document.getElementById("retypepasswordError").style.display = "block";
    }
    isValid = false;
  }

  const retypepasswordValue = document.getElementById("retypepassword")?.value;
  const retypepassword = document.getElementById("retypepassword");

  if (retypepassword && retypepasswordValue.trim() !== password.trim()) {
    document.getElementById("retypepasswordError").textContent =
      "Nhập Lại Phải Giống Mật Khẩu";
    document.getElementById("retypepasswordError").style.display = "block";
    isValid = false;
  }

  const nameValue = document.getElementById("name")?.value;
  const name = document.getElementById("name");

  if (name && nameValue.trim() === "") {
    document.getElementById("nameError").textContent = "không được để trống";
    document.getElementById("nameError").style.display = "block";
    isValid = false;
  }

  // Kiểm tra Email
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Địa chỉ email không hợp lệ";
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  }

  return isValid;
}

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const isPasswordVisible = passwordInput.type === "text";

  if (isPasswordVisible) {
    passwordInput.type = "password";
  } else {
    passwordInput.type = "text";
  }
}

function toggleRetypePasswordVisibility() {
  const passwordInput = document.getElementById("retypepassword");
  const isPasswordVisible = passwordInput.type === "text";

  if (isPasswordVisible) {
    passwordInput.type = "password";
  } else {
    passwordInput.type = "text";
  }
}
const nameError = document.getElementById("nameError");
