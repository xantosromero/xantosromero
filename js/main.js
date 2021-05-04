const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.menu')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})