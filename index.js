document.getElementById("get-scheme").addEventListener('click',getScheme)
const colorContainer = document.getElementById("color-container")
function getFeedHtml(colorArr){
    let html =""
    colorArr.forEach(color=>{
        html+=`
        <div class="bg-details">
            <div class="color"></div>
            <div class="hex-value">${color.hex.value}</div>
        </div>
        `
        
    })
    return html
}

function getScheme(){
    const hexValue=document.getElementById("selected-color").value.slice(1)
    const mode = document.getElementById("color-mode").value
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            const colorArr = data.colors
            colorContainer.innerHTML=getFeedHtml(colorArr)
            const colorDivs = Array.from(document.querySelectorAll('.color'))
            colorDivs.forEach((div,i)=>{
                div.style.backgroundColor = colorArr[i].hex.value
            })
        })
}