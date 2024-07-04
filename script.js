function changeImage(imageName){
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = imageName;
}   
function enabledark(){
    const mainbody = document.getElementById("main");
    mainbody.classList.add("bg-dark");
    mainbody.classList.remove("bg-light");
    const container = document.getElementById("inner-cont");
    container.classList.add("dark-bg-innercont");
    container.classList.remove("light-bg-innercont");


}
function enablelight(){
    const mainbody = document.getElementById("main");
    mainbody.classList.add("bg-light");
    mainbody.classList.remove("bg-dark");
    const container = document.getElementById("inner-cont");
    container.classList.add("light-bg-innercont");
    container.classList.remove("dark-bg-innercont");
    const button = document.getElementById("btn");
    button.classList.add("light-btn");
    button.classList.remove("dark-btn");
    const image = document.getElementById("main-product-image");
    image.classList.add("light-img");
    image.classList.remove("dark-img");
   
}
