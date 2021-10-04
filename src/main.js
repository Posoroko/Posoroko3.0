import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* STYLES */
    /* global styles */
    import main from '@/assets/main.css'
    /* background decor styles */
    import backgroundDecor from '@/assets/backgroundDecor.css'



createApp(App).use(router).mount('#app')


const contactBtn = document.getElementById('contactBtn')
const portfolioBtn = document.getElementById('portfolioBtn')
const app_div = document.getElementById('app')
const menuSection = document.getElementById('menuSection')
const backdrop = document.getElementById('backdrop')

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
     
            backdrop.animate([
                {opacity: '0'},
                {opacity: '1'}
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0,.89,.6,1.03)',
                fill: 'forwards'
            })
 
        

        setTimeout( () => {
            inTransition = false
            menuSection.style.pointerEvents = 'auto'
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
        backdrop.animate([
            {opacity: '1'},
            {opacity: '0'}
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0,.89,.6,1.03)',
            fill: 'forwards'
        })
        setTimeout(() => {

            inTransition = false
            menuIsOn = false
            menuSection.style.pointerEvents = 'none'
        }, 1000)

    }
}



contactBtn.addEventListener('click', openMenu)
portfolioBtn.addEventListener('click', openMenu)
menuSection.addEventListener('click', openMenu)



