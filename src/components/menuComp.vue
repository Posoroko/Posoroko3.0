<template>

    <div class="menuSection" id="menuSection" @click="handleClick">
        <div class="backdrop" id="backdrop" ref="backdrop" >
            <div class="menuContentBox" >
        
                <menuContent :content="menuComponent"/>
               
                
            </div>
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
        let backdrop = ref()

        function handleClick(e){
            
            if(!transitioning){
                
                console.log(menuComponent.value)
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
                }
                setTimeout(() => {transitioning = false}, 1000) 
            }
        }

        

        

        return { contact, handleClick, contactRef, backdrop, menuIsOn, portfolio, portfolioRef, menuComponent }
    }
}
</script>

<style>
.menuSection{
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 10000;
    pointer-events: none;

}
.backdrop{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
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
.menuContentBox{
    width: min(100%, 1000px);
    height: 50vh;
    
}
.menuItem{
    font-size: 25px;
    font-weight: 100;
    padding: 25px;
}


</style>