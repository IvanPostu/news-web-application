<template>
  <div class="container">
    <h1>News page</h1>
    <section class="newsContainer">
      <article class="newsItem">
        <h1>Title</h1>
        <p>Some nice preview text.</p>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(218, 215, 215);

  .newsContainer {
    display: flex;
    flex-direction: column;
    width: 400px;

    .newsItem {
      border: 1px solid grey;
      border-radius: 9px;
      box-sizing: border-box;
      width: 280px;
      padding: 8px;
      box-shadow: 0 2px 2px #aaa;
    }
  }
}
</style>
