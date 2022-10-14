const preloader = document.getElementById("preloader");
const loginBtn = document.querySelector(".login-btn");
const userPassword = document.querySelector(".user-password");
const userEmail = document.querySelector(".email-input")
const invalide = document.querySelector(".invalide")
const invalid = document.querySelector(".invalid")
const rmCheck = document.querySelector(".rememberMe")
const modal = document.getElementById("modal-container");
const modal_forget_btn = document.getElementById("signup-btn")


const regEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;


window.addEventListener('load', ()=>{
        preloader.style.display = "none"
})

if (localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    userEmail.value = localStorage.username;
  } else {
    rmCheck.removeAttribute("checked");
    userEmail.value = "";
  }
  
  function lsRememberMe() {
    if (rmCheck.checked && userEmail.value !== "") {
      localStorage.username = userEmail.value;
      localStorage.checkbox = rmCheck.value;
    } else {
      localStorage.username = "";
      localStorage.checkbox = "";
    }
  }

loginBtn.onclick = ()=>{
    if(userPassword.value != '' && userEmail.value != ''){
        if(userPassword.value.length < 6 || userPassword.value.length > 16){
            invalide.innerHTML = "Password must be between 6-16 character long !!!"
        }
        else{
            if(!regPassword.test(userPassword.value)) {
                invalide.innerHTML = "Password should contain atleast one number and one special character";
            }
            else{
                if(!regEmail.test(userEmail.value)){
                    invalide.innerHTML = "Invalid email address !!!"
                }
                else{
                    invalide.innerHTML = " ";
                    lsRememberMe()
                }
            }

        }
    }
    else{
        invalide.innerHTML = "One or more fields are empty !!!"
    }
}


modal_forget_btn.onclick = function() {
  modal.style.display = "flex";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
