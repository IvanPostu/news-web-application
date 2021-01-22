<template>
  <header class="header">
    <input id="chk" type="checkbox" />
    <div></div>
    <h2 class="logo">Online news</h2>
    <label for="chk" class="showMenuButton">
      <close-icon />
    </label>

    <div class="menuContainer">
      <label for="chk" class="hideMenuButton">
        <menu-icon />
      </label>

      <ul class="menuList">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Works</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
import CloseIcon from './CloseIcon.vue'
import MenuIcon from './MenuIcon.vue'

export default {
  name: 'Header',
  components: { CloseIcon, MenuIcon },
}
</script>

<style lang="scss" scoped>
$hoverColor: #0984e3;
$bgColor: #222f3e;

.header {
  background-color: $bgColor;
  padding: 0 20px;
  color: #fff;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .logo {
    float: left;
    font-size: 27px;
    font-weight: bold;
  }

  .menuContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: 0.7s;
    z-index: 5;

    @media screen and (max-width: 800px) {
      width: 100%;
      height: 100vh;
      right: -100%;
      background: $bgColor;
      top: 0;
      padding: 80px 0;
      position: fixed;
      flex-direction: column;
      justify-content: flex-start;
    }

    .menuList {
      float: right;
      text-align: center;

      li {
        display: inline;

        @media screen and (max-width: 800px) {
          display: block;
          margin-top: 20px;
        }

        a {
          padding: 0 10px;
          color: #fff;
          font-size: 22px;
          transition: 0.4s;

          &:hover {
            color: $hoverColor;
          }
        }
      }
    }
  }

  .showMenuButton,
  .hideMenuButton {
    float: right;
    transition: 0.4s;
    display: none;

    &:hover {
      color: $hoverColor;
    }

    @media screen and (max-width: 800px) {
      display: block;
    }
  }

  #chk {
    display: none;
    &:checked {
      ~ .menuContainer {
        right: 0%;
      }
    }
  }
}
</style>
