
let click = document.querySelector(".sortear")

click.addEventListener('click', () => {
    const min = Math.ceil(document.querySelector(".left").value)
    const max = Math.floor(document.querySelector(".right").value)

    const result = Math.floor(Math.random() * (max - min + 1) + min);

    const number = document.querySelector(".result")
    number.innerHTML = result

    if (max >= min) {
        console.log("valor correto")
        number.style.color = "#D19E9A"
    } else {
        number.innerHTML = "ERRO!! O valor MÍNIMO tem que ser MENOR que o valor MÁXIMO "
        number.style.color = "#820B3B"
    }
})









