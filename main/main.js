window.addEventListener("load", () => {

    const SpinnerContainer = document.getElementById("SpinnerContainer")
    const popup = document.getElementById("popup")

    // const card2 = document.getElementById("card2")

    SpinnerContainer.style.display="none"

    function successfulSignuppopup(){
        setTimeout(() => {
            popup.style.top="15px"
        }, "50");
        setTimeout(() => {
            popup.style.opacity="0"
        }, "2000");
    }

    // function cardblur(){
    //     card2.style.display="none"
    // }

    // cardblur()

    
    successfulSignuppopup()
})