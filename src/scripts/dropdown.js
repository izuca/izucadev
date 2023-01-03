const btn = document.getElementById("dropdown")

btn.addEventListener("click", ()=>{
    console.log("dropdown")
    if(document.getElementById("menu").classList.contains("hidden")){
        document.getElementById("menu").classList.remove("hidden")
        document.getElementById("menu").classList.add("lg:hidden")
        document.getElementById("menu").classList.add("flex")
    } else{
        document.getElementById("menu").classList.remove("flex")
        document.getElementById("menu").classList.remove("lg:hidden")
        document.getElementById("menu").classList.add("hidden")
    }
})

document.getElementById("menu").addEventListener("click", ()=> {
    if(document.URL!= myUrl && document.getElementById("menu").classList.contains("flex")){
        document.getElementById("menu").classList.remove("flex")
        document.getElementById("menu").classList.remove("lg:hidden")
        document.getElementById("menu").classList.add("hidden")
    }
})