const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const moblieMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        moblieMenu.classList.toggle('hidden')
        moblieMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn');
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    moblieMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)