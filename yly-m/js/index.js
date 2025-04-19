const array = document.querySelectorAll('footer a')
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    element.addEventListener('mousedown', function () {
        document.querySelector('footer .current').classList.remove('current')
        this.classList.add('current')
    })
}