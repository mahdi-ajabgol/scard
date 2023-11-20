window.addEventListener("load", () => {
    const subway = document.getElementById("subway")
    const bus = document.getElementById("bus")
    const subwayasl = document.getElementById("subwayasl")
    const busasl = document.getElementById("busasl")
    const khat = document.getElementById("khat")

    bus.addEventListener("click", () => {
        khat.style.transform="translateX(100%)"
        subwayasl.style.transform="traslateX(-100%)"
    })

    subway.addEventListener("click", () => {
        khat.style.transform="translateX(0)"
    })
})