let holauser = document.querySelector("#holauser")

    
    if (localStorage.getItem("userLog")) {
    let user = localStorage.getItem("userLog")
    let div1 = document.createElement("h2")
    div1.innerHTML = `Bienvenido, ${user}!`
    holauser.appendChild(div1)
}else{
    div1.innerHTML = ``
}