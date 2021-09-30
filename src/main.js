import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* STYLES */
    /* global styles */
    import main from '@/assets/main.css'
    /* background decor styles */
    import backgroundDecor from '@/assets/backgroundDecor.css'



createApp(App).use(router).mount('#app')


const menu_h1 = document.getElementById('menuTitle')
const app_div = document.getElementById('app')
const menuBox_div = document.getElementById('menuBox')


console.log(menuBox_div)
let isScaledDown = false
let menuIsOn = false

function menuClick() {
    
        scaleDown()
        openMenu()

    
}
function scaleDown() {
    if(!isScaledDown){
        app_div.animate([
            {width: '100%'},
            {width: '70%'}
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0,.89,.6,1.03)',
            fill: 'forwards'
        })
        isScaledDown = true
    }else {
        app_div.animate([
            {width: '70%'},
            {width: '100%'}
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0,.89,.6,1.03)',
            fill: 'forwards'
        })
        isScaledDown = false
    }
}
function openMenu() {
    if(!menuIsOn){
        menuBox_div.classList.replace('menuBoxOff', 'menuBoxOn')
        menuIsOn = true

    } else {
        menuBox_div.classList.replace('menuBoxOn', 'menuBoxOff')
        menuIsOn = false

    }
    
}

menu_h1.addEventListener('click', menuClick)

