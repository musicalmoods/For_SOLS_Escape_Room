function correct(){
    const para = document.createElement("p");
    para.textContent = "Correct!";
    document.body.appendChild(para);
}
function incorrect(){
    const para = document.createElement("p");
    para.textContent = "Incorrect!";
    document.body.appendChild(para);
}