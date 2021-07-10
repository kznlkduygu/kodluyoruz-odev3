const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit',function(e){
    e.preventDefault();

    checkInputs();
});

const checkInputs = () => {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, 'Kullanıcı adı boş bırakılamaz')
    }else {
        setSuccesFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'E-posta boş olamaz')
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Geçerli bir e-posta değil')
    }
    else{
        setSuccesFor(email)
    }


    if(passwordValue === ''){
        setErrorFor(password, 'Şifre boş olamaz')
    }else if(passwordValue !== password2Value){
        setErrorFor(password, 'Parolalar eşleşmiyor')
    }else{
        setSuccesFor(password);
    }
    
    
    if(password2Value ===''){
        setErrorFor(password2, 'Şifre boş olamaz')
    }else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Parolalar eşleşmiyor')
    }else{
        setSuccesFor(password2);
    }


}



const setErrorFor = (input, message) =>{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccesFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control succes';
}


function isEmail(email) { //regex
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
} 