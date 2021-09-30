<template>
  <section id="fullPage">

    <topSection :texts="texts" />
    <motoSection :texts="texts" />
    <whoSection />
    <infoSection />
  
  </section>
  
</template>

<script>
import topSection from '@/components/topSection'
import motoSection from '@/components/motoSection'
import whoSection from '@/components/whoSection'
import infoSection from '@/components/infoSection'
import siteTexts from '@/composables/texts'


export default {
  name: 'Home',
  components: { topSection, motoSection, whoSection, infoSection },

  setup(){
    const texts = siteTexts()
    

    return { texts }
  }
}
</script>

<style scoped>
#fullPage{
  width: 100%;
  padding: 0 10%;
  position: relative;

}

</style>
