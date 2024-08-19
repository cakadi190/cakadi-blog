<template>
  <div :data-id="post.id" id="big-header-post">
    <div class="image-wrapper">
      <nuxt-img :loading="isLazy" format="webp" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
        densities="x1 x2" :src="post.image" :alt="post.title" />
    </div>
    <nuxt-link :to="`/kategori/${slugify(post.category[0])}`" class="category" v-if="post.category[0]">
      <div class="decoration-before">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 101 101">
          <path fill-rule="evenodd" d="M101 0H0v101h1C1 45.772 45.772 1 101 1z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="decoration-after">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 101 101">
          <path fill-rule="evenodd" d="M101 0H0v101h1C1 45.772 45.772 1 101 1z" clip-rule="evenodd" />
        </svg>
      </div>
  
      <span>{{ post.category[0] }}</span>
    </nuxt-link>
    <div class="post-content">
      <nuxt-link class="stretched-link" :to="`/${post._dir}/${post._path.replace(/^\/[^\/]+\/[^\/]+\//, '')}`">
        <h3 class="text-merriweather title">{{ post.title }}</h3>
      </nuxt-link>
      <div class="post-meta">
        <div class="author">
          <nuxt-img loading="lazy" sizes="100vw sm:50vw md:200px lg:400px" densities="x1 x2" format="webp"
            :alt="post.author.name" :src="getGravatar(post.author.email)" />
          <span class="d-flex gap-1 align-items-center lh-1" style="vertical-align: middle">
            {{ post.author.name }}
            <div v-if="post.author.email === 'cakadi190@gmail.com'" class="text-primary"
              style="font-size: 1rem; vertical-align: middle">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M10.95 12.7L9.5 11.275Q9.225 11 8.813 11t-.713.3q-.275.275-.275.7t.275.7l2.15 2.15q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.287-.7t-.287-.7q-.3-.3-.712-.312t-.713.287zm-2.8 9.05L6.7 19.3l-2.75-.6q-.375-.075-.6-.387t-.175-.688L3.45 14.8l-1.875-2.15q-.25-.275-.25-.65t.25-.65L3.45 9.2l-.275-2.825q-.05-.375.175-.688t.6-.387l2.75-.6l1.45-2.45q.2-.325.55-.438t.7.038l2.6 1.1l2.6-1.1q.35-.15.7-.038t.55.438L17.3 4.7l2.75.6q.375.075.6.388t.175.687L20.55 9.2l1.875 2.15q.25.275.25.65t-.25.65L20.55 14.8l.275 2.825q.05.375-.175.688t-.6.387l-2.75.6l-1.45 2.45q-.2.325-.55.438t-.7-.038l-2.6-1.1l-2.6 1.1q-.35.15-.7.038t-.55-.438">
                </path>
              </svg>
            </div>
          </span>
        </div>
        <time class="date" :datetime="$dayjs(post.created_at).utc().toString()">{{ $dayjs(post.created_at).format("LL")
          }}</time>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { slugify } from "@/utils/url";
import { getGravatar } from "#imports";

const props = withDefaults(
  defineProps<{
    post: any;
    color?: string;
    isHeader?: boolean;
    lazyLoading?: boolean;
  }>(),
  {
    color: "#f5f5f5",
    isHeader: false,
    lazyLoading: true
  }
);

const isLazy = computed(() => props.lazyLoading ? 'lazy' : 'eager');
</script>

<style lang="scss">
#big-header-post {
  text-decoration: none;
  color: var(--bs-body-color);
  position: relative;

  a {
    text-decoration: none;
    color: var(--bs-body-color);
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: var(--bs-border-radius-xl);
    border: 1px solid v-bind(color);
    aspect-ratio: 16 / 9;

    @at-root [data-bs-theme="dark"] & {
      border-color: var(--bs-body-bg);
    }

    @media screen and (max-width: 992px) {
      width: 100%;
      height: auto;
    }

    @media screen and (max-width: 576px) {
      width: 100%;
      height: auto;
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .category {
    position: absolute;
    top: 0;
    right: 0;
    background-color: v-bind(color);
    padding: 1.25rem 0.5rem;
    border-radius: 0 0 0 var(--bs-border-radius-xl);
    z-index: 2;

    .decoration-before,
    .decoration-after {
      position: absolute;
      width: 10px;
      height: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: v-bind(color);

      @at-root [data-bs-theme="dark"] & {
        color: var(--bs-body-bg);
      }
    }

    .decoration-before {
      top: 0;
      left: -10px;
      transform: rotate(90deg);
    }

    .decoration-after {
      right: 0;
      bottom: -10px;
      transform: rotate(90deg);
    }

    @at-root [data-bs-theme="dark"] & {
      background: var(--bs-body-bg);
    }

    >span {
      padding: 0.5rem 1.5rem;
      border: 1px solid rgba(var(--bs-body-color-rgb), 0.125);
      margin: 0.5rem;
      border-radius: var(--bs-border-radius-lg);
      transition: all 0.3s;
      font-size: 0.875rem;
    }

    &:hover>span {
      background: var(--bs-primary);
      color: var(--bs-white);
    }
  }

  .post-content {
    margin-top: 1.5rem;

    @at-root #post-main-content & {
      margin-top: 1rem;
    }

    .title {
      line-height: 1.5;

      @at-root #post-main-content & {
        font-size: 1.25rem;
      }

      @media screen and (max-width: 992px) {
        font-size: 1.25rem;
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
