<template>
    <section class="topSection">

      <div class="topTitleBox flexCentered" id="topTitleBox">
        <svg class="topTitle" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 47.41 351.31" style="enable-background:new 0 0 47.41 351.31;" xml:space="preserve">  
          <g>
                  <path class="topTitlePaths" d="M46.7,351.31H0.63c0.45-5.74-1.42-19.88,2.15-24.59c5.37-9.08,19.73-9.06,25.08,0
                      c3.19,4.22,1.9,14.6,2.15,19.79H46.7V351.31z M4.93,335.26v11.27h20.79v-11.27C26.5,321.33,4.15,321.33,4.93,335.26z"/>
                  <path class="topTitlePaths" d="M47.32,291.62c0.84,28.95-48.21,29.01-47.31,0C-0.83,262.65,48.11,262.71,47.32,291.62z M42.84,291.62
                      c0.4-22.59-38.74-22.62-38.34,0C4.03,314.32,43.29,314.3,42.84,291.62z"/>
                  <path class="topTitlePaths" d="M47.32,245.94c0.44,8.86-5.59,16.16-14.19,16.81v-4.85c22.06-3.54,1.56-39.23-7.22-14.19
                      c-1.39,5.56-2.49,12.89-7.56,16.18c-19.76,9.81-26-27.08-5.45-28.07v4.73c-8.42,0.24-11.1,12.34-6.19,17.68
                      c12.43,9.97,13-10.77,16.9-17.77C30.62,224.13,48.84,232.54,47.32,245.94z"/>
                  <path class="topTitlePaths" d="M47.32,200.68c0.84,28.95-48.21,29.01-47.31,0C-0.83,171.71,48.11,171.77,47.32,200.68z M42.84,200.68
                      c0.4-22.59-38.74-22.62-38.34,0C4.03,223.38,43.29,223.36,42.84,200.68z"/>
                  <path class="topTitlePaths" d="M46.7,170H0.63c0.42-5.36-1.29-19.03,1.9-23.47c5.54-10.04,21.94-7.36,23.75,4.11l20.42-11.95v5.42
                      l-20.04,11.64v9.46H46.7V170z M4.93,154.5v10.71h17.55V154.5C23.22,142.27,4.19,142.27,4.93,154.5z"/>
                  <path class="topTitlePaths" d="M47.32,109.68c0.84,28.95-48.21,29.01-47.31,0C-0.83,80.71,48.11,80.77,47.32,109.68z M42.84,109.68
                      c0.4-22.59-38.74-22.62-38.34,0C4.03,132.38,43.29,132.36,42.84,109.68z"/>
                  <path class="topTitlePaths" d="M46.7,79H0.63V74.2h20.98L0.7,53.29v-6.35l22.16,22.35L46.7,46.01v6.47L24.47,74.2H46.7V79z"/>
                  <path class="topTitlePaths" d="M47.32,21.42c0.84,28.95-48.21,29.01-47.31,0C-0.83-7.55,48.11-7.49,47.32,21.42z M42.84,21.42
                      c0.4-22.59-38.74-22.62-38.34,0C4.03,44.12,43.29,44.09,42.84,21.42z"/>
          </g>
        </svg>
      </div>

      <div class="subtitleBox lightText tradBox">
        <p class="subtitle fr trad" id="subtitle" @click="handleClick" v-html="subtitle"></p>
      </div>

    </section>
</template>

<script>
import { ref } from 'vue'
import translate from '@/composables/translate'

export default {
    props: ['texts'],
    setup(props) {
        const subtitle = ref(props.texts.subtitle.fr)
        const traduire = translate()

        

        const handleClick = (e) => {
            traduire(e)
        }


        return { handleClick, subtitle }
    }

}
</script>

<style>
.topSection{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.topTitleBox{
    height: 80%;
}
.topTitle{
    height: 100%;
    filter: blur(0.8px);
    animation: 1000ms ease-out slideIn;
    overflow: visible;
}
.topTitlePaths{
    fill: white;
    /*filter: drop-shadow(0px 0px 5px rgb(44, 44, 44));*/
    filter: drop-shadow(0px 0px 5px black);
}
@keyframes slideIn{
    0%{
        transform: translateX(-100%);
        opacity: 0;
    }
    100%{
        transform: translateX(0%);
        opacity: 1;
    }
}
.subtitleBox{
    height: 80%;
    display: flex;
    flex-direction: column-reverse;
    filter: blur(0.6px);
}
.subtitle{
    font-size: max(2vw, 16px);
    font-weight: 100;
    padding: 0px 0px 0px 50px;
    text-shadow: 0 0 8px black;
    
    animation: 1000ms ease-out blurIn;
}
@keyframes blurIn {
    from{
        filter: blur(100px);
    }
    to{
        filter: blur(0px);
    }
}

</style>