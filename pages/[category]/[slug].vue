<template>
  <div id="content-wrapper">
    <ContentRenderer v-if="data" :value="data">
      <meta-seo :title="data.title" :description="data.description" :image="buildUrl(data.image)"
        :author="data.author.name" :url="metaUrl" type="article" />
  
      <post-content-single :data="data" :url="metaUrl" />
  
      <div id="preview-draft" v-if="data.draft">Draf</div>
    </ContentRenderer>
  </div>
</template>

<script lang="ts" setup>
import { buildUrl } from "#imports";

const { params } = useRoute();
const { fullPath } = useRoute();

const metaUrl = computed(() => buildUrl(fullPath));

const { data } = await useAsyncData<any>("post-single", () => {
  return (
    queryContent(
      "articles",
      params.category as string,
      params.slug as string
    ) as any
  ).findOne();
});

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}
</script>

<style lang="scss" scoped>
#preview-draft {
  position: fixed;
  width: 10rem;
  z-index: 1050;
  top: .75rem;
  right: -3rem;
  background: var(--bs-primary);
  color: var(--bs-white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem;
  transform: rotate(45deg)
}
</style>

<style lang="scss">
.modal-backdrop {
  backdrop-filter: blur(.5rem);
  background: rgba(var(--bs-dark-rgb), .5);
  transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1);

  &.show {
    opacity: 1;
  }
}

#shareModal.modal.fade .modal-dialog,
#shareModal.modal.fade.show .modal-dialog {
  transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1);
}

#shareModal.modal.fade .modal-dialog {
  transform: scale(0.5);
}

#shareModal.modal.fade.show .modal-dialog {
  transform: scale(1);
}
</style>