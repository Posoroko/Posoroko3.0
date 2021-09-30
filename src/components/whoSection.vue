<template>
  <section class="whoSection">
        
        <div class="photoEricBox">
            <img class="photoEric" src="https://i.ibb.co/PFN5JbK/Eric-Podhorecki.jpg" alt="Eric Podhorecki">
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

}
.photoEric{
    width: 100%;
    box-shadow: 0 0 20px;

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
</style>