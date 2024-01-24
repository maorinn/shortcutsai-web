---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'ShortcutsAI'
  text: '一个由人工智能驱动的快捷指令集合'
  # tagline: My great project taglineA
  actions:
    - theme: brand
      text: 开始使用
      link: /markdown-examples
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples
  image:
    src: /logo-large-2.svg
    alt: ShortcutsAI

features:
  - icon: 📝
    title: 快捷记账
    details: 手机背面敲击两下，AI自动识别记账内容，全自动智能记账。
  - icon: 📅
    title: 会议记录
    details: 会议开始时，运行快捷指令，AI自动识别会议内容，全自动智能记录。
  - icon: 📦
    title: 智能收藏
    details: 通过快捷指令，AI自动识别收藏内容，无痛收藏软件、网站、好物等。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
