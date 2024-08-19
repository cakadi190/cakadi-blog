<template>
  <div id="page-category" class="pt-5 mt-5">
    <meta-seo :title="computedTitle" :description="computedDesc" :url="buildUrl(fullPath)" />
  
    <div class="container mb-4 mt-5">
      <h1 class="text-merriweather">{{ computedTitle }}</h1>
      <p class="text-muted">{{ computedDesc }}</p>
    </div>
  
    <div class="container">
      <div v-if="articles" class="row gy-4">
        <!-- Tampilkan artikel di sini -->
        <div class="col-md-4" v-for="article in articles" :key="article._id">
          <post-content-big-header color="#fff" :post="article" />
        </div>
      </div>
      <div v-else-if="errorCategory">
        Kategori tidak ditemukan.
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

// Fetch Category Meta
const { data: categoryData, error: errorCategory } = await useAsyncData(
  'get-category-meta',
  () => $fetch(`/api/categories/${slug}`),
  { server: true }
);

// Function to fetch articles
const fetchArticles = async (category: string) => {
  const { data } = await useAsyncData(
    `category-articles-${category}`,
    () => (queryContent('articles') as any) // Sesuaikan dengan direktori konten Anda
      .where({ category: { $contains: category } })
      .find()
  );

  return data.value;
}

// Fetch articles based on category
const { data: articles } = await useAsyncData<any>(
  'category-articles',
  async () => {
    if (categoryData.value?.data.name) {
      return await fetchArticles(categoryData.value.data.name);
    }
    return null;
  }
);

// For Seo Meta
const computedTitle = computed(() =>
  errorCategory.value ? 'Halaman Tidak Ditemukan!' : `Kategori: ${categoryData.value?.data.name}`
);

const computedDesc = computed(() =>
  errorCategory.value
    ? 'Halaman tidak dapat ditemukan untuk saat ini.'
    : `Menampilkan artikel dengan kategori: ${categoryData.value?.data.name}`
);
</script>