<template>
  <nuxt-link :to="`/${item._dir}/${item._path.replace(/^\/[^\/]+\/[^\/]+\//, '')}`" class="post-item">
    <div class="image-wrapper">
      <nuxt-img loading="lazy" format="webp" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
        densities="x1 x2" :alt="item.title" :src="item.image" />
    </div>
    <div class="post-content">
      <h3 class="text-merriweather title">{{ item.title }}</h3>
  
      <div style="vertical-align: middle" class="post-meta">
        <div class="author">
          <nuxt-img loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px" densities="x1 x2"
            format="webp" :src="getGravatar(item.author.email)" :alt="item.author.name" />
          <span class="d-flex gap-1 align-items-center lh-1" v-if="item.author.email === 'cakadi190@gmail.com'"
            style="vertical-align: middle">{{ item.author.name }}
  
            <div class="text-primary" style="font-size: 1rem; vertical-align: middle">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M10.95 12.7L9.5 11.275Q9.225 11 8.813 11t-.713.3q-.275.275-.275.7t.275.7l2.15 2.15q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.287-.7t-.287-.7q-.3-.3-.712-.312t-.713.287zm-2.8 9.05L6.7 19.3l-2.75-.6q-.375-.075-.6-.387t-.175-.688L3.45 14.8l-1.875-2.15q-.25-.275-.25-.65t.25-.65L3.45 9.2l-.275-2.825q-.05-.375.175-.688t.6-.387l2.75-.6l1.45-2.45q.2-.325.55-.438t.7.038l2.6 1.1l2.6-1.1q.35-.15.7-.038t.55.438L17.3 4.7l2.75.6q.375.075.6.388t.175.687L20.55 9.2l1.875 2.15q.25.275.25.65t-.25.65L20.55 14.8l.275 2.825q.05.375-.175.688t-.6.387l-2.75.6l-1.45 2.45q-.2.325-.55.438t-.7-.038l-2.6-1.1l-2.6 1.1q-.35.15-.7.038t-.55-.438">
                </path>
              </svg>
            </div>
          </span>
        </div>
        <time class="date" :datetime="$dayjs(item.created_at).utc().toString()">{{ $dayjs(item.created_at).format("LL")
          }}</time>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
import { getGravatar } from "#imports";

defineProps<{
  item: any;
}>();
</script>

<style lang="scss" scoped>
.post-item {
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(var(--bs-body-color-rgb), 0.125);
  position: relative;
  display: flex;
  gap: 1.5rem;
  text-decoration: none;
  color: var(--bs-body-color);
  align-items: center;

  @media screen and (max-width: 992px) {
    gap: 1rem;
  }

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }

  .image-wrapper {
    aspect-ratio: 1 / 1;
    flex-shrink: 0;
    width: 6.25rem;
    border-radius: var(--bs-border-radius-lg);
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 992px) {
      aspect-ratio: 1 / 1;
      width: 5.75rem;
      height: 5.75rem;
    }

    img {
      position: absolute;
      object-fit: cover;
      height: 100%;
    }
  }

  .post-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .title {
      font-size: 1.25rem;
      line-height: 1.5;

      @media screen and (max-width: 992px) {
        font-size: 1rem;
      }
    }

    .post-meta {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      >* {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:not(:first-child)::before {
          content: "";
          width: 0.325rem;
          height: 0.325rem;
          display: flex;
          border-radius: 99rem;
          background: rgba(var(--bs-body-color-rgb), 0.25);
        }
      }

      .author {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        img {
          height: 24px;
          width: 24px;
          border-radius: 99rem;
        }
      }
    }
  }
}
</style>