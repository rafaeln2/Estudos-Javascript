function clickButton(){
    let errorString = "Algum erro occoreu ao clicar no bola"
    document.getElementById("err-msg").innerText = errorString
}
document.getElementById("error-btn").addEventListener("click", clickButton)