const localEmail = localStorage.getItem("userEmail");
let localPass = localStorage.getItem("userPassword");
function login() {
  const userDataValue = document.querySelector("#userData").value;
  const userPasswordValue = document.querySelector("#userPassword").value;
  if (userDataValue !== localEmail ) {
    document.getElementById("error").innerHTML = "Invalid Email";
  }else if(userPasswordValue !== localPass){
    document.getElementById("error").innerHTML = "Invalid Password";
  }
   else {
    window.location.href = "home.html";
  }
}

function forget() {
  const userDataValue = document.querySelector("#userData").value;
  const userPasswordValue = document.querySelector("#userPassword").value;
  const passwordValidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8}$/;
  
  if (userDataValue == localEmail) {
    if(userPasswordValue.match(passwordValidation)){
    localPass = localStorage.setItem("userPassword", userPasswordValue);
    window.location.href = "login.html";
  }else{
    document.getElementById("error").innerHTML = "Invalid Email";
  }
}
  
}
