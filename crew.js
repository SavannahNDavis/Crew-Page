const buttonEl = document.querySelector('.crew_button')
const aboutCrewEl = document.querySelector('.crew_description')

let showDescription = () => {

    if (aboutCrewEl.style.display === 'none') {
        return aboutCrewEl.style.display = "block"
    } else {
        return aboutCrewEl.style.display = "none"
    }

}

buttonEl.addEventListener('click', showDescription)


