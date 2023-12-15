let btnAdicionar = document.getElementById("btnAdicionar")
let btnClose = document.getElementById("btnClose")

function getAllData(){
    let data = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        qtd: parseInt(document.getElementById("qtd").value),
        unityPrice:parseFloat(document.getElementById("unityPrice").value) ,
        totalPrice: parseFloat(document.getElementById("qtd").value) * parseFloat(document.getElementById("unityPrice").value)
    }
    return data
}

btnAdicionar.addEventListener("click",async ()=>{
    let data = getAllData();
    try {
        let response = await fetch("http://localhost:8080/produto", {
            method:'POST',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(data),
        })
        let result = await response.json()
        if(result.has_error) return alert(result.data)
        window.location.reload(true);
    } catch (error) {
        alert("Houve um problema ao cadastrar o seu produto.")
    }
})

async function handleDelete(id) {
    try {
        let response = await fetch("http://localhost:8080/produto", {
            method:'DELETE',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify({id}),
        })
        let result = await response.json()
        if(result.has_error) return alert(response.data)
        window.location.reload(true);
    } catch (error) {
        alert("Houve um problema ao remover o produto.")
    }
}

async function getDataById(id){
    try {
        let response = await fetch(`http://localhost:8080/produto/${id}`)
        let result = await response.json()
        return result
    } catch (error) {
        return alert("Houve um erro ao buscar o produto")
    }
}
function fillForm(data) {
    document.getElementById("EditName").value=data.name
    document.getElementById("EditDescription").value=data.description
    document.getElementById("EditQtd").value=data.qtd
    document.getElementById("EditUnityPrice").value=data.unityPrice
}
let productSelectedForEdit;
async function handleEdit(id) {
    let result = await getDataById(id)
    if(result.has_error) return alert("Houve um erro ao buscar dados do produto")
    fillForm(result.data)
    productSelectedForEdit = result.data
}

let btnSalvar = document.getElementById("btnSalvar")

btnSalvar.addEventListener("click", async ()=>{
    let data = {
        id:await productSelectedForEdit.id,
        name:document.getElementById("EditName").value,
        description:document.getElementById("EditDescription").value,
        qtd:parseInt(document.getElementById("EditQtd").value),
        unityPrice: parseFloat(document.getElementById("EditUnityPrice").value),
        totalPrice: parseInt(document.getElementById("EditQtd").value) *parseFloat(document.getElementById("EditUnityPrice").value)
    }
    let res = await data
   try {
        let response = await fetch("http://localhost:8080/produto", {
            method:"PUT",
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(res)
        })
        let result = await response.json()
        if(result.has_error) return alert("Houve um erro ao salvar")
        alert("Produto editado com sucesso!")
        window.location.reload(true);
   } catch (error) {
    return alert("Houve um erro ao salvar")
   }
})
