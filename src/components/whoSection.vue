<template>
  <section class="whoSection">
        
        <div class="photoEricBox">
            <img class="photoEric" src="https://i.ibb.co/Bq5nS5T/Eric-Podhorecki-2.gif" alt="Eric Podhorecki">

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

        <p class="description lightText">
            Je suis basé en Centre-Bretagne et suis disponible pour travailler à distance ou en présence avec tout type de client et pour tout type de projet.
        </p>
            
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

}
.photoEricBox{
    width: min(100%, 1000px);
    margin: auto; 

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
.description{
    width: 60%;
    font-size: max(1.5vw, 12px);
    font-weight: 100;
    padding-top: 10vh;

}

</style>