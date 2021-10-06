<template>
  <section class="whoSection">
        
        <div class="photoEricBox">
            <img class="photoEric" src="Eric-Podhorecki.gif" alt="Eric Podhorecki">

            <div class="ericNameBox">
                <h3 class="ericName lightText">Eric Podhorecki</h3>
            </div>
            
        <h2 class="jobsBox lightText">
            <span class="job0 job">développeur web</span>
            <span class="job1 job">designer</span>
            <span class="job2 job">ux designer</span>
            <span class="job3 job">webmaster</span>
            <span class="job4 job">chef de projet</span>
        </h2>
        </div>
            
    </section>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        

        return {  }
    }

}
</script>

<style scoped>
.whoSection{
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

}
.photoEricBox{
    width: 60%;
    position: relative;
    background-color: rgb(112, 129, 110);
}
.photoEric{
    width: 100%;
    box-shadow: 0 0 20px;
    mix-blend-mode:hard-light;
}

.ericName{
    font-size: max(1.5vw, 12px);
    font-weight: 100;
    position: absolute;
    top: 0;
    left: 0;
}
.jobsBox{
    font-size: max(1vw, 10px);
    font-weight: 100;
    position: absolute;
    bottom: 0px;
    left: 0;
    display: flex;
    flex-direction: column;
}
.textureBox{
    background-image: url(https://i.ibb.co/bXgjx54/test-texture-tv.jpg);
    background-size: contain;
    background-repeat: repeat;
    height: 100%;
    width: 100%;
    mix-blend-mode:difference;
 
    opacity: 0.2;
    position: absolute;
    top:0;
    left: 0;
    filter:contrast(5);
}

</style>