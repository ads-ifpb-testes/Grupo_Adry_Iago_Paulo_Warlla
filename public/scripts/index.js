
let btn = document.getElementById("btn")
let btnCadastrar = document.getElementById("btnCadastrar")


async function login(email, password){
    let data = {
        email:email,
        password:password
    }
    try {
        let response = await fetch("http://localhost:8080/login", {
            method:'POST',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(data),
        })
        let result = await  response.json() 
        if(result.has_error == true) return alert(result.data)
        window.location.href = "http://localhost:8080/inicio";
    } catch (error) {
        alert("Houve um problema ao fazer login")
    }
 
}



btn.addEventListener('click', async (event)=>{
    event.preventDefault();
    let email =  document.getElementById("email").value
    let password = document.getElementById("password").value
    if(email.length <=0) return alert("Você precisa informar um E-mail e senha válidos")
    if(password.length <=0) return alert("Você precisa informar um E-mail e senha válidos")
    return await login(email, password)

})

btnCadastrar.addEventListener("click", (event)=>{
    event.preventDefault()
    window.location.href = "http://localhost:8080/cadastrar";
})