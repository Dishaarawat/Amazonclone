const left=document.querySelector(".l-btn");
const right=document.querySelector(".r-btn");

right.addEventListener("click",function(event){
    const conent=document.querySelector(".product-slide");
    conent.scrollLeft +=1100;
    event.preventDefault();
    
})
left.addEventListener("click",function(event){
    const conent=document.querySelector(".product-slide");
    conent.scrollLeft -=1100;
    event.preventDefault();

});


const leftbtn=document.querySelector(".l-btn1");
const rightbtn=document.querySelector(".r-btn2");

rightbtn.addEventListener("click",function(event){
    const conent=document.querySelector(".product-slide-1");
    conent.scrollLeft +=1100;
    event.preventDefault();
    
})
leftbtn.addEventListener("click",function(event){
    const conent=document.querySelector(".product-slide-1");
    conent.scrollLeft -=1100;
    event.preventDefault();

})
