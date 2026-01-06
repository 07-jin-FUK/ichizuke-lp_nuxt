<template>
  <div class="window-wrap">
    <div class="background" />
    <div class="window hero">
      <div class="hero-inner">
        <h1 class="ja">「イチヅケ」</h1>
        <div class="button-wrap">
          <NuxtLink to="/job-seeker" class="btn">求職者はこちら</NuxtLink>
          <NuxtLink to="/agent" class="btn">転職エージェントはこちら</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
const baseDir = runtimeConfig.public.baseDir;

const head = {};
usePageHead(head);
</script>

<style lang="scss" scoped>
@use '~/assets/css/mixin.scss';

.window-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .background {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-position: center;
    background-size: cover;

    @include mixin.max-screen(mixin.$medium) {
      background-position: right 50%;
    }
  }
  .window {
    width: 50%;

    &.hero {
      width: 100%;
      height: 100vh;
      position: sticky;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      .hero-inner {
        max-width: 408px;
        width: 100%;
        background: rgba(255, 255, 255, 0.8);
        border: 1px solid #ffffff;
        border-radius: 15px;
        box-shadow: 0px 3px 6px #00000029;
        opacity: 1;
        padding: 55px 50px;
      }

      h1 {
        font-family: 'Hiragino Mincho ProN', sans-serif;
        font-size: 1.7em;
        font-weight: normal;

        text-align: center;
        margin-bottom: 50px;
      }

      .hero-inner_desc {
        margin: 20px 0 40px;

        .text {
          font-size: 0.875em;
          font-family: 'Hiragino', sans-serif;

          span {
            display: block;
          }
        }
      }

      .button-wrap {
        display: grid;
        gap: 30px 0;

        a {
          max-width: unset;
          padding: 20px;
        }
      }
    }
  }
}
</style>
