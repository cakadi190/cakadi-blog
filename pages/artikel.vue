<template>
  <div class="pt-5 mt-5">
    <meta-seo title="Semua Artikel" description="Menampilkan semua artikel yang ada pada situs ini." :url="buildUrl('/artikel')" />
    
    <div class="container pt-5 pb-4">
      <h1 class="text-merriweather">Semua Artikel</h1>
      <p class="text-muted">Menampilkan semua artikel yang ada pada situs ini.</p>
    </div>
    <div class="container">
      <div class="row gy-4">
        <ContentList path="/articles" :query="{ where: { draft: { $eq: false } } }">
          <template #default="{ list }">
            <div class="col-md-4" v-for="data in sortByDate(list)" :key="data._id">
              <post-content-big-header color="#fff" :post="data" />
            </div>
          </template>
          <template #not-found>
            <div class="col-md-6 mx-auto text-center">
              <p>No articles found.</p>
            </div>
          </template>
        </ContentList>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { buildUrl } from '#imports';

function sortByDate(list: any[]) {
  return list.slice().sort((a, b) => {
    const dateA = new Date(a.updated_at || a.created_at).getTime();
    const dateB = new Date(b.updated_at || b.created_at).getTime();
    return dateB - dateA;
  });
}
</script>
