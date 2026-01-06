<template>
  <div id="hero">
    <div class="copy-wrap">
      <h1>
        <span>求職者が求めていた</span>
        <span>新たなアプローチ</span>
        <span class="logo-type"><img src="/images/logo_white.svg" decoding="async" loading="eager" alt="「イチヅケ」" /></span>
      </h1>
      <div class="btn"><p>転職エージェント無料登録</p></div>
      <h2>
        掲載料金・初期費用
        <span>0</span>
        円
      </h2>
    </div>
    <div class="wave" fetchpriority="high"></div>
  </div>

  <section id="about">
    <div class="section-wrap about-top">
      <div class="text-wrap">
        <h5>
          <span class="logo-type"><img src="/images/logo.svg" decoding="async" loading="eager" alt="「イチヅケ」" /></span>
          は、
        </h5>
        <h5>求職者の"市場価値"を可視化し、新たなアプローチで求職者とのマッチングを実現するキャリアプラットフォームです。</h5>
        <p>求職者がプロフィールを登録すると、企業・エージェントは年収提示ベースのオファーを提示でき、求職者はその提示額と熱意をもとに、最も関心の高いエージェントとのみコンタクトを開始します。</p>
      </div>
      <img src="/images/mock.svg" alt="モック" class="mock" />
    </div>
  </section>

  <section id="point" ref="pointSection">
    <div class="slides" ref="slides">
      <div class="section-wrap slide slide1" data-index="0" ref="slide1">
        <div class="mask" ref="mask1">
          <div class="inner" ref="inner1" style="background-image: url(/images/img-point_1.jpg)"></div>
        </div>
        <div class="text-wrap" ref="textWrap1">
          <h5>
            本気度の高い求職者へ最短でリーチ
            <span>できる。</span>
          </h5>
          <p>イチヅケには、自分の市場価値を正しく知りたい意欲の高い求職者が集まります。 プロフィールを公開した段階で、転職意向が強い求職者が多数存在します。 従来のスカウト型よりレスポンス率が高く、アプローチの効率が大幅に改善できます。</p>
        </div>
      </div>

      <div class="section-wrap slide slide2" data-index="1" ref="slide2">
        <div class="mask" ref="mask2">
          <div class="inner" style="background-image: url(/images/img-point_2.jpg)">
            <div class="text-wrap">
              <h5>競合エージェントとの差別化が図れる。</h5>
              <p>求職者側は "提示額(年収)＋熱量" を基準に比較します。 高評価を提示できるほど求職者との接点を確保しやすく、 良い提案をできる転職エージェント様が、正当に選ばれる環境が整っています。</p>
            </div>
          </div>
        </div>
      </div>

      <div class="section-wrap slide slide3" data-index="2" ref="slide3">
        <div class="mask" ref="mask3">
          <div class="inner" style="background-image: url(/images/img-point_3.jpg)">
            <div class="text-wrap">
              <h5>データに基づいた採用活動ができる。</h5>
              <p>様々な職種・スキル・経験値の人材が、どのような反応を得ているのか。 市場価値のトレンドを知るヒントになります。 求人戦略・求職者への提案精度・顧客へのレポートに活用でき、 データドリブンな転職支援が可能になります。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="appeal">
    <div class="section-wrap">
      <h5>
        <span>「イチヅケ」の魅力</span>
        <span class="mask"></span>
      </h5>
      <div class="appeal-wrap">
        <div class="appeal-item" v-for="(item, index) in appealItems" :key="index">
          <span class="mask"></span>
          <img :src="item.img" :alt="item.title" />
          <div class="text-content">
            <p class="ttl">{{ item.title }}</p>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="blog">
    <div class="section-wrap">
      <h5>イチヅケブログ</h5>

      <div class="blog-wrap">
        <div class="blog-item-wrap" v-for="(item, index) in blogList" :key="index">
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
        <details class="faq-item" v-for="(item, index) in faqList" :key="index" @click="handleDetailClick">
          <summary class="question">
            <p class="faq-question">
              <span>Q</span>
              {{ item.question }}
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
import { ref, onMounted, onUnmounted, nextTick } from "vue";

// const openIndex = ref<number | null>(null);
const pointSection = ref<HTMLElement | null>(null);

const bottomHeaderHeight = ref(0);
const windowWidth = ref(0);

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
const textWrap1 = ref<HTMLElement | null>(null);

let io: IntersectionObserver | null = null;

// ==========================================
// アコーディオン
// ==========================================

const handleDetailClick = (event: MouseEvent) => {
  event.preventDefault();
  const details = event.currentTarget as HTMLDetailsElement;
  const content = details.querySelector(".faq-answer") as HTMLElement;

  if (details.open) {
    const closingAnim = content.animate(
      [
        { height: content.offsetHeight + "px", opacity: "1" },
        { height: "0px", opacity: "0" },
      ],
      { duration: 150, easing: "ease-out" }
    );
    closingAnim.onfinish = () => details.removeAttribute("open");
  } else {
    const allDetails = document.querySelectorAll(".faq-item[open]");
    allDetails.forEach((openDetail) => {
      if (openDetail !== details) {
        const openContent = openDetail.querySelector(".faq-answer") as HTMLElement;
        const closingAnim = openContent.animate(
          [
            { height: openContent.offsetHeight + "px", opacity: "1" },
            { height: "0px", opacity: "0" },
          ],
          { duration: 150, easing: "ease-out" }
        );
        closingAnim.onfinish = () => openDetail.removeAttribute("open");
      }
    });

    details.setAttribute("open", "true");

    nextTick(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const rect = details.getBoundingClientRect();
          const currentY = window.pageYOffset;

          // 最後の質問かどうかを判定
          const allDetails = document.querySelectorAll(".faq-item");
          const isLastItem = details === allDetails[allDetails.length - 1];

          // 最後の質問の場合はさらに余裕を持たせる
          const extraOffset = isLastItem ? 30 : 10;

          const targetY = rect.top + currentY - bottomHeaderHeight.value - extraOffset;

          window.scrollTo({
            top: targetY,
            behavior: "smooth",
          });
        });
      });
    });

    content.animate(
      [
        { height: "0px", opacity: "0" },
        { height: content.offsetHeight + "px", opacity: "1" },
      ],
      { duration: 150, easing: "ease-out" }
    );
  }
};

// ==========================================
// 🚀 最適化: point scroll animation
// ==========================================
let rafId: number | null = null;
let isScrolling = false;

const doScroll = () => {
  if (!pointSection.value || !slide1.value || !mask1.value || !inner1.value || !textWrap1.value) return;
  if (!slide2.value || !mask2.value || !slide3.value || !mask3.value) return;

  const pointRect = pointSection.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // すべてのスライドを常に表示
  slide1.value.style.display = "block";
  slide2.value.style.display = "block";
  slide3.value.style.display = "block";

  if (pointRect.top > 0) {
    inner1.value.style.transform = `translate(-50%, -50%) scale(0.5)`;
    mask1.value.style.clipPath = "inset(0 0 0 0)";
    mask2.value.style.clipPath = "inset(100% 0 0 0)";
    mask3.value.style.clipPath = "inset(100% 0 0 0)";
    slide1.value.style.zIndex = "1";
    slide2.value.style.zIndex = "2";
    slide3.value.style.zIndex = "3";
    textWrap1.value.style.opacity = "0"; // ← 追加
    return;
  }

  const scrolled = Math.abs(pointRect.top);
  const totalHeight = pointRect.height - windowHeight;
  const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);

  // フェーズ1: 1枚目ズームイン (0 ~ 0.2)
  // フェーズ2: 1枚目維持 (0.2 ~ 0.35)
  // フェーズ3: 2枚目表示 (0.35 ~ 0.55)
  // フェーズ4: 2枚目維持 (0.55 ~ 0.7)
  // フェーズ5: 3枚目表示 (0.7 ~ 0.9)
  // フェーズ6: 3枚目維持 (0.9 ~ 1.0)

  // フェーズ1: 1枚目ズームイン
  if (progress < 0.2) {
    const t = progress / 0.2;
    inner1.value.style.transform = `translate(-50%, -50%) scale(${0.5 + t * 0.5})`;
    mask1.value.style.clipPath = "inset(0 0 0 0)";
    mask2.value.style.clipPath = "inset(100% 0 0 0)";
    mask3.value.style.clipPath = "inset(100% 0 0 0)";
    slide1.value.style.zIndex = "1";
    slide2.value.style.zIndex = "2";
    slide3.value.style.zIndex = "3";
    textWrap1.value.style.opacity = "0";
    return;
  }

  // フェーズ2: 1枚目維持
  if (progress < 0.35) {
    inner1.value.style.transform = `translate(-50%, -50%) scale(1)`;
    mask1.value.style.clipPath = "inset(0 0 0 0)";
    mask2.value.style.clipPath = "inset(100% 0 0 0)";
    mask3.value.style.clipPath = "inset(100% 0 0 0)";
    slide1.value.style.zIndex = "1";
    slide2.value.style.zIndex = "2";
    slide3.value.style.zIndex = "3";
    textWrap1.value.style.opacity = "1"; // ← 追加

    return;
  }

  // フェーズ3: 2枚目表示
  if (progress < 0.55) {
    const t = (progress - 0.35) / 0.2;
    inner1.value.style.transform = `translate(-50%, -50%) scale(1)`;
    mask1.value.style.clipPath = "inset(0 0 0 0)";
    mask2.value.style.clipPath = `inset(${(1 - t) * 100}% 0 0 0)`;
    mask3.value.style.clipPath = "inset(100% 0 0 0)";
    slide1.value.style.zIndex = "1";
    slide2.value.style.zIndex = "2";
    slide3.value.style.zIndex = "3";
    textWrap1.value.style.opacity = "1"; // ← 追加
    return;
  }

  // フェーズ4: 2枚目維持
  if (progress < 0.7) {
    inner1.value.style.transform = `translate(-50%, -50%) scale(1)`;
    mask1.value.style.clipPath = "inset(0 0 0 0)";
    mask2.value.style.clipPath = "inset(0 0 0 0)";
    mask3.value.style.clipPath = "inset(100% 0 0 0)";
    slide1.value.style.zIndex = "1";
    slide2.value.style.zIndex = "2";
    slide3.value.style.zIndex = "3";
    return;
  }

  // フェーズ5: 3枚目表示
  if (progress < 0.9) {
    const t = (progress - 0.7) / 0.2;
    inner1.value.style.transform = `translate(-50%, -50%) scale(1)`;
    mask1.value.style.clipPath = "inset(0 0 0 0)";
    mask2.value.style.clipPath = "inset(0 0 0 0)";
    mask3.value.style.clipPath = `inset(${(1 - t) * 100}% 0 0 0)`;
    slide1.value.style.zIndex = "1";
    slide2.value.style.zIndex = "2";
    slide3.value.style.zIndex = "3";
    return;
  }

  // フェーズ6: 3枚目維持
  inner1.value.style.transform = `translate(-50%, -50%) scale(1)`;
  mask1.value.style.clipPath = "inset(0 0 0 0)";
  mask2.value.style.clipPath = "inset(0 0 0 0)";
  mask3.value.style.clipPath = "inset(0 0 0 0)";
  slide1.value.style.zIndex = "1";
  slide2.value.style.zIndex = "2";
  slide3.value.style.zIndex = "3";
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
  const bottomHeader = document.querySelector(".bottom-header") as HTMLElement;
  if (!bottomHeader) return;

  bottomHeaderHeight.value = bottomHeader.offsetHeight;

  document.body.style.paddingBottom = `${bottomHeaderHeight.value}px`;
  document.documentElement.style.setProperty("--bottom-header-height", `${bottomHeaderHeight.value}px`);
};

// ==========================================
// 🚀 最適化: IntersectionObserverを統合
// ==========================================
const createObservers = () => {
  if (io) io.disconnect();

  const isMiddle = window.innerWidth > 836 && window.innerWidth <= 1060; // 3個表示
  const isTablet = window.innerWidth > 480 && window.innerWidth <= 836; // 2個表示
  const isMobile = window.innerWidth <= 480;
  const isPC = window.innerWidth > 1060;  // ⭐️ PC判定を追加
  const rootMargin = isMobile ? "0px 0px -15% 0px" : "0px 0px -20% 0px";

  // ⭐️ タブレットまたはPCの場合はブログアイテムを監視対象から除外
  const blogSelector = (isTablet || isPC)  // ⭐️ ここを修正
    ? "" 
    : "#blog .blog-wrap .blog-item-wrap:not(.is-clone) .blog-item,";
  const allTargets = document.querySelectorAll<HTMLElement>(`
    #about .text-wrap,
    #about img,
    #appeal .appeal-wrap .appeal-item,
    #appeal .section-wrap > h5,
    #blog .section-wrap > h5,
    #blog .btn,
    ${blogSelector}
    #faq .section-wrap > h5,
    #faq .faq-wrap
  `);

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    },
    { threshold: 0.1, rootMargin }
  );

  allTargets.forEach((el) => io!.observe(el));

  // blog-wrapを監視（画面外に出たら1枚目にリセット）
  if (isMobile) {
    const blogWrap = document.querySelector("#blog .blog-wrap") as HTMLElement;
    if (blogWrap) {
      const blogWrapObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // 完全に画面外に出た時だけ1枚目にリセット
            const rect = entry.target.getBoundingClientRect();
            const isCompletelyOut = rect.bottom < 0 || rect.top > window.innerHeight;

            if (!entry.isIntersecting && isCompletelyOut) {
              const firstOriginal = blogWrap.querySelector(".blog-item-wrap:not(.is-clone)") as HTMLElement;
              if (firstOriginal) {
                blogWrap.scrollTo({ left: firstOriginal.offsetLeft, behavior: "auto" });
                const dots = document.querySelectorAll("#blog .blog-dot");
                dots.forEach((d, i) => d.classList.toggle("active", i === 0));
              }
            }
          });
        },
        { threshold: 0 }
      );

      blogWrapObserver.observe(blogWrap);
    }
  }
};

// blog scroll + dot control（clone infinite）
// ==========================================
let blogScrollTimer: number | undefined;
let isTransitioning = false;

let handleManualScrollFunc: ((event: Event) => void) | null = null; 

const initAutoBlogScroll = () => {
  const wrap = document.querySelector("#blog .blog-wrap") as HTMLElement | null;
  if (!wrap) return;

  const dotWrap = document.querySelector("#blog .blog-dots") as HTMLElement | null;
  if (!dotWrap) return;

  // ===== reset =====
  if (blogScrollTimer) {
    clearInterval(blogScrollTimer);
    blogScrollTimer = undefined;
  }
  dotWrap.innerHTML = "";
  isTransitioning = false;
  
    if (handleManualScrollFunc) {
    wrap.removeEventListener("scroll", handleManualScrollFunc);
    handleManualScrollFunc = null;
  }


  // クローンを先に削除
  wrap.querySelectorAll(".is-clone").forEach((el) => el.remove());

  // 元スライド（クローン削除後に取得）
  const originals = Array.from(wrap.querySelectorAll(".blog-item-wrap")) as HTMLElement[];
  const realLength = originals.length;
  if (realLength === 0) return;

  const isMiddle = window.innerWidth > 836 && window.innerWidth <= 1060; // 3個表示
  const isTablet = window.innerWidth > 480 && window.innerWidth <= 836; // 2個表示
  const isMobile = window.innerWidth <= 480;

  // ===== dots =====
  let current = 0;

  const updateDots = () => {
    if (isTablet) return;

    dotWrap.querySelectorAll(".blog-dot").forEach((d, i) => {
      d.classList.toggle("active", i === current);
    });
  };

  if (!isTablet) {
    originals.forEach((_, i) => {
      const d = document.createElement("div");
      d.className = "blog-dot";
      if (i === 0) d.classList.add("active");

      d.addEventListener("click", () => {
        stopAuto();
        goToSlide(i, true);
        startAuto();
      });

      dotWrap.appendChild(d);
    });
  }

  const setupInfinite = () => {
    wrap.querySelectorAll(".spacer").forEach((el) => el.remove());
    wrap.querySelectorAll(".is-clone").forEach((el) => el.remove());

    // 最後の1枚を先頭にクローン
    const lastClone = originals[realLength - 1].cloneNode(true) as HTMLElement;
    lastClone.classList.add("is-clone");
    lastClone.setAttribute("data-clone-of", String(realLength - 1));
    const lastBlogItem = lastClone.querySelector(".blog-item");
    if (lastBlogItem) lastBlogItem.classList.remove("show");
    wrap.insertBefore(lastClone, wrap.firstChild);

    // 最初の1枚を末尾にクローン
    const firstClone = originals[0].cloneNode(true) as HTMLElement;
    firstClone.classList.add("is-clone");
    firstClone.setAttribute("data-clone-of", "0");
    const firstBlogItem = firstClone.querySelector(".blog-item");
    if (firstBlogItem) firstBlogItem.classList.remove("show");
    wrap.appendChild(firstClone);

    // 1060px：3枚目もクローン（末尾に追加）
    if (isMiddle) {
      const secondClone = originals[1].cloneNode(true) as HTMLElement;
      secondClone.classList.add("is-clone");
      secondClone.setAttribute("data-clone-of", "1");
      const secondBlogItem = secondClone.querySelector(".blog-item");
      if (secondBlogItem) secondBlogItem.classList.remove("show");
      wrap.appendChild(secondClone);

      const thirdClone = originals[2].cloneNode(true) as HTMLElement;
      thirdClone.classList.add("is-clone");
      thirdClone.setAttribute("data-clone-of", "2");
      const thirdBlogItem = thirdClone.querySelector(".blog-item");
      if (thirdBlogItem) thirdBlogItem.classList.remove("show");
      wrap.appendChild(thirdClone);
    }

    // タブレット：2枚目もクローン（末尾に追加）
    if (isTablet) {
      const secondClone = originals[1].cloneNode(true) as HTMLElement;
      secondClone.classList.add("is-clone");
      secondClone.setAttribute("data-clone-of", "1");
      const secondBlogItem = secondClone.querySelector(".blog-item");
      if (secondBlogItem) secondBlogItem.classList.remove("show");
      wrap.appendChild(secondClone);
    }

    // 初期位置を調整（前方クローンの分だけオフセット）
    wrap.scrollTo({
      left: originals[0].offsetLeft,
      behavior: "auto",
    });
  };

  const getSlidePosition = (index: number) => {
    return originals[index].offsetLeft;
  };

  const goToSlide = (index: number, smooth = true) => {
    if (isTransitioning) return;

    current = index;
    updateDots();

    wrap.scrollTo({
      left: getSlidePosition(index),
      behavior: smooth ? "smooth" : "auto",
    });
  };

  const updateVisibleSlidesForScroll = () => {
    if (!isTablet && !isMiddle) return;

    const allSlides = wrap.querySelectorAll<HTMLElement>(".blog-item-wrap");
    const scrollLeft = wrap.scrollLeft;
    const wrapWidth = wrap.offsetWidth;

    allSlides.forEach((slide) => {
      const slideLeft = slide.offsetLeft - scrollLeft;
      const slideRight = slideLeft + slide.offsetWidth;

      const slideWidth = slide.offsetWidth;
      const visibleWidth = Math.min(slideRight, wrapWidth) - Math.max(slideLeft, 0);
      const visibilityRatio = visibleWidth / slideWidth;

      const blogItem = slide.querySelector(".blog-item");

      if (blogItem) {
        if (visibilityRatio > 0.5) {
          blogItem.classList.add("show");
        } else {
          blogItem.classList.remove("show");
        }
      }
    });
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    isTransitioning = true;

    const allSlides = wrap.querySelectorAll<HTMLElement>(".blog-item-wrap");

    // 現在の物理的な位置を取得
    let currentPhysicalIndex = 0;
    const scrollLeft = wrap.scrollLeft;
    let minDistance = Infinity;

    allSlides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        currentPhysicalIndex = index;
      }
    });

    const nextPhysicalIndex = currentPhysicalIndex + 1;

    // ★★★ タブレット：スライド前に画面外の要素からshowを削除 ★★★
    if (isTablet || isMiddle) {
      // ← ここを修正
      const allItems = wrap.querySelectorAll(".blog-item");
      allItems.forEach((item) => item.classList.remove("show"));
    }

    // スムーズスクロール
    wrap.scrollTo({
      left: allSlides[nextPhysicalIndex].offsetLeft,
      behavior: "smooth",
    });

    // 少し遅らせてドットを更新（スクロール開始後）
    if (!isTablet) {
      setTimeout(() => {
        const nextRealIndex = (current + 1) % realLength;
        current = nextRealIndex;
        updateDots();
      }, 150);
    }

    const handleScrollEnd = () => {
      const currentSlide = allSlides[nextPhysicalIndex];
      const isClone = currentSlide?.classList.contains("is-clone");

      if (isTablet || isMiddle) {
        // ← ここを修正
        updateVisibleSlidesForScroll(); // ← 関数名変更
      }

      if (isClone) {
        const cloneOf = parseInt(currentSlide.getAttribute("data-clone-of") || "0");

        // 末尾のクローン（最初の1枚目のクローン）に到達
        if (cloneOf === 0) {
          setTimeout(() => {
            // タブレット：全てのshowを一旦削除
            if (isTablet || isMiddle) {
              // ← ここを修正
              const allItems = wrap.querySelectorAll(".blog-item");
              allItems.forEach((item) => item.classList.remove("show"));
            }

            const firstBlogItem = originals[0].querySelector(".blog-item") as HTMLElement;
            if (firstBlogItem) {
              firstBlogItem.style.transition = "none";
              firstBlogItem.classList.add("show");
            }

            // タブレット・1060px：2枚目にもshowを付ける
            if (isTablet || isMiddle) {
              // ← ここを修正
              const secondBlogItem = originals[1]?.querySelector(".blog-item") as HTMLElement;
              if (secondBlogItem) {
                secondBlogItem.style.transition = "none";
                secondBlogItem.classList.add("show");
              }
            }

            // 1060px：3枚目にもshowを付ける
            if (isMiddle) {
              const thirdBlogItem = originals[2]?.querySelector(".blog-item") as HTMLElement;
              if (thirdBlogItem) {
                thirdBlogItem.style.transition = "none";
                thirdBlogItem.classList.add("show");
              }
            }
            wrap.scrollTo({
              left: originals[0].offsetLeft,
              behavior: "auto",
            });

            const cloneItem = currentSlide.querySelector(".blog-item");
            if (cloneItem) {
              cloneItem.classList.remove("show");
            }

            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                if (firstBlogItem) {
                  firstBlogItem.style.transition = "";
                }
                if (isTablet || isMiddle) {
                  // ← ここを修正
                  const secondBlogItem = originals[1]?.querySelector(".blog-item") as HTMLElement;
                  if (secondBlogItem) {
                    secondBlogItem.style.transition = "";
                  }
                }
                if (isMiddle) {
                  const thirdBlogItem = originals[2]?.querySelector(".blog-item") as HTMLElement;
                  if (thirdBlogItem) {
                    thirdBlogItem.style.transition = "";
                  }
                }
                isTransitioning = false;
              });
            });
          }, 50);
        }
      } else {
        // 本物のスライドの場合
        isTransitioning = false;
      }
    };

    if ("onscrollend" in window) {
      wrap.addEventListener("scrollend", handleScrollEnd, { once: true });
    } else {
      setTimeout(handleScrollEnd, 500);
    }
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

  // ===== 手動フリック時の処理 =====
  let scrollTimeout: number | undefined;

  const handleManualScroll = () => {
    stopAuto();

    const allSlides = wrap.querySelectorAll<HTMLElement>(".blog-item-wrap");
    const scrollLeft = wrap.scrollLeft;

    // ★★★ タブレット：スクロール中に常に表示を更新（即座にshowを削除） ★★★
    if (isTablet || isMiddle) {
      // requestAnimationFrameで確実に実行
      requestAnimationFrame(() => {
        updateVisibleSlidesForScroll(); // ← 関数名変更
      });
    }

    // スクロール中にリアルタイムでドットを更新（クローン対応）
    if (!isTablet) {
      let nearestRealIndex = 0;
      let minDistance = Infinity;

      allSlides.forEach((slide) => {
        const distance = Math.abs(slide.offsetLeft - scrollLeft);
        if (distance < minDistance) {
          minDistance = distance;
          if (slide.classList.contains("is-clone")) {
            const cloneOf = parseInt(slide.getAttribute("data-clone-of") || "0");
            nearestRealIndex = cloneOf;
          } else {
            const realIndex = originals.indexOf(slide);
            if (realIndex !== -1) {
              nearestRealIndex = realIndex;
            }
          }
        }
      });

      if (current !== nearestRealIndex) {
        current = nearestRealIndex;
        updateDots();
      }
    }

    // ★★★ スマホ：全てのスライド（クローン含む）にshowを付ける処理 ★★★
    if (!isTablet) {
      allSlides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const wrapRect = wrap.getBoundingClientRect();

        if (Math.abs(rect.left - wrapRect.left) < 100) {
          const blogItem = slide.querySelector(".blog-item");
          if (blogItem) blogItem.classList.add("show");
        }
      });
    }

    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = window.setTimeout(() => {
      // 現在のスクロール位置を判定
      const currentScrollLeft = wrap.scrollLeft;
      let minDistance = Infinity;
      let nearestIndex = 0;
      let isCloneFlag = false;
      let cloneOf = -1;

      allSlides.forEach((slide, index) => {
        const distance = Math.abs(slide.offsetLeft - currentScrollLeft);
        if (distance < minDistance) {
          minDistance = distance;
          nearestIndex = index;
          isCloneFlag = slide.classList.contains("is-clone");
          if (isCloneFlag) {
            cloneOf = parseInt(slide.getAttribute("data-clone-of") || "-1");
          }
        }
      });

      // クローンに停止した場合の処理
      if (isCloneFlag && cloneOf >= 0) {
        // 先頭のクローン（最後の1枚=4枚目のクローン）の場合
        if (cloneOf === realLength - 1) {
          if (!isTablet) {
            current = realLength - 1;
            updateDots();
          }

          // ★★★ ジャンプ前に本物の要素にshowを付けておく ★★★
          const lastBlogItem = originals[realLength - 1].querySelector(".blog-item") as HTMLElement;
          if (lastBlogItem) {
            lastBlogItem.style.transition = "none";
            lastBlogItem.classList.add("show");
          }

          // ★★★ 1060px：3枚目にもshowを付けておく ★★★
          let thirdLastItem: HTMLElement | null = null;
          if (isMiddle && originals[realLength - 3]) {
            thirdLastItem = originals[realLength - 3].querySelector(".blog-item") as HTMLElement;
            if (thirdLastItem) {
              thirdLastItem.style.transition = "none";
              thirdLastItem.classList.add("show");
            }
          }

          // ★★★ ジャンプ先に表示されるクローン（1枚目、2枚目）にもshowを付けておく ★★★
          let firstCloneItem: HTMLElement | null = null;
          let secondCloneItem: HTMLElement | null = null;

          if (isTablet || isMiddle) {
            const firstClone = wrap.querySelector('.blog-item-wrap.is-clone[data-clone-of="0"]') as HTMLElement;
            if (firstClone) {
              firstCloneItem = firstClone.querySelector(".blog-item") as HTMLElement;
              if (firstCloneItem) {
                firstCloneItem.style.transition = "none";
                firstCloneItem.classList.add("show");
              }
            }
          }
          // ★★★ ここに追加 ★★★
          if (isMiddle) {
            const secondClone = wrap.querySelector('.blog-item-wrap.is-clone[data-clone-of="1"]') as HTMLElement;
            if (secondClone) {
              secondCloneItem = secondClone.querySelector(".blog-item") as HTMLElement;
              if (secondCloneItem) {
                secondCloneItem.style.transition = "none";
                secondCloneItem.classList.add("show");
              }
            }
          }

          setTimeout(() => {
            wrap.scrollTo({
              left: originals[realLength - 1].offsetLeft,
              behavior: "auto",
            });

            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                if (lastBlogItem) lastBlogItem.style.transition = "";
                if (secondLastItem) secondLastItem.style.transition = "";
                if (thirdLastItem) thirdLastItem.style.transition = "";
                if (firstCloneItem) firstCloneItem.style.transition = "";
                if (secondCloneItem) secondCloneItem.style.transition = ""; // ← この行を追加

                if (isTablet || isMiddle) {
                  // ← ここを修正
                  updateVisibleSlidesForScroll(); // ← 関数名変更
                }
              });
            });
          }, 50);
        }
        // 末尾のクローン（最初の1枚）の場合
        else if (cloneOf === 0) {
          if (!isTablet) {
            current = 0;
            updateDots();
          }

          // ★★★ ジャンプ前に本物の要素にshowを付けておく ★★★
          const firstBlogItem = originals[0].querySelector(".blog-item") as HTMLElement;
          if (firstBlogItem) {
            firstBlogItem.style.transition = "none";
            firstBlogItem.classList.add("show");
          }

          // タブレット：2枚目にもshow
          let secondBlogItem: HTMLElement | null = null;
          if (isTablet) {
            secondBlogItem = originals[1]?.querySelector(".blog-item") as HTMLElement;
            if (secondBlogItem) {
              secondBlogItem.style.transition = "none";
              secondBlogItem.classList.add("show");
            }
          }

          // ★★★ 1060px：3枚目にもshow ★★★
          let thirdBlogItem: HTMLElement | null = null;
          if (isMiddle) {
            thirdBlogItem = originals[2]?.querySelector(".blog-item") as HTMLElement;
            if (thirdBlogItem) {
              thirdBlogItem.style.transition = "none";
              thirdBlogItem.classList.add("show");
            }
          }

          setTimeout(() => {
            wrap.scrollTo({
              left: originals[0].offsetLeft,
              behavior: "auto",
            });

            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                if (firstBlogItem) firstBlogItem.style.transition = "";
                if (secondBlogItem) secondBlogItem.style.transition = "";
                if (thirdBlogItem) thirdBlogItem.style.transition = "";

                if (isTablet || isMiddle) {
                  // ← ここを修正
                  updateVisibleSlidesForScroll(); // ← 関数名変更
                }
              });
            });
          }, 50);
        }
      } else if (isTablet || isMiddle) {
        // ← ここを修正
        requestAnimationFrame(() => {
          updateVisibleSlidesForScroll(); // ← 関数名変更
        });
      } else if (!isTablet && !isMiddle) {
        // ← ここを修正
        // 本物のスライドの場合（スマホのみドット更新）
        let newCurrent = 0;
        minDistance = Infinity;

        originals.forEach((slide, index) => {
          const distance = Math.abs(slide.offsetLeft - currentScrollLeft);
          if (distance < minDistance) {
            minDistance = distance;
            newCurrent = index;
          }
        });

        current = newCurrent;
        updateDots();
      }

// 1.5秒後に自動スクロールを再開
      setTimeout(() => {
        // PC幅になっていたら自動スクロールを開始しない
        if (window.innerWidth > 1060) return;
        startAuto();
      }, 1500);
    }, 150);
  };
    


// ===== PC：auto slide 無効 =====
  if (window.innerWidth > 1060) {
    // 自動スクロールを確実に停止
    stopAuto();
    
    // トランジション中フラグをリセット
    isTransitioning = false;
    
    wrap.querySelectorAll(".is-clone").forEach((el) => el.remove());
    wrap.scrollTo({ left: 0, behavior: "auto" });
    updateDots();
    
    // PC時は全てのブログアイテムに強制的にshowを付ける
    originals.forEach((slide) => {
      const item = slide.querySelector(".blog-item");
      if (item) {
        item.style.transition = "none";
        item.classList.add("show");
      }
    });
    
    // トランジションを戻す
    requestAnimationFrame(() => {
      originals.forEach((slide) => {
        const item = slide.querySelector(".blog-item");
        if (item) item.style.transition = "";
      });
    });
    
    // PCではスクロールリスナーを登録しない
    return;
  }

  // タブレット・モバイルのみスクロールリスナーを登録
  wrap.addEventListener("scroll", handleManualScroll, { passive: true });
  handleManualScrollFunc = handleManualScroll;

  setupInfinite();
  updateDots();

  // 初期表示で必要な枚数だけshowを付ける
  if (isMiddle) {
    // 1060px：1,2,3枚目にshowを付ける
    originals.forEach((slide) => {
      const item = slide.querySelector(".blog-item");
      if (item) item.classList.remove("show");
    });
    wrap.querySelectorAll(".is-clone .blog-item").forEach((item) => {
      item.classList.remove("show");
    });

    for (let i = 0; i < 3 && i < originals.length; i++) {
      const item = originals[i]?.querySelector(".blog-item");
      if (item) item.classList.add("show");
    }
  } else if (isTablet) {
    // タブレット：1,2枚目にshowを付ける
    originals.forEach((slide) => {
      const item = slide.querySelector(".blog-item");
      if (item) item.classList.remove("show");
    });
    wrap.querySelectorAll(".is-clone .blog-item").forEach((item) => {
      item.classList.remove("show");
    });

    const firstItem = originals[0]?.querySelector(".blog-item");
    const secondItem = originals[1]?.querySelector(".blog-item");
    if (firstItem) firstItem.classList.add("show");
    if (secondItem) secondItem.classList.add("show");
  }

  startAuto();
};

// ==========================================
// 3行超え判定
// ==========================================
const applyEllipsis = () => {
  const texts = document.querySelectorAll<HTMLParagraphElement>("#blog .blog-item p");

  texts.forEach((p) => {
    p.classList.remove("is-clamped");

    const style = window.getComputedStyle(p);
    const lineHeight = parseFloat(style.lineHeight);
    const lines = Math.round(p.scrollHeight / lineHeight);

    if (lines > 3) {
      p.classList.add("is-clamped");
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

  // ⭐️ 順序を変更：先にブログを初期化してからObserverを作成
  initAutoBlogScroll();

  await nextTick();
  applyEllipsis();

  updateBottomHeaderHeight();
  
  // ⭐️ Observerは最後に作成（ブログアイテムのshowが付いた後）
  createObservers();
};

onMounted(async () => {
  windowWidth.value = window.innerWidth;

  await nextTick();
  await nextTick();
  await new Promise((r) => setTimeout(r, 100));

  initAutoBlogScroll();
  applyEllipsis();

  updateBottomHeaderHeight();
  createObservers();

  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("scroll", handleScroll);

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

  // ⭐️ ブログのスクロールリスナーも削除
  if (handleManualScrollFunc) {
    const wrap = document.querySelector("#blog .blog-wrap") as HTMLElement | null;
    if (wrap) {
      wrap.removeEventListener("scroll", handleManualScrollFunc);
    }
    handleManualScrollFunc = null;
  }

  document.body.style.paddingBottom = "";
});

// ==========================================
// データ配列
// ==========================================
const appealItems = [
  {
    img: "/images/img-appeal_1.jpg",
    title: "求職者へのアプローチ無制限",
    text: "求職者へは、回数・上限なく提案が可能。オファー枠やメッセージ上限に縛られず、候補者への接触スピードと量の両面を高め、機会損失を防ぎながらアクティブな獲得が行えます。",
  },
  {
    img: "/images/img-appeal_2.jpg",
    title: "採用コストの効率化",
    text: "求職者のスキル・経験・実績などの情報を確認したうえで、提示したい年収を示すことで、求職者の最終的に大きな判断材料の「年収」から判断しやすくなり、ミスマッチを最小化します。",
  },
  {
    img: "/images/img-appeal_3.jpg",
    title: "求職者と直接コンタクト",
    text: "条件を満たすと求職者とダイレクトにやり取りが可能になります。仲介を挟まないためレスポンスが早く、提案の温度感がそのまま届き、意思決定の速度と成約率が向上します。",
  },
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
    title:
      "提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ提供サービス変更及び利用規約改定のお知らせ",
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
    question: "サービスの利用に料金はかかりますか？",
    answer: "基本プランは無料でご利用いただけます。有料オプションをご希望の場合のみ追加費用が発生します。",
  },
  {
    question: "パスワードを忘れた場合はどうすればいいですか？",
    answer: "ログイン画面の「パスワードをお忘れの方」より再設定手続きを行ってください。",
  },
  {
    question: "登録後にメールアドレスの変更は可能ですか？",
    answer: "マイページ内のアカウント設定からメールアドレスの変更が可能です。",
  },
  {
    question: "問い合わせの返信にはどれくらい時間がかかりますか？",
    answer: "通常1〜2営業日以内にご返信しております。混雑時はお時間をいただく場合があります。",
  },
];
</script>

<style lang="scss" scoped>
@use "~/assets/css/mixin.scss";

#hero {
  width: 100%;
  height: 100vh;
  background-image: url(/images/img-hero.jpg);
  background-position: center;
  background-size: cover;
  align-content: center;
  position: relative;

  @include mixin.screen(mixin.$small, mixin.$large) {
    max-height: 850px;
  }

  @include mixin.max-screen(mixin.$small) {
    background-position: 66% 70%;
    background-size: 320%;

    &::before {
      content: "";
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
      text-shadow: 0px 3px 6px #0000005c;

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
      padding: 13px 40px 13px;
      margin-top: 20px;
      display: inline-block;

      @include mixin.max-screen(mixin.$small) {
        padding: 10px 30px 11px;
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
      text-shadow: 0px 3px 6px #0000005c;
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
  .about-top {
    @include mixin.screen(mixin.$small, mixin.$large) {
      padding-top: 100px !important;
    }
  }

  .section-wrap {
    max-width: 1020px;
    width: 90%;
    display: flex;
    gap: 0 110px;
    padding: 80px 0 100px;
    margin: auto;
    align-items: center;

    @include mixin.screen(mixin.$large, 1060px) {
      gap: 0 55px; // ← gapを55pxに変更
    }

    @include mixin.screen(mixin.$small, mixin.$large) {
      flex-direction: column;
      padding: 50px 0;
      gap: 55px 0;
    }

    @include mixin.max-screen(mixin.$small) {
      flex-direction: column;
      padding: 50px 0;
      gap: 55px 0;
    }

    .text-wrap {
      max-width: 440px;
      width: 100%;

      opacity: 0;
      transform: scale(0.95) translateZ(0);
      transition: opacity 0.6s ease, transform 0.6s ease;

      @include mixin.screen(mixin.$small, mixin.$large) {
        max-width: 600px; // ← タブレット用の幅を追加
      }

      @include mixin.max-screen(mixin.$small) {
        transition: opacity 0.4s ease, transform 0.4s ease;
      }

      &.show {
        opacity: 1;
        transform: scale(1);
        // will-change: opacity, transform;
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
          margin-right: 10px;
          @include mixin.max-screen(mixin.$small) {
            margin-right: 5px;
          }

          img {
            width: 160px;
            height: 40px;
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
      transform: scale(0.95) translateZ(0);
      transition: opacity 0.6s ease, transform 0.6s ease;

      @include mixin.screen(mixin.$large, 1060px) {
        width: 380px; // ← 画像サイズ変更
        height: 355px; // ← 画像サイズ変更
      }

      @include mixin.screen(mixin.$small, mixin.$large) {
        width: 600px;
        height: 560px; // ← タブレット用の幅を追加
      }

      @include mixin.max-screen(mixin.$small) {
        transition: opacity 0.4s ease, transform 0.4s ease;
      }

      &.show {
        opacity: 1;
        transform: scale(1);
        // will-change: opacity, transform;
      }
    }
  }
}

#point {
  position: relative;
  height: 400vh;

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

    &.slide1 > .text-wrap {
      opacity: 0;
      transition: opacity 0.3s ease;
    }

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

      @include mixin.screen(mixin.$large, 1060px) {
        right: 50px; // ← タブレット用追加
      }

      @include mixin.screen(mixin.$small, mixin.$large) {
        top: 60%;
        right: 50px; // ← タブレット用追加
      }

      @include mixin.max-screen(mixin.$small) {
        top: 60%;
        right: 5%;
        transform: unset;
        width: 90%;
      }

      h5 {
        font-size: 20px;
        line-height: 1.7;
        letter-spacing: 0.54px;
        text-shadow: 0px 3px 7px #00000064;
        margin-bottom: 25px;
        white-space: nowrap;

        @include mixin.max-screen(mixin.$small) {
          font-size: 18px;
        }

        span {
          display: inline;

          @include mixin.max-screen(mixin.$small) {
            display: block;
          }
        }
      }

      p {
        font-size: 16px;
        letter-spacing: 0.42px;
        line-height: 1.8;
        text-shadow: 0px 3px 7px #00000040;

        @include mixin.max-screen(mixin.$small) {
          font-size: 14px;
        }
      }
    }

    &.slide1 {
      z-index: 3;
      display: block;
    }
    &.slide2 {
      z-index: 2;
      display: none;
    }
    &.slide3 {
      z-index: 1;
      display: none;
    }

    &.is-front {
      z-index: 10;
    }

    &.slide2 .text-wrap {
      right: unset;
      left: 150px;
      top: 75%;

      @include mixin.screen(mixin.$large, 1060px) {
        top: 75%;
        left: 50px; // ← タブレット用追加
      }

      @include mixin.screen(mixin.$small, mixin.$large) {
        top: 70%;
        left: 50px; // ← タブレット用追加
      }

      @include mixin.max-screen(mixin.$small) {
        left: unset;
        top:60%;
        right: 5%;
      }
    }

    &.slide1 .mask .inner {
      background-position: 40% center;

      @include mixin.screen(mixin.$small, mixin.$large) {
        background-position: 35% center; // ← 一番左が見えるように
      }

      @include mixin.max-screen(mixin.$small) {
        background-position: 30% 0;
      }
    }

    &.slide2 .mask .inner {
      background-position: 75% 0;

      @include mixin.screen(mixin.$large, 1060px) {
        background-position: 90% 0;
      }

      @include mixin.screen(mixin.$small, mixin.$large) {
        background-position: 90% 0;
      }
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
      font-size: 25px;
      letter-spacing: 0.6px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 60px;

      position: relative;
      opacity: 0;
      transform: scale(0.95) translateZ(0);
      transition: opacity 0.6s ease, transform 0.6s ease;
      @include mixin.max-screen(mixin.$small) {
        font-size: 25px;
        transition: opacity 0.4s ease, transform 0.4s ease;
      }

      @include mixin.max-screen(mixin.$small) {
        font-size: 20px;
        margin-bottom: 30px;
      }

      &.show {
        opacity: 1;
        transform: scale(1);
        // will-change: opacity, transform;
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

      @include mixin.screen(mixin.$small, mixin.$large) {
        grid-template-columns: repeat(1, 1fr); // ← 縦並び
        gap: 30px 0;
      }

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
        transform: scale(0.95) translateZ(0);
        transition: opacity 0.6s ease, transform 0.6s ease;

        @include mixin.screen(mixin.$small, mixin.$large) {
          max-width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between; // ← 両端配置
          padding: 30px;
        }

        @include mixin.max-screen(mixin.$small) {
          transition: opacity 0.4s ease, transform 0.4s ease;
          max-width: unset;
        }

        &.show {
          opacity: 1;
          transform: scale(1);
        }

        img {
          width: 200px;
          height: auto;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          object-position: center;
          border-radius: 50%;
          margin: auto auto 15px;

          @include mixin.screen(mixin.$small, mixin.$large) {
            margin-right: 30px;
            margin-bottom: 0px;
          }
        }

        .text-content {
          @include mixin.screen(mixin.$small, mixin.$large) {
            display: flex;
            flex-direction: column;
          }
        }

        .ttl {
          font-size: 16px;
          letter-spacing: 0.48px;
          line-height: 1.5;
          text-align: center;
          margin-bottom: 20px;

          @include mixin.screen(mixin.$small, mixin.$large) {
            text-align: left;
            margin-bottom: 15px;
          }
        }

        p {
          @include mixin.screen(mixin.$small, mixin.$large) {
            text-align: left;
            margin: 0;
          }
        }
      }
    }
  }
}

#blog {
  background-color: #efefef;
  padding: 100px 0;

  @include mixin.screen(mixin.$large, 1060px) {
    padding: 100px 5%; // 左右5%ずつ = 全体90%
  }

  @include mixin.screen(mixin.$small, mixin.$large) {
    padding: 100px 5%; // 左右5%ずつ = 全体90%
  }

  @include mixin.max-screen(mixin.$small) {
    padding: 50px 5%;
    margin: auto;
  }

  h5 {
    font-size: 25px;
    letter-spacing: 0.6px;
    text-align: center;
    margin-bottom: 60px;

    opacity: 0;
    transform: scale(0.95) translateZ(0);
    transition: opacity 0.6s ease, transform 0.6s ease;

    @include mixin.max-screen(mixin.$small) {
      transition: opacity 0.4s ease, transform 0.4s ease;
    }

    @include mixin.max-screen(mixin.$small) {
      font-size: 20px;
      margin-bottom: 20px;
    }

    &.show {
      opacity: 1;
      transform: scale(1);
      //   will-change: opacity, transform;
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

      @include mixin.screen(mixin.$large, 1060px) {
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        gap: 0;
        padding: 10px 0;

        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
      }

      @include mixin.screen(mixin.$small, mixin.$large) {
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        gap: 0;
        padding: 10px 0;

        // スクロールバーを隠す
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
      }

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
        @include mixin.screen(mixin.$large, 1060px) {
          flex: 0 0 calc(33.333% - 20px);
          scroll-snap-align: start;
          box-sizing: border-box;
          margin-right: 30px;

          &:last-child {
            margin-right: 0;
          }
        }

        @include mixin.screen(mixin.$small, mixin.$large) {
          flex: 0 0 calc(50% - 15px); // 2個表示、gap考慮
          scroll-snap-align: start;
          box-sizing: border-box;
          margin-right: 30px;

          &:last-child {
            margin-right: 0;
          }
        }
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
          transform: scale(0.95) translateZ(0);
          transition: opacity 0.6s ease, transform 0.6s ease;

          @include mixin.max-screen(mixin.$small) {
            transition: opacity 0.4s ease, transform 0.4s ease;
          }

          &.show {
            opacity: 1;
            transform: scale(1);
            // will-change: opacity, transform;
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

            @include mixin.screen(mixin.$small, 1060px) {
              justify-content: flex-start;
              gap: 0 15px;
            }

            @include mixin.max-screen(mixin.$small) {
              padding-top: 25px;
            }

            .date {
              font-size: 13px;
              line-height: 1;
            @include mixin.max-screen(mixin.$small) {
              margin-top: 2px;
            }
              
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

            // &::after {
            //   content: '';
            // }

            // &.is-clamped::after {
            //   content: '…';
            //   position: absolute;
            //   right: 17px;
            //   bottom: 11px;
            //   background: #fff;

            //   @include mixin.max-screen(mixin.$small) {
            //     right: 35px;
            //     bottom: 21px;
            //   }
            // }
          }

          .info-wrap,
          p {
            max-width: 200px;
            width: 100%;
            margin: auto;
            @include mixin.screen(mixin.$large, 1060px) {
              max-width: 90%; // ← タブレット用に追加
            }

            @include mixin.screen(mixin.$small, mixin.$large) {
              max-width: 90%; // ← タブレット用に追加
            }

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
      transform: scale(0.95) translateZ(0);
      transition: opacity 0.6s ease, transform 0.6s ease;

      @include mixin.max-screen(mixin.$small) {
        transition: opacity 0.4s ease, transform 0.4s ease;
      }

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

    @include mixin.screen(mixin.$small, 1060px) {
      width: 90%; // ← タブレット用に追加
    }

    @include mixin.max-screen(mixin.$small) {
      width: 90%;
      padding: 50px 0 100px;
    }

    h5 {
      font-size: 25px;
      text-align: center;

      opacity: 0;
      transform: scale(0.95) translateZ(0);
      transition: opacity 0.6s ease, transform 0.6s ease;

      @include mixin.max-screen(mixin.$small) {
        font-size: 20px;
        transition: opacity 0.4s ease, transform 0.4s ease;
      }

      &.show {
        opacity: 1;
        transform: scale(1);
        // will-change: opacity, transform;
      }
    }

    .faq-wrap {
      margin-top: 60px;

      @include mixin.max-screen(mixin.$small) {
        margin-top: 30px;
      }

      opacity: 0;
      transform: scale(0.95) translateZ(0);
      transition: opacity 0.6s ease, transform 0.6s ease;

      @include mixin.max-screen(mixin.$small) {
        transition: opacity 0.4s ease, transform 0.4s ease;
      }

      &.show {
        opacity: 1;
        transform: scale(1);
        // will-change: opacity, transform;
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
              content: "";
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
          background-color: #1d1d1d;
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
