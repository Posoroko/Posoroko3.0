<template>
  <svg class="funkySvg" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 161.86 1790.56" style="enable-background:new 0 0 161.86 1790.56;" xml:space="preserve">
        <g>
          <path ref="swirlPath" class="funkyPath" id="funkyPath" d="M18.73,0c-25.63,81.64,97.06,175.94,72.08,270.25c-3.53,13.34-8.4,27-18.46,36.46
            c-10.05,9.46-26.62,13.26-37.84,5.22s-17.83-37.69,2.52-33.47c21.58-0.29,17.19,151.15,24.76,235.7
            c1.88,20.98,4.84,43.06,17.59,59.83s39.33,24.91,55.24,11.1c15.91-13.8,2.38-47.93-17.75-41.73c-20.93,6.45-16.23,37.03-8.73,57.6
            c23.26,63.76,30.67,133.25,21.37,200.48c-2.36,17.07-7.04,35.93-21.67,45.06c-14.62,9.13-39.77-2.35-35.52-19.05
            c15.25-4.32,25.26,15.66,27.71,31.32c6.79,43.43,6.64,87.93-0.43,131.32c-3.11,19.09-8.95,39.99-25.48,50.04
            c-16.52,10.05-44.51-2.05-40.79-21.03c8.59-8.9,24.75-4.95,32.37,4.8s8.89,22.9,9.34,35.26c1.83,50.32-1.58,109.26,37.44,141.1
            c8.25,6.73,18.63,11.77,29.21,10.63c10.58-1.14,20.67-10.16,20.16-20.79s-14.78-18.64-22.87-11.73c-3.48,2.97-5.02,7.57-6.33,11.96
            c-9.29,31.16-14.62,63.5-15.82,95.99c-1.25,33.89,1.42,70.16-16.08,99.2c-14.85,24.64-42.58,40.69-53.01,67.51
            c-8.45,21.72-2.91,48.19,13.53,64.71s42.89,22.17,64.64,13.82c14.21-5.45,25.53-26.98,12.04-34.02
            c-12.28-6.41-23.6,10.17-27.19,23.55c-10.4,38.71-20.18,229.4-20.46,269.49"/>
        </g>
      </svg>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
    setup() {
        const swirlPath = ref(null)
        const body = document.getElementsByTagName('body');

        let distance = null
        window.addEventListener('scroll', handleScroll)
        onMounted(() => {
            swirlPath.value.style.strokeDasharray = swirlPath.value.getTotalLength()
            swirlPath.value.style.strokeDashoffset = swirlPath.value.getTotalLength()
           
            
        });
        
        
        function handleScroll() {
            if(!distance){
                distance = body[0].clientHeight - window.innerHeight
            }
            let ratio = distance / window.scrollY
            let line = swirlPath.value.getTotalLength() / ratio 
            swirlPath.value.style.strokeDashoffset = swirlPath.value.getTotalLength() - line

            // ratio = swirlPath.value.getTotalLength() * window.scrollY / body[0].clientHeight
            // swirlPath.value.style.strokeDashoffset = swirlPath.value.getTotalLength() - ratio * 1.5 ;

        
        }

        return { swirlPath }
    }

}
</script>

<style scoped>
.funkySvg{
    height: 100%;
    position: absolute;
    right: 0;
}

.funkyPath{
    stroke: #bb5436;
    fill: none;
    filter: drop-shadow(0 0 0px rgb(138, 110, 91));
    animation: 2000ms linear pulse infinite alternate;
}
@keyframes pulse {
    from{filter:drop-shadow(0 0 3px rgb(138, 110, 91));}
    to{filter:drop-shadow(0 0 8px rgb(138, 110, 91));}   
}
</style>