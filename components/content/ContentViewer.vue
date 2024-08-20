<template>
  <nuxt-link :to="target" class="card card-body" v-if="isLoaded">
    <div class="card-img">
      <img :src="data?.image" alt="image" />
    </div>
    <div class="card-content">
      <h3>{{ data.title }}</h3>
  
      <div class="card-meta">
        <div>
          <i class="fas fa-calendar"></i>
          <time class="d-block mb-2 mb-lg-0 date" :datetime="$dayjs(data.created_at).utc().toString()">{{
            $dayjs(data.created_at).format("LL")
            }}</time>
        </div>
        <div>
          <i class="fas fa-user"></i>
          <span class="author">
            <span>{{ data.author.name }}</span>
            <span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Pengguna yang terverifikasi"
              v-if="data.author.email === 'cakadi190@gmail.com'" class="text-primary"
              style="font-size: 1rem; vertical-align: middle">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M10.95 12.7L9.5 11.275Q9.225 11 8.813 11t-.713.3q-.275.275-.275.7t.275.7l2.15 2.15q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.287-.7t-.287-.7q-.3-.3-.712-.312t-.713.287zm-2.8 9.05L6.7 19.3l-2.75-.6q-.375-.075-.6-.387t-.175-.688L3.45 14.8l-1.875-2.15q-.25-.275-.25-.65t.25-.65L3.45 9.2l-.275-2.825q-.05-.375.175-.688t.6-.387l2.75-.6l1.45-2.45q.2-.325.55-.438t.7.038l2.6 1.1l2.6-1.1q.35-.15.7-.038t.55.438L17.3 4.7l2.75.6q.375.075.6.388t.175.687L20.55 9.2l1.875 2.15q.25.275.25.65t-.25.65L20.55 14.8l.275 2.825q.05.375-.175.688t-.6.387l-2.75.6l-1.45 2.45q-.2.325-.55.438t-.7-.038l-2.6-1.1l-2.6 1.1q-.35.15-.7.038t-.55-.438">
                </path>
              </svg>
            </span>
          </span>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
const props = defineProps<{
  target: string;
}>();

const isLoaded = ref<boolean>(false);

const { data } = await useAsyncData<any>("content-viewer-single", () => {
  return (
    queryContent(
      "articles",
      String(props.target)
    ) as any
  ).findOne();
});

onMounted(() => isLoaded.value = true);
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  text-decoration: none;
  align-items: center;
  transition: all .2s;

  &:hover {
    border-color: rgba(var(--bs-primary-rgb), .5);
    background: rgba(var(--bs-primary-rgb), .075);

    h3 {
      color: var(--bs-primary);
    }
  }

  .card-img {
    height: 7.5rem;
    width: 7.5rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .card-content {
    h3 {
      transition: all .2s;
      font-size: 1.5rem;
      font-family: var(--blog-font-merriweather);
      line-height: 1.5 !important;
      margin-bottom: 1rem;
    }

    .card-meta {
      display: flex;
      align-items: center;
      gap: .75rem;
      flex-wrap: wrap;
      opacity: .75;

      >* {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        flex-wrap: wrap;

        >* {
          line-height: 1;
          vertical-align: middle;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: .25rem;
          flex-wrap: wrap;
        }
      }
    }
  }
}
</style>