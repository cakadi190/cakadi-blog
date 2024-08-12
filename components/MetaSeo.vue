<!-- components/SEO.vue -->
<template>
  <Head>
    <Title>{{ generatedTitle }}</Title>
    <Meta name="description" :content="description" />
    <Meta name="keywords" :content="keywords" />
    <Meta name="author" content="Cak Adi" />
    <Meta name="robots" :content="robots" />
    <Meta property="og:url" :content="generatedUrl" />
    <Meta property="og:title" :content="generatedTitle" />
    <Meta property="og:description" :content="description" />
    <Meta property="og:image" :content="generatedImage" />
    <Meta property="og:type" :content="type" />
    <Meta property="og:locale" :content="locale" />
    <Link rel="canonical" :href="generatedUrl" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" :content="generatedTitle" />
    <Meta name="twitter:description" :content="description" />
    <Meta name="twitter:image" :content="generatedImage" />
  </Head>
</template>

<script setup lang="ts">
import { buildTitle, buildUrl } from '@/utils/seo';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  locale?: string;
  robots?: string;
  type?: 'website' | 'article' | string;
}

const props = withDefaults(defineProps<SEOProps>(), {
  keywords: "cakadi190, web portfolio, fullstack, webdev, webdesign",
  url: "/",
  image: "/images/meta-image.png",
  locale: 'id',
  robots: 'index,follow',
  type: 'website'
});

const generatedUrl = computed(() => buildUrl(props.url));
const generatedImage = computed(() => buildUrl(props.image));
const generatedTitle = computed(() => buildTitle(props.title));

useHead({
  htmlAttrs: {
    lang: 'id'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
})
</script>