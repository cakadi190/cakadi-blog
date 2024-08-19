<template>
  <nuxt-link :to="`/${post._dir}/${post._path.replace(/^\/[^\/]+\/[^\/]+\//, '')}`" class="article-list-wrapper"
    :data-title="post.title" :data-id="generateUUID()">
    <div class="article-img">
      <nuxt-img :src="post.image" />
    </div>
    <div class="article-content">
      <h2>{{ limitChars(post.title, 50) }}</h2>
      <div class="meta-data">
        <div>
          <i class="fas fa-calendar"></i>
          <time :datetime="$dayjs(post.updated_at).utc().toString()">{{ $dayjs(post.updated_at).locale('id').format('dddd, D MMMM YYYY') }}</time>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
import { generateUUID, truncate, limitChars } from '#imports';

defineProps<{ post: any }>();
</script>

<style lang="scss" scoped>
.article-list-wrapper {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--bs-body-color);

  .article-img {
    height: 5rem;
    width: 5rem;
    display: flex;
    align-items: center;
    border-radius: .5rem;
    overflow: hidden;
    flex-shrink: 0;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .article-content {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    h2 {
      font-size: 1.125rem;
      margin-bottom: 0;
    }
  }
  
	.meta-data {
		display: flex;
		align-items: center;
		gap: .75rem;
		opacity: .5;

		> * {
      line-height: 1;
      vertical-align: middle;
			display: flex;
			align-items: center;
			gap: .325rem;
		}
	}
}
</style>