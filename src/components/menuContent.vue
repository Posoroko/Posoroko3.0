<template>
    <section class="menuContentSection" ref="section">
        <div class="contact" v-if="showContent === 'contactBtn'">
            <img class="textureTv fondGlitch" src="https://i.ibb.co/56755Dg/fond-glitch.gif" alt="singe-diesel" border="0" >
            <p class="lightText menuItem" >eric@posoroko.com</p>
            <p class="lightText  menuItem">06 95 07 12 64</p>
            <a class="lightText  menuItem" href="https://www.instagram.com/ericpodhorecki/">instagram</a>
        </div>

            <div   class="portfolio" v-if="showContent === 'portfolioBtn'" >
                <div class="singeDieselBox projectBox">
                    <img class="projectImg" src="https://i.ibb.co/RNppfF3/singe-diesel.gif" alt="">
                    <a target="_blank" rel="noopener noreferrer" class="lightText projectName" href="https://www.singediesel.org">singediesel.org</a>
                </div>
                <div class="krismennBox projectBox">
                    <img class="krismenn projectImg" src="https://i.ibb.co/ZMKj8wY/krismenn.gif" alt="krismenn" border="0">
                    <a target="_blank" rel="noopener noreferrer" class="lightText projectName" href="https://krismenn.com">krismenn.com</a>
                </div>
               <div class="pizza projectBox">
                    <img class="krismenn projectImg" src="https://i.ibb.co/bB979bw/pizza-glitch.gif" alt="krismenn" border="0">

                    <a target="_blank" rel="noopener noreferrer" class="lightText projectName" href="https://pizza-sign.netlify.app/">pizza</a>
                </div>
                <div class=" projectBox">
                    <img class="krismenn projectImg" src="https://i.ibb.co/cQfVLWg/ramen-glitch.gif" alt="krismenn" border="0">
                    <a target="_blank" rel="noopener noreferrer" class="lightText projectName" href="https://neon-ramen.netlify.app/">ramen</a>
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
    height: 401px;
    width: min(90vw, 300px);
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle, rgb(109, 30, 85) 0%, rgb(66, 20, 20) 100%);
    overflow: hidden;
    box-shadow: 0 0 30px rgba(248, 114, 114, 0.507);
}
.portfolio{
    height: min(100vh, 800px);
    width: 100vw;
    /* background-color: rgba(20, 40, 66, 1); */
    background: radial-gradient(circle, rgba(20,66,63,1) 0%, rgba(20,40,66,1) 100%);
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    overflow-y:scroll;
    
    opacity: 1;
   
}

.menuItem{
   font-size: 20px;
   font-weight: 100;
   pointer-events: auto;
   cursor:pointer;
}
.projectBox{
    position: relative;
    display: grid;
    place-items: center;
    box-shadow: 0px 0px 10px rgba(6, 13, 20, 0.993);
}

.projectName{
    font-size: max(1vw, 16px);
    font-weight: 200;
    text-shadow: 0 1px 5px rgb(255, 255, 255);
    position: absolute;
    bottom: 0;
} 
a{
    pointer-events: auto;
    text-decoration: none;
}
a:hover{
    cursor: pointer;
    font-weight: 400;
}


.projectImg{
    width: min(100vw, 300px);
    mix-blend-mode:screen;
}
.fondGlitch{
    width: 100%;
    position: absolute;
    mix-blend-mode:color-dodge;
}
.ramen{
    width: min(90vw, 310px);
}

</style>