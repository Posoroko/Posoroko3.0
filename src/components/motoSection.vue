<template>
    <section class="motoSection">
        <p class="moto fr lightText trad" id="moto" @click="handleClick" v-html="moto"></p>
    </section>
</template>

<script>
import { ref } from 'vue'
import translate from '@/composables/translate'
export default {
    props: ["texts"],
    setup(props) {
        const moto = ref(props.texts.moto.fr)
        const traduire = translate()

        const handleClick = (e) => {
            traduire(e)
        }
        return { handleClick, moto }
    }
}
</script>

<style>
.motoSection{
    width: 100%;
    padding: 15vw 0px 22vw 0px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    position: relative;
    pointer-events: none;
}
.moto{
    font-size: max(2.3vw, 16px);
    font-weight: 100;
    text-align: end;
    text-shadow: 0 0 8px black;
    filter: blur(0px);
    animation: 1000ms ease-out blurIn;
    position: absolute;
    pointer-events: auto;
}
</style>