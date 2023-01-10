
let facebookInput = document.querySelector('.fb')
let instagramInput = document.querySelector('.insta')
let whatsappInput = document.querySelector('.whatsapp')
let btn = document.querySelector('button')
let img = document.querySelector('img')

btn.addEventListener('click',generate)
let getUrl
function generate(){
    let facebook = facebookInput.value 
    let instagram =  instagramInput.value
    let whatsapp =  whatsappInput.value
    // let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`
    let url = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=facebook: "+
    facebook +"%0a instagram: "+instagram + "%0a whatsapp: "+whatsapp
    img.src = url
    getUrl = img.src
    //make input empty
    facebookInput.value = ''
    instagramInput.value = ''
    whatsappInput.value = ''
    let popUp = document.createElement('div')
        popUp.className = 'popup'
    let popUpContainer = document.createElement('div')
        popUpContainer.className = 'container'
    let popUpImg = document.createElement('img')
        popUpImg.src = getUrl
    let btnClose = document.createElement('h4')
        btnClose.className = 'btn-close'
        btnClose.onclick = ()=>{
            console.log(document.querySelector('.popup').remove())
        }
    popUpContainer.appendChild(popUpImg)
    popUpContainer.appendChild(btnClose)
    popUp.appendChild(popUpContainer)
    document.body.appendChild(popUp)
}
