<template>
  <div class="widget" id="recent-articles">
    <h3 class="title"><span>Artikel Terbaru</span></h3>

    <div class="article-list">
      <ContentList path="/articles">
        <template #default="{ list }">
          <post-content-sidebar
            v-for="data in filteredAndSortedArticles(list)"
            :key="data._id"
            :post="data"
          />
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentPath = computed(() => route.fullPath);

const filteredAndSortedArticles = computed(() => (list: any) => {
  return list
    .filter(
      (item: any) =>
        item._path.substring("/articles".length) !== currentPath.value &&
        !item.draft
    )
    .sort(
      (a: any, b: any) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    )
    .filter((item: any) => `/artikel${item._path}` !== route.path)
    .slice(0, 5);
});
</script>

<style>
.article-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>