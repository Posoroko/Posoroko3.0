<template>
    <section class="motoSection clickOn">
        <h2 class="moto fr lightText trad clickOn" id="moto" @click="handleClick" v-html="moto"></h2>
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
    padding: 15vw 0px 15vw 0px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    position: relative
}
.moto{
    height: 100%;
    font-size: max(2.3vw, 14px);
    font-weight: 100;
    text-align: end;
    text-shadow: 0 0 8px black;
    /* filter: blur(0.5px); */
    animation: 1000ms ease-out blurIn;
}
</style>