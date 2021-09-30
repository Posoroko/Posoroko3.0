<template>
        <menuComp />


          <bigLogo />

          <swirl />
        
          <div id="content">
            <router-view />
          </div>

          <footerComp />

          

        
        

</template>

<script>

import swirl from '@/components/swirl'
import footerComp from '@/components/footerComp'
import bigLogo from '@/components/bigLogo'
import menuComp from '@/components/menuComp'

export default {
  components: { swirl, footerComp, bigLogo, menuComp },
  setup() {
    
  }
}
</script>

<style scoped>





</style>
