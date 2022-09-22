
document.addEventListener("DOMContentLoaded" , () => {
    const nav = document.querySelector(".nav");
    const btnShow = document.querySelector(".btnShow");
    const shadowBox = document.querySelector(".shadowBox");
    btnShow.addEventListener("click" , (e) => {
        if(nav.classList.contains("show")){
            nav.classList.add("unshow");
            nav.classList.remove("show");
            shadowBox.style.display = "none";
        }
        else{
            shadowBox.style.display = "block";
            nav.classList.add("show");
            nav.classList.remove("unshow");
        }
    })

    shadowBox.addEventListener("click" , () =>{
        if(nav.classList.contains("show")){
            nav.classList.add("unshow");
            nav.classList.remove("show");
            shadowBox.style.display = "none";
        }
    })
})
