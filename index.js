const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', function() {
    const height = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const rect = box.getBoundingClientRect().top

        if(height < rect){
            box.classList.add('split')
        } else {
            box.classList.remove('split')
        }
    })

})