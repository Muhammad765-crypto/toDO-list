let dark=document.querySelector(".dark");
let light=document.querySelector(".light");
let send=document.querySelector(".send");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

dark.addEventListener("click",()=>{
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
})

light.addEventListener("click",()=>{
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
})

send.addEventListener("click",()=>{
    if(input.value===""){
        input.classList.add("red")
    }else{
        let li=document.createElement("li")
        li.textContent=input.value;
        li.classList.add("li");
        ul.appendChild(li);
        input.value="";

        li.addEventListener("click",()=>{
            li.classList.add("completed")
        })
    }
})