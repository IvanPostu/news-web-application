<template>
  <div class="outer-wrapper">
    <div class="s-wrap s-type-1" role="slider">
      <input id="s-1" type="radio" name="slider-control" checked="checked" />
      <input id="s-2" type="radio" name="slider-control" />
      <input id="s-3" type="radio" name="slider-control" />
      <input id="s-4" type="radio" name="slider-control" />
      <input id="s-5" type="radio" name="slider-control" />
      <ul class="s-content">
        <li class="s-item s-item-1">
          <div class="block"></div>
        </li>
        <li class="s-item s-item-2"></li>
        <li class="s-item s-item-3"></li>
        <li class="s-item s-item-4"></li>
        <li class="s-item s-item-5"></li>
      </ul>
      <!-- <div class="s-control">
        <label class="s-c-1" for="s-1"></label>
        <label class="s-c-2" for="s-2"></label>
        <label class="s-c-3" for="s-3"></label>
        <label class="s-c-4" for="s-4"></label>
        <label class="s-c-5" for="s-5"></label>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
}
</script>

<style lang="scss" scoped>
$switch-speed: 1s;
$slider-number: 5;
$slider-width: 100% / $slider-number;
$bgColor: #222f3e;

$image1: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?crop=entropy&fit=crop&fm=jpg&h=600&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=800';
$image2: 'https://images.unsplash.com/photo-1456318019777-ccdc4d5b2396?crop=entropy&fit=crop&fm=jpg&h=600&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=800';
$image3: 'https://images.unsplash.com/photo-1428189923803-e9801d464d76?crop=entropy&fit=crop&fm=jpg&h=600&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=800';
$image4: 'https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?crop=entropy&fit=crop&fm=jpg&h=600&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=800';
$image5: 'https://images.unsplash.com/photo-1439736637365-748f240b24fb?crop=entropy&fit=crop&fm=jpg&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=800';

.outer-wrapper {
  width: 90%;
  margin: 15px auto;
}

// basic styles
.s-wrap {
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
  padding-bottom: 55%;
  position: relative;
  border: 2px solid rgba(0, 0, 0, 0.055);
  background-color: $bgColor;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  > input {
    display: none;
  }

  .s-content {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100% * $slider-number;
    height: 100%;
    font-size: 0;
    list-style: none;
    transition: transform $switch-speed;
  }

  .s-item {
    display: inline-block;
    position: relative;
    width: $slider-width;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;

    .block {
      position: relative;
      float: left;
      width: 200px;
      height: 300px;
      background: red;

      & ::after {
        content: 'qereqr qerq e';
      }
    }
  }

  .s-item-1 {
    background-image: url($image1);
  }
  .s-item-2 {
    background-image: url($image2);
  }
  .s-item-3 {
    background-image: url($image3);
  }
  .s-item-4 {
    background-image: url($image4);
  }
  .s-item-5 {
    background-image: url($image5);
  }
}

.s-type-1 {
  .s-control {
    position: absolute;
    bottom: 18px;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
    transition-timing-function: ease-out;

    > label[class^='s-c-'] {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 10px;
      border-radius: 50%;
      border: 1px solid #999;
      background-color: #efefe8;
      cursor: pointer;
    }
  }

  .s-nav label {
    display: none;
    position: absolute;
    top: 50%;
    padding: 5px 10px;
    transform: translateY(-50%);
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 8px;
      height: 24px;
      background-color: #fff;
    }

    &::before {
      margin-bottom: -12px;
    }

    &.left {
      left: 20px;

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }

    &.right {
      right: 20px;

      &::before {
        transform: rotate(-45deg);
      }

      &::after {
        transform: rotate(45deg);
      }
    }
  }

  @for $i from 1 through $slider-number {
    #s-#{$i}:checked {
      & ~ .s-content {
        transform: translateX(-$slider-width * ($i - 1));
      }

      & ~ .s-control .s-c-#{$i} {
        background-color: #333;
      }

      & ~ .s-nav .s-nav-#{$i} {
        display: block;
      }
    }
  }
}
</style>
