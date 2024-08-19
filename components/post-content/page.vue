<template>
  <article id="page-section">
    <h1>{{ data.title }}</h1>
  
    <nav class="d-none d-md-none d-lg-inline-flex" aria-label="Breadcrumb Navigation">
      <ul class="breadcrumb mb-0">
        <li class="breadcrumb-item" v-for="item in breadcrumb" :key="item.label">
          <nuxt-link v-if="item.url" :to="item.url">{{ item.label }}</nuxt-link>
          <span v-else>{{ item.label }}</span>
        </li>
      </ul>
    </nav>
  
    <ContentRendererMarkdown :value="data" />
  </article>
</template>

<script lang="ts">
export default defineComponent({
  name: "PostContent",
});
</script>

<script lang="ts" setup>
const props = defineProps<{
  data: any;
}>();

const route = useRoute();
const requesturl = useRequestURL();

const breadcrumb = ref([
  { label: 'Beranda', url: '/' },
  { label: props.data.title },
]);
</script>

<style>

</style>