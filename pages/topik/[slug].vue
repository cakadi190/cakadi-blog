<template>
  <div id="page-tags" class="pt-5 mt-5">
    <meta-seo :title="pageTitle" :description="pageDescription" :url="buildUrl(fullPath)" />

    <div class="container mb-4 mt-5">
      <h1 class="text-merriweather">{{ pageTitle }}</h1>
      <p class="text-muted">{{ pageDescription }}</p>
    </div>
  
    <div class="container">
      <div v-if="tagArticles" class="row gy-4">
        <div class="col-md-4" v-for="article in tagArticles" :key="article._id">
          <post-content-big-header color="#fff" :post="article" />
        </div>
      </div>
      <div v-else-if="tagFetchError">
        Tagar tidak ditemukan.
      </div>
      <div v-else>
        Memuat artikel...
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useAsyncData, computed, ref } from '#imports';
import { buildUrl, queryContent } from '#imports';

const route = useRoute();
const { slug } = route.params;
const { fullPath } = route;

// Fetch Tag Meta
const { data: tagMetaData, error: tagFetchError } = await useAsyncData(
  'get-tag-meta',
  () => $fetch(`/api/tags/${slug}`),
  { server: true }
);

// Function to fetch articles
const getArticlesByTag = async (tag: string) => {
  const { data } = await useAsyncData(
    `tag-articles-${tag}`,
    () => (queryContent('articles') as any) // Sesuaikan dengan direktori konten Anda
      .where({ tags: { $contains: tag } })
      .find()
  );

  return data.value;
}

// Fetch articles based on tag
const { data: tagArticles } = await useAsyncData<any>(
  'tag-articles',
  async () => {
    if (tagMetaData.value?.data.name) {
      return await getArticlesByTag(tagMetaData.value.data.name);
    }
    return null;
  }
);

// For Seo Meta
const pageTitle = computed(() =>
  tagFetchError.value ? 'Halaman Tidak Ditemukan!' : `Tagar: ${tagMetaData.value?.data.name}`
);

const pageDescription = computed(() =>
  tagFetchError.value
    ? 'Halaman tidak dapat ditemukan untuk saat ini.'
    : `Menampilkan artikel dengan tagar: ${tagMetaData.value?.data.name}`
);
</script>
