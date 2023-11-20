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

    const card1 = document.getElementById("card1")

    const observerr = new IntersectionObserver((entries)=>{
        entries.forEach((entries)=>{
          if(entries.isIntersecting){
            entries.target.style.opacity="1"
            entries.target.style.transform="none"
          }
        })
      })

      observerr.observe(card1)

      document.querySelectorAll(".button-container div").forEach(element => {
        observerr.observe(element)
      });

      const menu = document.getElementById("menu")

      observerr.observe(menu)

    // function cardblur(){
    //     card2.style.display="none"
    // }

    // cardblur()

    
    successfulSignuppopup()
})