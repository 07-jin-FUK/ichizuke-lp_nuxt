<template>
  <header class="header" :class="{ 'is-open': isActive, 'is-sticky': overHeroContent }">
    <!-- <a href="/login" target="_blank" class="btn" v-if="route.path !== '/job-seeker'">企業ログイン</a> -->
    <div class="btn" v-if="route.path !== '/job-seeker'"><p>企業ログイン</p></div>
    <div class="btn btn-sp" v-if="route.path !== '/job-seeker'"><p>ログイン</p></div>
    <div 
      v-if="route.path === '/agent'" 
      class="bottom-header" 
      :class="{ 'is-sticky': overHeroContent }"
    >
      <div class="btn">企業ログイン</div>
      <div class="btn">無料登録</div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const route = useRoute();
const isActive = ref(false);
const overHeroContent = ref(false);
const windowWidth = ref(0);

// ================================
// menu
// ================================
const isClicked = (): boolean => {
  isActive.value = !isActive.value;
  document.body.classList.toggle('pined');
  return isActive.value;
};

const removeBodyClass = (): void => {
  isActive.value = false;
  document.body.classList.remove('pined');
};

// ================================
// window width
// ================================
const updateWindowWidth = () => {
  if (!import.meta.client) return;
  windowWidth.value = window.innerWidth;
};

// ================================
// hero scroll判定
// ================================
const handleScroll = () => {
  if (route.path !== '/agent') {
    overHeroContent.value = false;
    return;
  }

  const heroSection = document.querySelector('#hero');
  if (!heroSection) {
    overHeroContent.value = false;
    return;
  }

  const heroRect = heroSection.getBoundingClientRect();
  overHeroContent.value = heroRect.bottom <= 0;
};

// ================================
// iOS Safari SP 判定
// ================================
const applyIOSSafariClass = () => {
  const ua = window.navigator.userAgent;
  const isIOS = /iP(hone|od|ad)/.test(ua);
  const isSafari = /Safari/.test(ua) && !/Chrome|CriOS|FxiOS/.test(ua);
  const isSP = window.innerWidth <= 480;

  if (isIOS && isSafari && isSP) {
    document.documentElement.classList.add('ios-safari-sp');
  }
};

// ================================
// Android Chrome / Google 対策
// visualViewportでbottom補正
// ================================
const updateBottomHeaderPosition = () => {
  const bottomHeader = document.querySelector('.bottom-header') as HTMLElement;
  if (!bottomHeader || !window.visualViewport) return;

  const vv = window.visualViewport;

  // 表示領域の下端との差分
  const offset =
    window.innerHeight - (vv.height + vv.offsetTop);

  bottomHeader.style.bottom = `${Math.max(offset, 0)}px`;
};

// ================================
// lifecycle
// ================================
onMounted(() => {
  windowWidth.value = window.innerWidth;

  applyIOSSafariClass();
  handleScroll();
  updateBottomHeaderPosition();

  window.addEventListener('resize', updateWindowWidth);
  window.addEventListener('scroll', handleScroll, { passive: true });

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', updateBottomHeaderPosition);
    window.visualViewport.addEventListener('scroll', updateBottomHeaderPosition);
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
  window.removeEventListener('scroll', handleScroll);

  if (window.visualViewport) {
    window.visualViewport.removeEventListener('resize', updateBottomHeaderPosition);
    window.visualViewport.removeEventListener('scroll', updateBottomHeaderPosition);
  }
});
</script>

<style lang="scss" scoped>
@use '~/assets/css/mixin.scss';

.header {
  .btn {
    height: 45px;
    background-color: white;
    border-radius: 25px;
    box-shadow: 0px 3px 6px #00000029;
    align-content: center;
    padding: 10px 30px;

    width: fit-content;
    position: absolute;
    top: 20px;
    right: 50px;
    z-index: 1;

    @include mixin.max-screen(mixin.$small) {
      display: none;
    }

    p {
      font-size: 16px;
      letter-spacing: 0.48px;
      line-height: 1;
    }
  }

  .btn-sp {
    display: none;

    @include mixin.max-screen(mixin.$small) {
      display: block;
      font-size: 14px;
      padding: 10px 25px 13px;
      right: 5%;
    }

    p {
      @include mixin.max-screen(mixin.$small) {
        font-size: 14px;
      }
    }
  }

  .bottom-header {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0 20px;
    background-color: black;
    padding: 10px 0;
    position: fixed;
    top: unset;
    bottom: 0px;
    z-index: 1000;

    :global(.ios-safari-sp) {
      .bottom-header {
        padding-top: 15px;
      }
    }

    // 初期状態は非表示
    opacity: 0;
    transform: translateY(100%);
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    pointer-events: none;
    
    // トップページ: heroが消えたら表示
    &.is-sticky {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    .btn {
      display: block;
      width: 160px;
      height: fit-content;
      text-align: center;
      font-size: 16px;
      letter-spacing: 0.48px;
      background-color: white;
      border-radius: 25px;
      padding: 10px 30px;

      position: relative;
      top: unset;
      right: unset;
      z-index: 10;

      @include mixin.max-screen(mixin.$small) {
        width: 140px;
        font-size: 14px;
        padding: 10px 25px;
      }

      p {
        font-size: 16px;
        letter-spacing: 0.48px;
        line-height: 1;

        @include mixin.max-screen(mixin.$small) {
          font-size: 14px;
        }
      }
    }
  }
}

</style>
