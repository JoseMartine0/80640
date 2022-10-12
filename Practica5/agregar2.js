function leer(){
    return document.getElementById("todo").value
}

function agregar(){
    nodo = document.createElement("li")
    // texto = document.createTextNode("hola")
    texto = document.createTextNode(leer())
    nodo.appendChild(texto)
    nodo.setAttribute("id", "")
    document.getElementById("lista").appendChild(nodo)

}

function buscarId(){
    if (document.getElementById(leer())=null)
    console.log("no existe")
    else
        alert("ojo ya existe")
}

function buscar(){

    let listaTodo = document.getElementsByTagName("li")
    for (let index = 0; index <listaTodo.length; index++) {
        if (leer()==listaTodo[index].textContent){
            console.log(leer() + "ya existe")
        }else{
            console.log(leer() + "no existe")
        }  
        }

}

function buscarfor(){
    listaTodo=document.getElementsByTagName("li")
    for (let i = 0; i< listaTodo.length; i++){
        const tarea = listaTodo[i];
        if(leer()==tarea.textContent)
        alert("ya existe")
        else alert("mamaste")
    }
}

function buscarof(){
    listaTodo=document.getElementsByTagName("li")

    for (const tarea of listaTodo){
        if (leer()==tarea.textContent)
        alert("ya existe")
        else alert("mamaste")

    }
}

function buscar(){
    listaTodo=document.getElementsByTagName("li")
    for (const tarea in listaTodo){
        if(Object.hasOwnProperty.call(listaTodo, tarea)){
            const element = listaTodo [tarea];
            //if(leer()==tarea.childNodes[0])
            console.log(tarea)
        }
    }
}

