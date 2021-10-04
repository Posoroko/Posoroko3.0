import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* STYLES */
    /* global styles */
    import main from '@/assets/main.css'
    /* background decor styles */
    import backgroundDecor from '@/assets/backgroundDecor.css'



createApp(App).use(router).mount('#app')


const menuBtn_p = document.getElementById('menuBtn')
const app_div = document.getElementById('app')
const menuBox_div = document.getElementById('menuBox')
const menuBtnBox = document.getElementById('menuBtnBox')

let menuIsOn = false
let inTransition = false

function openMenu() {
    
    if(!menuIsOn && !inTransition){
        inTransition = true
        app_div.animate([
            {width: '100%'},
            {width: '70%'}
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0,.89,.6,1.03)',
            fill: 'forwards'
        })
        menuBox_div.animate([
            {backgroundColor: 'rgba(15, 13, 13, 0)'},
            {backgroundColor: 'rgba(15, 13, 13, 0.6)'}
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0,.89,.6,1.03)',
            fill: 'forwards'
        })
        
        menuBox_div.classList.replace('menuBoxOff', 'menuBoxOn')
        setTimeout( () => {
            inTransition = false
            menuBox_div.style.pointerEvents = 'auto'
        }, 1000)
        menuIsOn = true


    }else if(menuIsOn && !inTransition){
        inTransition = true
        app_div.animate([
            {width: '70%'},
            {width: '99%'}
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0,.89,.6,1.03)',
            fill: 'forwards'
        })
        menuBox_div.animate([
            {backgroundColor: 'rgba(15, 13, 13, 0,6)'},
            {backgroundColor: 'rgba(15, 13, 13, 0)'}
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0,.89,.6,1.03)',
            fill: 'forwards'
        })

        setTimeout(() => {
            menuBox_div.classList.replace('menuBoxOn', 'menuBoxOff')
            inTransition = false
            menuIsOn = false
            menuBox_div.style.pointerEvents = 'none'
        }, 1000)

    }
}



menuBtn_p.addEventListener('click', openMenu)
menuBox_div.addEventListener('click', openMenu)



