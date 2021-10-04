<template>
  <section class="menuContentSection">
      <div class="contact" v-if="content === 'contactBtn'">
          <p class="lightText menuItem">eric@posoroko.com</p>
          <p class="lightText menuItem">06 95 07 12 64</p>
          <p class="lightText menuItem">24 rue de kerven <br> 29270 Carhaix-Plouguer</p>
      </div>
      <div class="portfolio" v-if="content === 'portfolioBtn'" >

      </div>
  </section>
</template>

<script>
import { props } from 'vue'
export default {
    props: ['content'],
    setup(props){
        


    }

}
</script>

<style>
.menuContentSection{
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
}
.contact{
    
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: flex-start;
    background-color: rgba(255, 38, 0, 0.712);
}
.portfolio{
    height: 100%;
    width: 100%;
    background-color: rgba(20, 40, 66, 0.753);
}
.menuItem{
    font-size: 12px;
}
</style>