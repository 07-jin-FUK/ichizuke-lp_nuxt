<template>
  <div id="hero">
    <div class="copy-wrap">
      <h1>
        <span>求職者が求めていた</span>
        <span>新たなアプローチ</span>
        <span class="logo-type"><img src="/images/logo_white.svg" decoding="async" loading="eager" alt="「イチヅケ」"></span>
      </h1>
      <div class="btn"><p>転職エージェント無料登録</p></div>
      <h2>掲載料金・初期費用<span>0</span>円</h2>
    </div>
    <div class="wave" fetchpriority=high></div>
  </div>

  <section id="about">
    <div class="section-wrap">
      <div class="text-wrap">
        <h5><span class="logo-type"><img src="/images/logo.svg" decoding="async" loading="eager" alt="「イチヅケ」"></span>は、</h5>
        <h5>求職者の"市場価値"を可視化し、新たなアプローチで求職者とのマッチングを実現するキャリアプラットフォームです。</h5>
        <p>求職者がプロフィールを登録すると、企業・エージェントは年収提示ベースのオファーを提示でき、求職者はその提示額と熱意をもとに、最も関心の高いエージェントとのみコンタクトを開始します。</p>
      </div>
      <img src="/images/mock.svg" alt="モック" class="mock">
    </div>
  </section>

  <section id="point" ref="pointSection">
    <div class="slides" ref="slides">

      <div class="section-wrap slide slide1" data-index="0" ref="slide1">
        <div class="mask" ref="mask1">
          <div class="inner" ref="inner1" style="background-image: url(/images/img-point_1.jpg);">
            <div class="text-wrap">
              <h5>本気度の高い求職者へ最短でリーチ<span>できる。</span></h5>
              <p>
                イチヅケには、自分の市場価値を正しく知りたい意欲の高い求職者が集まります。
                プロフィールを公開した段階で、転職意向が強い求職者が多数存在します。
                従来のスカウト型よりレスポンス率が高く、アプローチの効率が大幅に改善できます。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section-wrap slide slide2" data-index="1" ref="slide2">
        <div class="mask" ref="mask2">
          <div class="inner" style="background-image: url(/images/img-point_2.jpg);">
            <div class="text-wrap">
              <h5>競合エージェントとの差別化が図れる。</h5>
              <p>
                求職者側は "提示額(年収)＋熱量" を基準に比較します。
                高評価を提示できるほど求職者との接点を確保しやすく、
                良い提案をできる転職エージェント様が、正当に選ばれる環境が整っています。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section-wrap slide slide3" data-index="2" ref="slide3">
        <div class="mask" ref="mask3">
          <div class="inner" style="background-image: url(/images/img-point_3.jpg);">
            <div class="text-wrap">
              <h5>データに基づいた採用活動ができる。</h5>
              <p>
                様々な職種・スキル・経験値の人材が、どのような反応を得ているのか。
                市場価値のトレンドを知るヒントになります。
                求人戦略・求職者への提案精度・顧客へのレポートに活用でき、
                データドリブンな転職支援が可能になります。
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section id="appeal">
    <div class="section-wrap">
      <h5>
        年収提示型求職マッチングプラットフォーム
        <span>「イチヅケ」の魅力</span>
        <span class="mask"></span>
      </h5>
      <div class="appeal-wrap">
        <div 
          class="appeal-item" 
          v-for="(item, index) in appealItems" 
          :key="index"
        >
          <span class="mask"></span>
          <img :src="item.img" :alt="item.title" />
          <p class="ttl">{{ item.title }}</p>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <section id="blog">
    <div class="section-wrap">
      <h5>イチヅケブログ</h5>

      <div class="blog-wrap">
        <div
          class="blog-item-wrap"
          v-for="(item, index) in blogList"
          :key="index"
        >
          <div class="blog-item">
            <img :src="item.img" :alt="item.title" />
            <div class="info-wrap">
              <span class="date">{{ item.date }}</span>
              <span class="category">{{ item.category }}</span>
            </div>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>

      <div class="blog-dots"></div>
      <div class="btn"><p>ブログ一覧へ</p></div>
    </div>
  </section>

  <section id="faq">
    <div class="section-wrap">
      <h5>よくある質問</h5>

      <div class="faq-wrap">
        <details 
          class="faq-item"
          v-for="(item, index) in faqList"
          :key="index"
          @click="handleDetailClick"
        >
          <summary class="question">
            <p class="faq-question">
              <span>Q</span>{{ item.question }}
            </p>
            <span class="faq-toggle-icon"></span>
          </summary>
          <div class="faq-answer">
            <div class="faq-answer-content">
              <span>A</span>
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const openIndex = ref<number | null>(null);
const pointSection = ref<HTMLElement | null>(null);
const slides = ref<HTMLElement | null>(null);
const currentSlide = ref(0);
const bottomHeaderHeight = ref(0);
const windowWidth = ref(0)

// ==========================================
// 🚀 最適化: DOM参照をrefで保持
// ==========================================
const slide1 = ref<HTMLElement | null>(null);
const slide2 = ref<HTMLElement | null>(null);
const slide3 = ref<HTMLElement | null>(null);
const mask1 = ref<HTMLElement | null>(null);
const mask2 = ref<HTMLElement | null>(null);
const mask3 = ref<HTMLElement | null>(null);
const inner1 = ref<HTMLElement | null>(null);

let io: IntersectionObserver | null = null;

// ==========================================
// アコーディオン
// ==========================================
const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const handleDetailClick = (event: MouseEvent) => {
  event.preventDefault();
  const details = event.currentTarget as HTMLDetailsElement;
  const content = details.querySelector('.faq-answer') as HTMLElement;

  if (details.open) {
    const closingAnim = content.animate(
      [
        { height: content.offsetHeight + 'px', opacity: '1' },
        { height: '0px', opacity: '0' }
      ],
      { duration: 150, easing: 'ease-out' }
    );
    closingAnim.onfinish = () => details.removeAttribute('open');
  } else {
    const allDetails = document.querySelectorAll('.faq-item[open]');
    allDetails.forEach((openDetail) => {
      if (openDetail !== details) {
        const openContent = openDetail.querySelector('.faq-answer') as HTMLElement;
        const closingAnim = openContent.animate(
          [
            { height: openContent.offsetHeight + 'px', opacity: '1' },
            { height: '0px', opacity: '0' }
          ],
          { duration: 150, easing: 'ease-out' }
        );
        closingAnim.onfinish = () => openDetail.removeAttribute('open');
      }
    });

    details.setAttribute('open', 'true');

    nextTick(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const rect = details.getBoundingClientRect();
          const currentY = window.pageYOffset;

          const targetY =
            rect.top +
            currentY -
            bottomHeaderHeight.value -
            10;

          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
        });
      });
    });

    content.animate(
      [
        { height: '0px', opacity: '0' },
        { height: content.offsetHeight + 'px', opacity: '1' }
      ],
      { duration: 150, easing: 'ease-out' }
    );
  }
};

// ==========================================
// 🚀 最適化: point scroll animation
// ==========================================
let rafId: number | null = null;
let isScrolling = false;

const doScroll = () => {
  if (!pointSection.value || !slide1.value || !mask1.value || !inner1.value) return;
  if (!slide2.value || !mask2.value || !slide3.value || !mask3.value) return;

  const pointRect = pointSection.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // すべてのスライドを常に表示
  slide1.value.style.display = "block";
  slide2.value.style.display = "block";
  slide3.value.style.display = "block";

  if (pointRect.top > 0) {
    inner1.value.style.transform = `translate(-50%, -50%) scale(0.5)`;
    mask1.value.style.clipPath = 'inset(0 0 0 0)';
    mask2.value.style.clipPath = 'inset(100% 0 0 0)';
    mask3.value.style.clipPath = 'inset(100% 0 0 0)';
    slide1.value.style.zIndex = "1";
    slide2.value.style.zIndex = "2";
    slide3.value.style.zIndex = "3";
    return;
  }

  const scrolled = Math.abs(pointRect.top);
  const totalHeight = pointRect.height - windowHeight;
  const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);

  const PHASE2_DELAY = 0.3;

  if (progress < 0.25) {
    const t = progress / 0.25;
    inner1.value.style.transform = `translate(-50%, -50%) scale(${0.5 + t * 0.5})`;
    mask1.value.style.clipPath = 'inset(0 0 0 0)';
    mask2.value.style.clipPath = 'inset(100% 0 0 0)';
    mask3.value.style.clipPath = 'inset(100% 0 0 0)';
    slide1.value.style.zIndex = "1";
    slide2.value.style.zIndex = "2";
    slide3.value.style.zIndex = "3";
    return;
  }

  if (progress < 0.55 + PHASE2_DELAY) {
    const t = (progress - (0.25 + PHASE2_DELAY)) / 0.3;
    inner1.value.style.transform = `translate(-50%, -50%) scale(1)`;

    mask1.value.style.clipPath = 'inset(0 0 0 0)';
    mask2.value.style.clipPath = `inset(${(1 - t) * 100}% 0 0 0)`;
    mask3.value.style.clipPath = 'inset(100% 0 0 0)';

    slide1.value.style.zIndex = "1";
    slide2.value.style.zIndex = "2";
    slide3.value.style.zIndex = "3";
    return;
  }

  if (progress >= 0.55 + PHASE2_DELAY) {
    const t = (progress - (0.55 + PHASE2_DELAY)) / (0.45 - PHASE2_DELAY);
    const clampedT = Math.min(Math.max(t, 0), 1);

    inner1.value.style.transform = `translate(-50%, -50%) scale(1)`;

    mask1.value.style.clipPath = 'inset(0 0 0 0)';
    mask2.value.style.clipPath = 'inset(0 0 0 0)';
    mask3.value.style.clipPath = `inset(${(1 - clampedT) * 100}% 0 0 0)`;

    slide1.value.style.zIndex = "1";
    slide2.value.style.zIndex = "2";
    slide3.value.style.zIndex = "3";
    return;
  }
};

const handleScroll = () => {
  if (isScrolling) return;
  isScrolling = true;
  
  if (rafId) cancelAnimationFrame(rafId);
  
  rafId = requestAnimationFrame(() => {
    doScroll();
    isScrolling = false;
  });
};

// ==========================================
// bottom-header 高さ & #point offset
// ==========================================
const updateBottomHeaderHeight = () => {
  const bottomHeader = document.querySelector('.bottom-header') as HTMLElement;
  if (!bottomHeader) return;

  bottomHeaderHeight.value = bottomHeader.offsetHeight;

  document.body.style.paddingBottom = `${bottomHeaderHeight.value}px`;
  document.documentElement.style.setProperty(
    '--bottom-header-height',
    `${bottomHeaderHeight.value}px`
  );
};

// ==========================================
// 🚀 最適化: IntersectionObserverを統合
// ==========================================
const createObservers = () => {
  if (io) io.disconnect();
  
  const isMobile = windowWidth.value <= 480;
  const rootMargin = isMobile ? "0px 0px -15% 0px" : "0px 0px -20% 0px";

  // すべての監視対象を一つのObserverで管理
  const allTargets = document.querySelectorAll<HTMLElement>(`
    #about .text-wrap,
    #about img,
    #appeal .appeal-wrap .appeal-item,
    #appeal .section-wrap > h5,
    #blog .section-wrap > h5,
    #blog .btn,
    #blog .blog-wrap .blog-item-wrap:not(.is-clone) .blog-item,
    #faq .section-wrap > h5,
    #faq .faq-wrap
  `);

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    },
    { threshold: 0.1, rootMargin }
  );
  
  allTargets.forEach(el => io!.observe(el));
};

// ==========================================
// blog scroll + dot control（clone infinite）
// ==========================================
let blogScrollTimer: number | undefined;
let isTransitioning = false;
let isResetting = false; 

const initAutoBlogScroll = () => {
  const wrap = document.querySelector(
    '#blog .blog-wrap'
  ) as HTMLElement | null;
  if (!wrap) return;

  const dotWrap = document.querySelector(
    '#blog .blog-dots'
  ) as HTMLElement | null;
  if (!dotWrap) return;

  // 元スライド
  const originals = Array.from(
    wrap.querySelectorAll('.blog-item-wrap')
  ) as HTMLElement[];
  const realLength = originals.length;
  if (realLength === 0) return;

  // ===== reset =====
  if (blogScrollTimer) {
    clearInterval(blogScrollTimer);
    blogScrollTimer = undefined;
  }
  dotWrap.innerHTML = '';
  isTransitioning = false;
  isResetting = false;

  // ===== dots =====
  let current = 0;

  const updateDots = () => {
    dotWrap.querySelectorAll('.blog-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  };

  originals.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'blog-dot';
    if (i === 0) d.classList.add('active');

    d.addEventListener('click', () => {
      stopAuto();
      goToSlide(i, true);
      startAuto();
    });

    dotWrap.appendChild(d);
  });

  const setupInfinite = () => {
    wrap.querySelectorAll('.is-clone').forEach(el => el.remove());

    // 後ろに clone
    originals.forEach(el => {
      const clone = el.cloneNode(true) as HTMLElement;
      clone.classList.add('is-clone');
      const blogItem = clone.querySelector('.blog-item');
      if (blogItem) blogItem.classList.remove('show');
      wrap.appendChild(clone);
    });

    // 前に clone
    [...originals].reverse().forEach(el => {
      const clone = el.cloneNode(true) as HTMLElement;
      clone.classList.add('is-clone');
      const blogItem = clone.querySelector('.blog-item');
      if (blogItem) blogItem.classList.remove('show');
      wrap.insertBefore(clone, wrap.firstChild);
    });

    // 本物の1枚目へ
    wrap.scrollTo({
      left: getSlidePosition(0),
      behavior: 'auto'
    });
  };

  const getSlidePosition = (index: number) => {
    const allSlides = wrap.querySelectorAll<HTMLElement>('.blog-item-wrap');
    return allSlides[realLength + index].offsetLeft;
  };

  const goToSlide = (index: number, smooth = true) => {
    if (isTransitioning) return;

    current = index;
    updateDots();

    wrap.scrollTo({
      left: getSlidePosition(index),
      behavior: smooth ? 'smooth' : 'auto'
    });
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    isTransitioning = true;

    const allSlides = wrap.querySelectorAll<HTMLElement>('.blog-item-wrap');
    const nextIndex = realLength + current + 1;

    wrap.scrollTo({
      left: allSlides[nextIndex].offsetLeft,
      behavior: 'smooth'
    });

    current = (current + 1) % realLength;
    updateDots();

    setTimeout(() => {
      if (current === 0) {
        isResetting = true;
        
        const realFirstItem = originals[0].querySelector('.blog-item') as HTMLElement;
        
        if (realFirstItem) {
          realFirstItem.style.transition = 'none';
          realFirstItem.classList.add('show');
        }
        
        wrap.scrollTo({
          left: getSlidePosition(0),
          behavior: 'auto'
        });
        
        setTimeout(() => {
          if (realFirstItem) {
            realFirstItem.style.transition = '';
          }
          isResetting = false;
        }, 100);
      }
      isTransitioning = false;
    }, 450);
  };

  const startAuto = () => {
    stopAuto();
    blogScrollTimer = window.setInterval(nextSlide, 4000);
  };

  const stopAuto = () => {
    if (blogScrollTimer) {
      clearInterval(blogScrollTimer);
      blogScrollTimer = undefined;
    }
  };

  // ===== PC：auto slide 無効 =====
  if (window.innerWidth > 480) {
    wrap.querySelectorAll('.is-clone').forEach(el => el.remove());
    wrap.scrollTo({ left: 0, behavior: 'auto' });
    updateDots();
    return;
  }

  setupInfinite();
  updateDots();
  startAuto();
  
  wrap.querySelectorAll('.is-clone .blog-item').forEach(el => {
    el.classList.remove('show');
  });
};

// ==========================================
// 3行超え判定
// ==========================================
const applyEllipsis = () => {
  const texts = document.querySelectorAll<HTMLParagraphElement>(
    '#blog .blog-item p'
  );

  texts.forEach(p => {
    p.classList.remove('is-clamped');

    const style = window.getComputedStyle(p);
    const lineHeight = parseFloat(style.lineHeight);
    const lines = Math.round(p.scrollHeight / lineHeight);

    if (lines > 3) {
      p.classList.add('is-clamped');
    }
  });
};

// ==========================================
// onMounted / onUnmounted
// ==========================================
const handleResize = async () => {
  windowWidth.value = window.innerWidth;

  await nextTick();
  await nextTick();

  initAutoBlogScroll();

  await nextTick();
  applyEllipsis();

  updateBottomHeaderHeight();
  createObservers();
};

onMounted(async () => {
  windowWidth.value = window.innerWidth;
  
  await nextTick();
  await nextTick();
  await new Promise(r => setTimeout(r, 100));

  initAutoBlogScroll();
  applyEllipsis();

  updateBottomHeaderHeight();
  createObservers();

  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('scroll', handleScroll);

  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  if (io) {
    io.disconnect();
    io = null;
  }

  if (blogScrollTimer) {
    clearInterval(blogScrollTimer);
    blogScrollTimer = undefined;
  }

  document.body.style.paddingBottom = '';
});

// ==========================================
// データ配列
// ==========================================
const appealItems = [
  {
    img: "/images/img-appeal_1.jpg",
    title: "求職者へのアプローチ無制限",
    text: "求職者へは、回数・上限なく提案が可能。オファー枠やメッセージ上限に縛られず、候補者への接触スピードと量の両面を高め、機会損失を防ぎながらアクティブな獲得が行えます。"
  },
  {
    img: "/images/img-appeal_2.jpg",
    title: "採用コストの効率化",
    text: "求職者のスキル・経験・実績などの情報を確認したうえで、提示したい年収を示すことで、求職者の最終的に大きな判断材料の「年収」から判断しやすくなり、ミスマッチを最小化します。"
  },
  {
    img: "/images/img-appeal_3.jpg",
    title: "求職者と直接コンタクト",
    text: "条件を満たすと求職者とダイレクトにやり取りが可能になります。仲介を挟まないためレスポンスが早く、提案の温度感がそのまま届き、意思決定の速度と成約率が向上します。"
  }
];

const blogList = [
  {
    img: "/images/img-blog_1.jpg",
    date: "2025.11.11",
    category: "お知らせ",
    title: "提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ",
  },
  {
    img: "/images/img-blog_2.jpg",
    date: "2025.11.11",
    category: "お知らせ",
    title: "提供サービス変更及び利用規約改定のお知らせ",
  },
  {
    img: "/images/img-blog_3.jpg",
    date: "2025.11.11",
    category: "お知らせ",
    title: "提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ",
  },
  {
    img: "/images/img-blog_4.jpg",
    date: "2025.11.11",
    category: "お知らせ",
    title: "提供サービス変更及び利用規約改定のお知らせ",
  },
];

const faqList = [
  {
    question: "サービスの利用に料金はかかりますか?",
    answer: "基本プランは無料でご利用いただけます。有料オプションをご希望の場合のみ追加費用が発生します。",
  },
  {
    question: "パスワードを忘れた場合はどうすればいいですか?",
    answer: "ログイン画面の「パスワードをお忘れの方」より再設定手続きを行ってください。",
  },
  {
    question: "登録後にメールアドレスの変更は可能ですか?",
    answer: "マイページ内のアカウント設定からメールアドレスの変更が可能です。",
  },
  {
    question: "問い合わせの返信にはどれくらい時間がかかりますか?",
    answer: "通常1〜2営業日以内にご返信しております。混雑時はお時間をいただく場合があります。",
  },
];
</script>

<style lang="scss" scoped>
@use '~/assets/css/mixin.scss';

#hero {
  width: 100%;
  height: 100vh;
  background-image: url(/images/img-hero.jpg);
  background-position: center;
  background-size: cover;
  align-content: center;
  position: relative;

  @include mixin.max-screen(mixin.$small) {
    background-position: 66% 70%;
    background-size: 320%;

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.15);
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .copy-wrap {
    padding-left: 11.72%;
    position: absolute;
    bottom: 21.875%;
    z-index: 1;

    @include mixin.max-screen(mixin.$small) {
      padding-left: 8%;
      bottom: 13%;
    }

    h1 {
      font-size: 35px;
      color: white;
      font-weight: 500;
      letter-spacing: 1.05px;
      line-height: 1.7;
      text-shadow: 0px 3px 6px #0000005C;

      @include mixin.max-screen(mixin.$small) {
        font-size: 25px;
      }

      span {
        display: block;

        &.logo-type {
          img {
            filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.4));
            width: 280px;
            height: 75px;
            margin-top: 10px;
            margin-left: 5px;

            @include mixin.max-screen(mixin.$small) {
              width: 200px;
              height: 40px;
              margin-top: 15px;
            }
          }
        }
      }
    }

    .btn {
      background-color: mixin.$main;
      border-radius: 30px;
      padding: 10px 40px 13px;
      margin-top: 20px;
      display: inline-block;

      @include mixin.max-screen(mixin.$small) {
        padding: 12px 30px 15px;
        margin-top: 25px;
      }

      p {
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.54px;
        line-height: 1;

        @include mixin.max-screen(mixin.$small) {
          font-size: 14px;
        }
      }
    }

    h2 {
      font-size: 30px;
      color: white;
      font-weight: 500;
      letter-spacing: 0.9px;
      line-height: 1;
      text-shadow: 0px 3px 6px #0000005C;
      margin-top: 30px;

      @include mixin.max-screen(mixin.$small) {
        font-size: 24px;
        margin-top: 0px;
      }

      span {
        font-size: 80px;
        color: mixin.$main;
        letter-spacing: 2.4px;
        text-shadow: none;
        min-width: 60px;
        display: inline-block;
        text-align: end;
        margin-right: 10px;

        @include mixin.max-screen(mixin.$small) {
          font-size: 70px;
          min-width: 55px;
        }
      }
    }
  }

  .wave {
    width: 100vw;
    height: 55px;
    background-image: url(/images/wave.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: -1px;

    @include mixin.max-screen(mixin.$small) {
      height: 65px;
      background-image: url(/images/wave_sp.svg);
    }
  }
}

#about {
  .section-wrap {
    max-width: 1020px;
    width: 90%;
    display: flex;
    gap: 0 110px;
    padding: 80px 0 100px;
    margin: auto;
    align-items: center;

    @include mixin.max-screen(mixin.$small) {
      flex-direction: column;
      padding: 50px 0;
      gap: 55px 0;
    }

    .text-wrap {
      max-width: 440px;
      width: 100%;

      opacity: 0;
      transform: scale(0.95);
      transition: 
        opacity 0.6s ease,
        transform 0.6s ease;

      &.show {
        opacity: 1;
        transform: scale(1);
        will-change: opacity, transform;
      }

      h5 {
        font-size: 18px;
        letter-spacing: 0.54px;
        line-height: 1.7;
        display: flex;
        align-items: baseline;

        @include mixin.max-screen(mixin.$small) {
          font-size: 16px;
          margin-bottom: 0px;
        }

        .logo-type {
          margin-right: 5px;

          img {
            width: 120px;
            height: 30px;
            object-fit: contain;

            @include mixin.max-screen(mixin.$small) {
              width: 100px;
              height: 22px;
            }
          }
        }
      }

      p {
        font-size: 15px;
        letter-spacing: 0.45px;
        line-height: 1.73;
        margin-top: 40px;

        @include mixin.max-screen(mixin.$small) {
          font-size: 14px;
          margin-top: 25px;
        }
      }
    }

    img {
      width: 470px;
      height: 440px;
      object-fit: cover;
      flex-shrink: 0;

      opacity: 0;
      transform: scale(0.95);
      transition: 
        opacity 0.6s ease,
        transform 0.6s ease;

      &.show {
        opacity: 1;
        transform: scale(1);
        will-change: opacity, transform;
      }
    }
  }
}

#point {
  position: relative;
  height: 500vh;

  .slides {
    position: sticky;
    top: 0;
    width: 100vw;
    height: calc(100vh - var(--bottom-header-height));
    overflow: hidden;
  }

  .section-wrap {
    position: absolute;
    inset: 0;
    overflow: hidden;

    .mask {
      position: absolute;
      inset: 0;
      clip-path: inset(0 0 0 0);
      background: #fff;         
      z-index: 2;               
      overflow: hidden;

      &.mask--hide {
        background: transparent; 
      }

      .inner {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        transform: translate(-50%, -50%) scale(1);
        transform-origin: center center;
        background-position: center center;
        background-size: cover;
        z-index: 1;

        &::before {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          background-color: black;
          opacity: 0.15;
        }
      }
    }

    .text-wrap {
      position: absolute;
      top: 50%;
      right: 150px;
      transform: translateY(-50%);
      max-width: 390px;
      color: white;
      z-index: 3;

      @include mixin.max-screen(mixin.$small) {
        top: unset;
        right: 5%;
        bottom: 10%;
        transform: unset;
        width: 90%;
      }

      h5 {
        font-size: 18px;
        line-height: 1.7;
        letter-spacing: 0.54px;
        text-shadow: 0px 3px 7px #00000064;
        margin-bottom: 25px;

        span {
          display: inline;

          @include mixin.max-screen(mixin.$small) {
            display: block;
          }
        }
      }

      p {
        font-size: 14px;
        letter-spacing: 0.42px;
        line-height: 1.8;
        text-shadow: 0px 3px 7px #00000040;
      }
    }

    &.slide1 { z-index: 3; display: block; }
    &.slide2 { z-index: 2; display: none; }
    &.slide3 { z-index: 1; display: none; }

    &.is-front { z-index: 10; }

    &.slide2 .text-wrap {
      right: unset;
      left: 150px;

      @include mixin.max-screen(mixin.$small) {
        left: unset;
        right: 5%;
      }
    }

    &.slide1 .mask .inner {
      @include mixin.max-screen(mixin.$small) {
        background-position: 30% 0;
      }
    }

    &.slide2 .mask .inner {
      @include mixin.max-screen(mixin.$small) {
        background-position: 83% 0;
      }
    }

    &.slide3 .mask .inner {
      @include mixin.max-screen(mixin.$small) {
        background-position: 15% 0;
      }
    }
  }
}


#appeal {
  width: 100vw;
  overflow: hidden;

  .section-wrap {
    padding: 100px 0;

    @include mixin.max-screen(mixin.$small) {
      width: 90%;
      padding: 50px 0;
      margin: auto;
    }

    h5 {
      font-size: 20px;
      letter-spacing: 0.6px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 60px;

      position: relative;
      opacity: 0;
      transform: scale(0.95);
      transition: 
        opacity 0.6s ease,
        transform 0.6s ease;

      @include mixin.max-screen(mixin.$small) {
        font-size: 16px;
        margin-bottom: 30px;
      }

      &.show {
        opacity: 1;
        transform: scale(1);
        will-change: opacity, transform;
      }

      span {
        display: block;
      }
    }

    .appeal-wrap {
      max-width: 980px;
      width: 90%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0 35px;
      margin: auto;

      @include mixin.max-screen(mixin.$small) {
        width: 100%;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px 0;
      }

      .appeal-item {
        max-width: 303px;
        width: 100%;
        border-radius: 23px;
        box-shadow: 0px 3px 6px #00000029;
        padding: 30px 20px;

        opacity: 0;
        transform: scale(0.95);
        transition: 
          opacity 0.6s ease,
          transform 0.6s ease;

        &.show {
          opacity: 1;
          transform: scale(1);
          will-change: opacity, transform;
        }

        @include mixin.max-screen(mixin.$small) {
          max-width: unset;
        }

        img {
          width: 200px;
          height: auto;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          object-position: center;
          border-radius: 50%;
          margin: auto auto 15px;
        }

        .ttl {
          font-size: 16px;
          letter-spacing: 0.48px;
          line-height: 1.5;
          text-align: center;
          margin-bottom: 20px;
        }
      }
    }
  }
}

#blog {
  background-color: #EFEFEF;
  padding: 100px 0;

  @include mixin.max-screen(mixin.$small) {
    padding: 50px 5%;
    margin: auto;
  }

  h5 {
    font-size: 20px;
    letter-spacing: 0.6px;
    text-align: center;
    margin-bottom: 60px;

    opacity: 0;
    transform: scale(0.95);
    transition: 
      opacity 0.6s ease,
      transform 0.6s ease;

    @include mixin.max-screen(mixin.$small) {
      font-size: 16px;
      margin-bottom: 30px;
    }

    &.show {
      opacity: 1;
      transform: scale(1);
      will-change: opacity, transform;
    }
  }

  .section-wrap {
    max-width: 980px;
    width: 100%;
    margin: auto;

    .blog-wrap {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0 20px;

      @include mixin.max-screen(mixin.$small) {
        transition: opacity 0.2s ease;

        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;

        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }

        &.is-fade {
          opacity: 0;
        }
      }

      .blog-item-wrap {
        @include mixin.max-screen(mixin.$small) {
          flex: 0 0 100%;
          scroll-snap-align: center;
          padding: 10px;
          box-sizing: border-box;
        }

        &.is-clone {
          pointer-events: none;
        }

        .blog-item {
          height: 100%;
          background-color: white;
          border-radius: 15px;
          box-shadow: 0px 3px 6px #00000029;
          padding-bottom: 15px;
          
          opacity: 0;
          transform: scale(0.95);
          transition: 
            opacity 0.6s ease,
            transform 0.6s ease;

          &.show {
            opacity: 1;
            transform: scale(1);
            will-change: opacity, transform;
          }

          @include mixin.max-screen(mixin.$small) {
            max-width: none;
            padding-bottom: 25px;
          }

          img {
            width: 100%;
            height: auto;
            aspect-ratio: 230 / 165;
            object-fit: cover;
            object-position: center;
            border-radius: 15px 15px 0 0;
          }

          .info-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 15px;
            padding-bottom: 10px;

            @include mixin.max-screen(mixin.$small) {
              padding-top: 25px;
            }

            .date {
              font-size: 13px;
            }

            .category {
              font-size: 9px;
              letter-spacing: 0.27px;
              color: white;
              background-color: #707070;
              border-radius: 12px;
              padding: 5px 10px;

              @include mixin.max-screen(mixin.$small) {
                font-size: 10px;
              }
            }
          }

          p {
            font-size: 12px;
            letter-spacing: 0.39px;
            line-height: 1.6;
            max-height: calc(1.6em * 3);
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;

            @include mixin.max-screen(mixin.$small) {
              letter-spacing: 0.5px;
            }
          
            &::after {
              content: '';
            }

            &.is-clamped::after {
              content: '…';
              position: absolute;
              right: 17px;
              bottom: 11px;
              background: #fff;

              @include mixin.max-screen(mixin.$small) {
                right: 35px;
                bottom: 21px;
              }
            }
          } 

          .info-wrap, p {
            max-width: 200px;
            width: 100%;
            margin: auto;

            @include mixin.max-screen(mixin.$small) {
              max-width: 80%;
            }
          }
        }
      }
    }

    .btn {
      width: fit-content;
      background-color: #313131;
      border-radius: 20px;
      padding: 10px 25px;
      margin-top: 50px;
      margin-left: auto;
      display: block;

      opacity: 0;
      transform: scale(0.95);
      transition: 
        opacity 0.6s ease,
        transform 0.6s ease;

      &.show {
        opacity: 1;
        transform: scale(1);
        will-change: opacity, transform;
      }

      @include mixin.max-screen(mixin.$small) {
        margin-top: 20px;
      }

      p {
        font-size: 14px;
        color: white;
        letter-spacing: 0.42px;
        text-decoration: none;
        line-height: 1.05;

        @include mixin.max-screen(mixin.$small) {
          font-size: 12px;
          line-height: 1.25;
        }
      }
    }
  }
}

#faq {
  .section-wrap {
    max-width: 980px;
    width: 100%;
    padding: 100px 0;
    margin: auto;

    @include mixin.max-screen(mixin.$small) {
      width: 90%;
      padding: 50px 0;
    }

    h5 {
      font-size: 20px;
      text-align: center;

      opacity: 0;
      transform: scale(0.95);
      transition: 
        opacity 0.6s ease,
        transform 0.6s ease;

      &.show {
        opacity: 1;
        transform: scale(1);
        will-change: opacity, transform;
      }
    }

    .faq-wrap {
      margin-top: 60px;

      @include mixin.max-screen(mixin.$small) {
        margin-top: 30px;
      }

      opacity: 0;
      transform: scale(0.95);
      transition: 
        opacity 0.6s ease,
        transform 0.6s ease;

      &.show {
        opacity: 1;
        transform: scale(1);
        will-change: opacity, transform;
      }

      .faq-item {
        margin-bottom: 20px;

        &:last-of-type {
          margin-bottom: 0;
        }

        summary {
          list-style: none;
          cursor: pointer;

          &::-webkit-details-marker {
            display: none;
          }
        }

        .question {
          box-shadow: 0px 3px 6px #00000029;
          display: flex;
          align-items: center;
          padding: 15px 20px;
          background-color: white;

          @include mixin.max-screen(mixin.$small) {
            padding: 10px 15px;
          }

          .faq-question {
            font-size: 16px;
            display: flex;
            align-items: center;
            margin: 0 15px 0 0;

            @include mixin.max-screen(mixin.$small) {
              font-size: 14px;
              align-items: flex-start;
            }

            span {
              display: block;
              width: 16px;
              font-size: 20px;
              font-weight: bold;
              margin-right: 15px;

              @include mixin.max-screen(mixin.$small) {
                font-size: 18px;
                margin-top: -5px;
                margin-right: 10px;
              }
            }
          }

          .faq-toggle-icon {
            width: 20px;
            height: 20px;
            position: relative;
            flex-shrink: 0;
            margin-left: auto;
            transition: transform 0.3s ease;

            @include mixin.max-screen(mixin.$small) {
              width: 15px;
              height: 15px;
            }

            &::before,
            &::after {
              content: '';
              position: absolute;
              background: black;
              transition: transform 0.3s ease;
            }

            &::before {
              top: 50%;
              left: 0;
              right: 0;
              height: 1px;
              transform: translateY(-50%);
            }

            &::after {
              left: 50%;
              top: 0;
              bottom: 0;
              width: 1px;
              transform: translateX(-50%);
            }
          }
        }

        &[open] {
          .faq-toggle-icon::after {
            transform: translateX(-50%) rotate(90deg);
            opacity: 0;
          }

          .faq-item .faq-answer {
            padding-bottom: var(--bottom-header-height);
          }
        }

        .faq-answer {
          overflow: hidden;
          height: 0;
        }

        &[open] .faq-answer {
          height: auto;
        }

        .faq-answer-content {
          display: flex;
          color: white;
          background-color: #1D1D1D;
          padding: 15px 20px;

          @include mixin.max-screen(mixin.$small) {
            padding: 10px 15px;
          }

          > span {
            width: 16px;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            line-height: 1;
            margin-top: 0.1em;
            flex-shrink: 0;
            margin-right: 15px;

            @include mixin.max-screen(mixin.$small) {
              font-size: 18px;
              margin-right: 10px;
            }
          }

          > p {
            flex: 1;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
