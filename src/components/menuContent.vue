<template>
    <section class="menuContentSection" ref="section">
        <div class="contact" v-if="showContent === 'contactBtn'">
            <img class="textureTv fondGlitch" src="fond-glitch.gif" alt="singe-diesel" border="0" >
            <p class="lightText menuItem" >eric@posoroko.com</p>
            <p class="lightText  menuItem">06 95 07 12 64</p>
            <p class="lightText  menuItem">Carhaix-Plouguer</p>
        </div>

            <div   class="portfolio" v-if="showContent === 'portfolioBtn'" >
                <div class="singeDieselBox projectBox">
                    <img class="projectImg" src="singe-diesel.gif" alt="">
                    <!-- <img class="marionette projectImg" src="https://i.ibb.co/gDVpY13/singe-diesel.jpg" alt="singe-diesel" border="0">
                    <img class="textureTv" src="https://i.ibb.co/bXgjx54/test-texture-tv.jpg" alt="singe-diesel" border="0" > -->
                    <h1 class="lightText projectName">singediesel.org</h1>
                </div>
                <div class="krismennBox projectBox">
                    <img class="krismenn projectImg" src="krismenn.gif" alt="krismenn" border="0">
                    <h1 class="lightText projectName">krismenn.com</h1>
                </div>
               
                
            </div>

  </section>
</template>


<script>
import { props, ref, watch, onMounted } from 'vue'
export default {
    props: ['content'],
    setup(props){
        const showContent = ref(null)
        const section = ref(null)
        const allowedTargets = ['portfolioBtn', 'contactBtn']
        onMounted(() => {

        console.log(showContent.value)
      })
        
        watch(() => props.content, (a,b) => {
            
                if(allowedTargets.includes(a)){         //ouvre le menu juste si on click sur un lien du menu
                setTimeout(()=>{
                showContent.value = a;
                section.value.animate([
                    {opacity: '0'},
                    {opacity: '1'}
                ], {
                    duration: 1000,
                    easing: 'cubic-bezier(.02,.42,.1,1)',
                    fill: 'forwards'
                })
                }, 800)
            }else if(!a || a == 'menuSection'){         //ferme le menu si on clique sur la croix ou sur le backdrop

                setTimeout(()=>{
                    showContent.value = props.content
                    }, 1100)
                section.value.animate([
                    {opacity: '1'},
                    {opacity: '0'}
                ], {
                    duration: 1000,
                    easing: 'cubic-bezier(.02,.42,.1,1)',
                    fill: 'forwards'
                })
                
            }
            
            
            

        })

        return { section, showContent }
      
    }

}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.menuContentSection{
    display: flex;
    align-items: center;

}

.contact{
    height: 400px;
    width: min(90vw, 300px);
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    place-items: flex-start;
    background: radial-gradient(circle, rgb(109, 30, 85) 0%, rgb(66, 20, 20) 100%);
    overflow: hidden;
}
.portfolio{

    /* background-color: rgba(20, 40, 66, 1); */
    background: radial-gradient(circle, rgba(20,66,63,1) 0%, rgba(20,40,66,1) 100%);
    
    padding: 20px 0px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    opacity: 1;
   
}

.menuItem{
   font-size: 20px;
   font-weight: 100;
   padding: 25px;
}
.projectBox{
    width: min(90vw, 310px);
    margin: 30px;
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(6, 13, 20, 0.993);
}

.projectName{
    font-size: max(1vw, 12px);
    font-weight: 200;
    text-shadow: 0 1px 5px rgb(255, 255, 255);
    position: absolute;
    bottom: 0;
} 



.projectImg{
    width: 100%;
    mix-blend-mode:screen;
}
.fondGlitch{
    width: 100%;
    position: absolute;
    mix-blend-mode:color-dodge;
}


</style>