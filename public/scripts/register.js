let btn = document.getElementById("btn");

function getFormData(){
    let data = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        state: document.getElementById("state").value,
        street: document.getElementById("street").value,
        homeNumber:""+document.getElementById("homeNumber").value
    }
    return data
}

btn.addEventListener("click", async ()=>{
   let data = getFormData()
   console.log(data)
   try {
        let response = await fetch("http://localhost:8080/cadastrar", {
            method:'POST',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(data),
        })
        let result = await response.json()
        if(result.has_error) {
            console.log(result  )
            return alert(result.data)
        }
        alert(result.data)
        window.location.href = "http://localhost:8080/";
   } catch (error) {
        return alert("Houve um erro ao tentar se comunicar com o servidor")
   }
})