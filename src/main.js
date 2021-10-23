import { createApp } from 'vue'
import App from './App.vue'
import router from './router'





/* STYLES */
    /* global styles */
    import main from '@/assets/main.css'
    /* background decor styles */
    import backgroundDecor from '@/assets/backgroundDecor.css'



createApp(App).use(router).mount('#app')



const app_div = document.getElementById('app')
const menuSection = document.getElementById('menuSection')
const body = document.getElementsByTagName('body')


function shrinkBackground(how) {
    if(how === 'down'){
        
        app_div.animate([
            {width: '99%'},
            {width: '70%'}
        ], {
            duration: 1500,
            easing: 'cubic-bezier(.42,.2,.1,1.08)',
            fill: 'forwards'
        })
    } else{
        app_div.animate([
            {width: '70%'},
            {width: '70%'},
            {width: '99%'}
        ], {
            duration: 1500,
            easing: 'cubic-bezier(.42,.2,.1,1.08)',
            fill: 'forwards'
        })
    }
}
function fadeBackdrop(how){
    if(how === 'in'){
        menuSection.animate([
            {backgroundColo: "rgba(0, 0, 0, 0)", offset: 0},
            {backgroundColor: "rgba(0, 0, 0, 1)", offset: 1}
        ], {
            delay: 300,
            duration: 1000,
            easing: 'ease-out',
            fill: 'forwards'
        })
    }else{
        menuSection.animate([
            {backgroundColor: "rgba(0, 0, 0, 1)", offset: 0},
            {backgroundColor: "rgba(0, 0, 0, 1)", offset: 0.8},
            {backgroundColor: "rgba(0, 0, 0, 0)", offset: 1}
        ], {
            duration: 1500,
            easing: 'cubic-bezier(.02,.42,.1,1)',
            fill: 'forwards'
        })
    }
}

let menuIsOn = false
let transition = false

function openMenu() {


        // body[0].style.overflow = 'hidden'
        transition = true
        shrinkBackground('down')
        fadeBackdrop('in')

        setTimeout(()=>{
            menuIsOn = true
            transition = false
            menuSection.style.pointerEvents ='auto'
            console.log(menuSection.style.pointerEvents)
        }, 1500)

    }
function closeMenu() {
    transition = true
    menuSection.style.pointerEvents ='none'
    shrinkBackground('up')
    fadeBackdrop('out')
    setTimeout(()=>{
        menuIsOn = false
        transition = false
        menuSection.style.pointerEvents ='none'
        body[0].style.overflow = 'auto'
    }, 1500)
}
        



const allowedTargets = ['closeBtn', 'contactBtn', 'portfolioBtn', 'menuSection']
const openers = ['contactBtn', 'portfolioBtn']
const closers = ['closeBtn', 'menuSection']
//la condition évite que le menu ne se ferme quand les liens qui s'y trouvent sont cliqué. Seuls les 
//élément listés dans "allowedTargets" peuvent ouvrir et fermer le menu
menuSection.addEventListener('click', e => {
    if(!menuIsOn && openers.includes(e.target.id) && !transition){
        openMenu()
    } else if (menuIsOn && closers.includes(e.target.id) && !transition) {
        closeMenu()
    }
 
    
})




