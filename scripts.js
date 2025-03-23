let BotomSom = document.querySelector(".botom-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")


BotomSom.addEventListener("click", ligasom)

function ligasom() {
    video.muted = false

}

botao.addEventListener("click", mostrarModal)

function mostrarModal() {
    modal.style.display = ("block")
}

modal.addEventListener("click", escondermodal)

function escondermodal() {
    modal.style.display = ("none")
}

window.addEventListener("click", tocarAudio)   

function tocarAudio() {
    audio.play()
   

}
