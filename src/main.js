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


let menuIsOn = false
let inTransition = false

function openMenu() {

    if(!menuIsOn && !inTransition){
        inTransition = true
        app_div.animate([
            {width: '99%'},
            {width: '70%'}
        ], {
            duration: 1000,
            easing: 'cubic-bezier(.42,.2,.1,1.08)',
            fill: 'forwards'
        })
     
        setTimeout(() => {
            menuSection.animate([
                {backgroundColo: "rgba(0, 0, 0, 0)"},
                {backgroundColor: "rgba(0, 0, 0, 1)"}
            ], {
                duration: 1000,
                easing: 'cubic-bezier(.02,.42,.1,1)',
                fill: 'forwards'
            })
        }, 800)
 
        

        setTimeout( () => {
            inTransition = false
            menuSection.style.pointerEvents = 'auto'
        }, 1000)
        menuIsOn = true


    }else if(menuIsOn && !inTransition){
        inTransition = true
        
        menuSection.animate([
            {backgroundColor: "rgba(0, 0, 0, 1)"},
            {backgroundColor: "rgba(0, 0, 0, 0)"}
        ], {
            duration: 1000,
            easing: 'cubic-bezier(.02,.42,.1,1)',
            fill: 'forwards'
        })
        setTimeout(()=> {
            app_div.animate([
                {width: '70%'},
                {width: '99%'}
            ], {
                duration: 1000,
                easing: 'cubic-bezier(.42,.2,.1,1.08)',
                fill: 'forwards'
            })
            setTimeout(() => {
    
                inTransition = false
                menuIsOn = false
                menuSection.style.pointerEvents = 'none'
            }, 1000)
        }, 500)

    }
}

const allowedTargets = ['contactBtn', 'portfolioBtn', 'menuSection']

//la condition évite que le menu ne se ferme quand les liens qui s'y trouvent sont cliqué. Seuls les 
//élément listés dans "allowedTargets" peuvent ouvrir et fermer le menu
menuSection.addEventListener('click', e => {
    if(allowedTargets.includes(e.target.id)){
        openMenu()
    }
 
    
})



