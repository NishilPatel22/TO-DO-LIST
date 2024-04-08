function register() {
  const emailValidation =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordValidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8}$/;

  const userNameValue = document.querySelector("#userName").value;
  const userEmailValue = document.querySelector("#userEmail").value;
  const userMobileValue = document.querySelector("#userMobile").value;
  const userPasswordValue = document.querySelector("#userPassword").value;
  const userDobValue = document.querySelector("#userDob").value;
  const userGenderValue = document.querySelector(
    'input[name="gender"]:checked'
  );

  if (userNameValue == null || userNameValue == "") {
    document.querySelector("#error").innerText = "Enter Name First";
  } else if (!userEmailValue.match(emailValidation)) {
    document.querySelector("#error").innerText = "Enter Email First";
  } else if (userMobileValue.length != 10) {
    document.querySelector("#error").innerText = "Enter Mobile First";
  } else if (userGenderValue == null) {
    document.querySelector("#error").innerText = "Enter Gender First";
  } else if (!userDobValue) {
    document.querySelector("#error").innerText = "Select DOB First";
  } else if (!userPasswordValue.match(passwordValidation)) {
    document.querySelector("#error").innerText = " Password Length Must be 8 and contain [capital letter, small letter,special character,number]";
  } else {
    localStorage.setItem("userName", userNameValue);
    localStorage.setItem("userEmail", userEmailValue);
    localStorage.setItem("userMobile", userMobileValue);
    const userGenderDetails = userGenderValue.value;
    localStorage.setItem("userGender", userGenderDetails);
    localStorage.setItem("userPassword", userPasswordValue);
    localStorage.setItem("userDob", userDobValue);

    window.location.href = "login.html";
  }
}

function getData() {
  document.getElementById("username1").textContent =
    "Username: " + localStorage.getItem("userName");
  document.getElementById("userEmail1").textContent =
    "Email: " + localStorage.getItem("userEmail");
  document.getElementById("userMobile1").textContent =
    "Mobile: " + localStorage.getItem("userMobile");
  document.getElementById("userGender1").textContent =
    "Gender: " + localStorage.getItem("userGender");
  document.getElementById("userDob1").textContent =
    "DOB: " + localStorage.getItem("userDob");
} 

function updateData() {
  const emailValidation =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const userNameValue = document.querySelector("#userName").value;
  const userEmailValue = document.querySelector("#userEmail").value;
  const userMobileValue = document.querySelector("#userMobile").value;

  if (userNameValue == null || userNameValue == "") {
    document.querySelector("#error").innerText = "Enter Name First";
  } else if (!userEmailValue.match(emailValidation)) {
    document.querySelector("#error").innerText = "Enter Email First";
  } else if (userMobileValue.length != 10) {
    document.querySelector("#error").innerText = "Enter Mobile First";
  } else {
    localStorage.setItem("userName", userNameValue);
    localStorage.setItem("userEmail", userEmailValue);
    localStorage.setItem("userMobile", userMobileValue);
    toggle();
    getData();
  }
}

function temp() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&appid=e46cb6b91ad032f40091c4eb50bf5cb5"
  )
    .then((res) => res.json())
    .then(
      (data) =>
        (document.querySelector("#tem").innerText = ((data.main.temp)- 273.15).toFixed(2) + "°c")
    )
    .catch((err) => console.log("Somting Went Wrong"));
}

// //* Time

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  document.querySelector("#time").innerText = hour + ":" + min + ":" + sec;
}
function callTime() {
  setInterval(showTime, 1000);
}

// //* GIF
async function getGIF() {
  const response = await fetch(
    "https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=8"
  );
  const result = await response.json();
  const gifArray = result.results;
  let randomIndex = Math.floor(Math.random() * gifArray.length);
  document.getElementById("gif").src =
    result.results[randomIndex]["media"][0]["nanogif"]["url"];
}

function callGif(){
  setInterval(getGIF(),120000)
}

const container1 = document.querySelector("#display");
const container2 = document.querySelector("#update");
function toggle() {
  if (container1.style.display === "none") {
    container1.style.display = "block";
    container2.style.display = "none";
  } else {
    container2.style.display = "block";
    container1.style.display = "none";
  }
}

function goBack() {
  window.location.href = "home.html";
}


  // if(localStorage.getItem("userEmail") == null){
  //   window.location.href = "login.html"
  // }