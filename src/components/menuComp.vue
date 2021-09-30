<template>

      <div class="menuBoxOff" id="menuBox">
          <h1 class="menuTitle lightText" id="menuTitle">menu</h1>
      </div>

</template>

<script>
export default {

}
</script>

<style>
.menuBoxOff{
    position: fixed;
    top: 10vh;
    right: 10%;
    z-index: 10000;
    border: 1px solid red;
}
.menuBoxOn{
    width: 100%;
    height: 100%;
    background-color: rgba(15, 13, 13, 0.6);
    top: 0;
    left: 0vw;
    z-index: 10000;
    position: fixed;
}
.menuTitle{
    font-size: 25px;
    font-weight: 200;
}
</style>