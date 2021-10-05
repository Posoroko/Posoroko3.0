<template>

    <div class="menuSection" id="menuSection" @click="handleClick">

            <div class="menuContentBox" id="menuContentBox">
                <menuContent :content="menuComponent"/>
            </div>

        <div class="menuBtnBox" >
            <p class="lightText menuBtn" ref="contactRef"  id="contactBtn" @click="handleClick">{{contact}}</p>
            <p class="lightText menuBtn" ref="portfolioRef"  id="portfolioBtn" v-if="!menuIsOn" @click="handleClick">{{portfolio}}</p>
        </div>

            

        
        
        
          
    </div>

        

        
      

</template>

<script>
import { ref } from 'vue'
import menuContent from '@/components/menuContent'

export default {
    components: { menuContent },
    setup() {
        let contact = ref('contact')
        let contactRef = ref()
        
        let portfolio = ref('portfolio')
        let portfolioRef = ref()

        let menuComponent = ref('')

        let transitioning = false
        let menuIsOn = ref(false)
        const allowedTargets = ['menuSection', 'contactBtn', 'portfolioBtn']

        function handleClick(e){
            if(e.target.id == 'menuSection'){

            }
            if(!transitioning && allowedTargets.includes(e.target.id)){
                

                transitioning = true
                if(!menuIsOn.value){
                    menuIsOn.value = true
                    contactRef.value.style.fontFamily = 'Material Icons'
                    contact.value = 'close'
                    menuComponent.value = e.target.id

                    
                } else{
                    contactRef.value.style.fontFamily = "'Be Vietnam Pro', sans-serif"
                    contact.value = 'contact'
                    menuIsOn.value = false
                    menuComponent.value = ''
                }
                setTimeout(() => {transitioning = false}, 1000) 
            }
        }

        

        

        return { contact, handleClick, contactRef, menuIsOn, portfolio, portfolioRef, menuComponent }
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
    pointer-events: none;
    display: grid;
    place-items: center;
}

.menuBtnBox{
    position: absolute;
    top: 10vh;
    right: 10vw;
    pointer-events: auto;

}
.menuBtn{
    font-size: max(1.3vw, 12px);
    font-weight: 100;
}

.menuItem{
    font-size: 25px;
    font-weight: 100;
    padding: 25px;
}


</style>