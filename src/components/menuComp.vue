<template>

    <div class="menuSection clickOff" id="menuSection" @click="handleClick">


                <menuContent :content="menuComponent"/>


        <div class="menuBtnBox clickOn" ref="menuBtnBox">
            <p class="lightText menuBtn" ref="contact"  id="contactBtn" v-if="!menuIsOn" @click="handleClick">contact</p>
            <p class="lightText menuBtn" ref="portfolio"  id="portfolioBtn" v-if="!menuIsOn" @click="handleClick">portfolio</p>
            <p class="lightText menuBtn closeBtn" ref="close" id="closeBtn" v-if="menuIsOn" @click="handleClick">close</p>
        </div>
  
    </div>

</template>

<script>
import { ref } from 'vue'
import menuContent from '@/components/menuContent'

export default {
    components: { menuContent },
    setup() {

        let menuComponent = ref('')
        const contact = ref(null)
        const portfolio = ref(null)
        const close = ref(null)
        const menuBtnBox = ref(null)

        let menuIsOn = ref(false)
        let transition = false
        const allowedTargets = ['contactBtn', 'portfolioBtn', 'closeBtn', 'menuSection', 'menuContentBox']
        const openers = ['contactBtn', 'portfolioBtn']
        const closers = ['closeBtn', 'menuSection']

        function handleClick(e){
            
            if(!transition){
                    

                if(!menuIsOn.value && openers.includes(e.target.id)){
                    transition = true
                    
                    menuBtnBox.value.animate([
                        {opacity: '1', offset: 0},
                        {opacity: '0', offset: 0.5},
                        {opacity: '1', offset: 1}
                    ], {
                        duration: 1500,
                        easing: 'linear',
                        fill: 'forwards'
                    })

                    setTimeout(()=>{
                        menuIsOn.value = true
                        
                    }, 750)
                    setTimeout(()=>{
                        transition = false
                        
                    }, 1500)
                    

                    menuComponent.value = e.target.id
                

                } else if(menuIsOn.value && closers.includes(e.target.id)){

                    transition = true
                    menuComponent.value = null
                    menuBtnBox.value.animate([
                        {opacity: '1', offset: 0},
                        {opacity: '0', offset: 0.5},
                        {opacity: '1', offset: 1}
                    ], {
                        duration: 1500,
                        easing: 'linear',
                        fill: 'forwards'
                    })
                    setTimeout(()=>{
                        menuIsOn.value = false
                        
                    }, 750)
                    setTimeout(()=>{
                        transition = false
                        menuIsOn.value = false
                    }, 1500)
                }
                
            }
        }

        

        

        return {  handleClick, menuIsOn, menuComponent, contact, portfolio, close, menuBtnBox }
    }
}
</script>

<style scoped>
.menuSection{
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    display: grid;
    place-items: center;
}

.menuBtnBox{
    min-width: 100px;
    position: absolute;
    padding: 5px;
    top: 10vh;
    right: 10vw;
    display: flex;
    flex-direction: column;
    align-items:  center;
}
.closeBtn{
    font-family: 'Material icons';
}
.closeBtn:hover{
    font-size: max(1vw,20px);
}
.menuBtn{
    font-size: max(1vw, 18px);
    font-weight: 100;
    margin: 2px;
}
.menuBtn:hover{
    font-weight: 300;
    cursor: pointer;
}

.menuItem{
    font-size: 25px;
    font-weight: 100;
    padding: 25px;
}


</style>