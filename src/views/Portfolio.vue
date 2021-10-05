<template>
  <section class="portfolioSectoin">
       <div   class="portfolio" v-if="showContent === 'portfolioBtn'" >
                <div class="singeDieselBox projectBox">
                    <img class="marionette projectImg" src="https://i.ibb.co/gDVpY13/singe-diesel.jpg" alt="singe-diesel" border="0">
                    <img class="textureTv" src="https://i.ibb.co/bXgjx54/test-texture-tv.jpg" alt="singe-diesel" border="0" >
                    <h1 class="lightText projectName">Singe Diesel</h1>
                </div>
                <div class="krismennBox projectBox">
                    <img class="krismenn projectImg" src="https://i.ibb.co/GvRyC5R/krismenn.jpg" alt="krismenn" border="0">
                    <img class="textureTv" src="https://i.ibb.co/bXgjx54/test-texture-tv.jpg" alt="singe-diesel" border="0" >
                    <h1 class="lightText projectName">Krismenn</h1>
                </div>
                <div class="krismennBox projectBox">
                    <img class="krismenn projectImg" src="https://i.ibb.co/GvRyC5R/krismenn.jpg" alt="krismenn" border="0">
                    <img class="textureTv" src="https://i.ibb.co/bXgjx54/test-texture-tv.jpg" alt="singe-diesel" border="0" >
                    <h1 class="lightText projectName">Krismenn</h1>
                </div>
                <div class="krismennBox projectBox">
                    <img class="krismenn projectImg" src="https://i.ibb.co/GvRyC5R/krismenn.jpg" alt="krismenn" border="0">
                    <img class="textureTv" src="https://i.ibb.co/bXgjx54/test-texture-tv.jpg" alt="singe-diesel" border="0" >
                    <h1 class="lightText projectName">Krismenn</h1>
                </div>
                <div class="krismennBox projectBox">
                    <img class="krismenn projectImg" src="https://i.ibb.co/GvRyC5R/krismenn.jpg" alt="krismenn" border="0">
                    <img class="textureTv" src="https://i.ibb.co/bXgjx54/test-texture-tv.jpg" alt="singe-diesel" border="0" >
                    <h1 class="lightText projectName">Krismenn</h1>
                </div>
                <div class="krismennBox projectBox">
                    <img class="krismenn projectImg" src="https://i.ibb.co/GvRyC5R/krismenn.jpg" alt="krismenn" border="0">
                    <img class="textureTv" src="https://i.ibb.co/bXgjx54/test-texture-tv.jpg" alt="singe-diesel" border="0" >
                    <h1 class="lightText projectName">Krismenn</h1>
                </div>
            </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.portfolioSection{
    width: 100%;
    height: 100%;
    
}
.portfolio{

    /* background-color: rgba(20, 40, 66, 1); */
    background: radial-gradient(circle, rgba(20,66,63,1) 0%, rgba(20,40,66,1) 100%);
    padding: 20px 0px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
   overflow: scroll;
    opacity: 1;
}

.menuItem{
   font-size: 20px;
   font-weight: 100;
   padding: 25px;
}
.projectBox{
    width: min(90vw, 300px);
    margin: 30px;
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(6, 13, 20, 0.993);
}
.projectName{
    font-size: max(2.5vw, 16px);
    position: absolute;
    bottom: 0;
}

.textureTv{
    height: 100%;
    mix-blend-mode:color-dodge;
    animation:  50ms linear buzz alternate infinite;
    opacity: 0.3;
    position: absolute;
    top:0;
    left: 0;
    transform: translateZ(0);
}
.projectImg{
    width: 100%;
    mix-blend-mode:lighten;

}
@keyframes buzz {
    from{
        filter: blur(0px);
    }
    to{ 
        filter: blur(0.8px);
    }
}

</style>