/* Developers Site v.1.0 */

// MENU MOBILE

// Get 'Btn Open'
const btnOpenMenu = document.querySelector('#open-menu')

// Get NavList
const navList = document.querySelector('.nav-list')


// Function Open
btnOpenMenu.addEventListener('click', ()=> {

    navList.style.right = '0'

})

// Function Close

navList.addEventListener('click', ()=> {

    navList.style.right = '-100%'
   
})

// ATUAL YEAR (Footer)

const newYear = new Date()
const atualYear = newYear.getFullYear()

// Get year
const boxYear = document.querySelector('#box-year') 

boxYear.innerHTML = `${atualYear}`