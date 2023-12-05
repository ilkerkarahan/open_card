let acvtiveImg = document.querySelectorAll('.img')

acvtiveImg.forEach(function(img1) {
    img1.addEventListener('click',function() {
        removeAcvtive()
        img1.classList.add('active')
    })
})

function removeAcvtive() {
    acvtiveImg.forEach(function(img2) {
        img2.classList.remove('active')
    })
}

