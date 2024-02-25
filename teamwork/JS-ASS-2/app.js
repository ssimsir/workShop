// Kodlar buraya



getRandomColor = () => {
    let randomColor = "#"+  
        Math.ceil(Math.random()*255).toString(16).padStart(2, '0')+
        Math.ceil(Math.random()*255).toString(16).padStart(2, '0')+
        Math.ceil(Math.random()*255).toString(16).padStart(2, '0');
    return randomColor
}

changeMainBGColor = (color) => {
    console.log(color)
    const bgDiv = document.querySelector(".bgDiv")
    bgDiv.style.backgroundColor = color;

    const colorInput = document.getElementById("colorInput");
    colorInput.value = color;

    document.getElementById("colorText").textContent = color;
    
}

document.querySelector(".btn-click").addEventListener("click", () => {
    changeMainBGColor(getRandomColor())
})

document.querySelector(".btn-over").addEventListener("mouseover", () => {
    changeMainBGColor(getRandomColor())
})

document.querySelector(".btn-out").addEventListener("mouseout", () => {
    changeMainBGColor(getRandomColor())
})

document.querySelector("#copy").addEventListener("click", () => {

    const colorText = document.querySelector("#colorText")

    navigator.clipboard.writeText(colorText.textContent)
    .then(() => {
      alert("Renk kopyalandı: " + colorText.textContent);
    })
    .catch(err => {
      console.error('Kopyalama başarısız: ', err);
    });

})


