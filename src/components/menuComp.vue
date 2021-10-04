<template>

    <div class="menuBox" id="menuBox">
        <div class="menuBtnBox"  @click="handleClick">
            <p class="lightText menuBtn" ref="menuBtn"  id="menuBtn">{{menuBtnContent}}</p>
        </div>

          
    </div>

        

        
      

</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        let menuBtnContent = ref('menu')
        let transitioning = false
        let menuBtn = ref()
        let menuIsOn = false

        function handleClick(e){
            if(!transitioning){
                transitioning = true
                if(!menuIsOn){
                    menuIsOn = true
                    menuBtn.value.style.fontFamily = 'Material Icons'
                    menuBtnContent.value = 'close'
                    
                } else{
                    menuBtn.value.style.fontFamily = "'Be Vietnam Pro', sans-serif"
                    menuBtnContent.value = 'menu'
                    menuIsOn = false
                }
                setTimeout(() => {transitioning = false}, 1000)
                
            }

            
        }

        

        

        return { menuBtnContent, handleClick, menuBtn }
    }
}
</script>

<style>
.menuBox{
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 10000;
    pointer-events: none;
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





</style>