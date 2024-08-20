<template>
  <div id="post-single">
    <div class="meta-header">
      <div class="container">
  
        <time class="d-block mb-2 mb-lg-0 date" :datetime="$dayjs(data.created_at).utc().toString()">{{ $dayjs(data.created_at).format("LLLL")
          }}</time>
  
        <h1 class="title mb-0 mb-lg-2">{{ data.title }}</h1>
  
        <nav class="d-none d-md-none d-lg-inline-flex" aria-label="Breadcrumb Navigation">
          <ul class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li class="breadcrumb-item">
              <nuxt-link :to="`/kategori/${slugify(data.category[0])}`">{{
                unslugify(data.category[0])
                }}</nuxt-link>
            </li>
            <li class="breadcrumb-item">
              {{ data.title }}
            </li>
          </ul>
        </nav>
  
        <a :href="buildUrl(data.image)" data-fancybox class="image-wrapper">
          <nuxt-img :preload="true" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px" densities="x1 x2"
            :src="buildUrl(data.image)" />
        </a>
      </div>
    </div>
  
    <div class="container">
      <div class="row gy-4">
        <div class="col-md-8">
          <ContentRendererMarkdown :value="data" />
  
          <div class="meta-data">
            <div>
              <i class="fas fa-folder"></i>
              <nuxt-link :to="`/kategori/${slugify(data.category[0])}`
                            ">{{ unslugify(data.category[0]) }}</nuxt-link>
            </div>
            <div>
              <i class="fas fa-tag"></i>
              <span><span v-for="(tag, index) in data.tags" :key="index">
                  <nuxt-link :to="`/topik/${slugify(tag)}`">{{ unslugify(tag)
                    }}</nuxt-link>
                  <span v-if="index + 1 < data.tags.length">, &nbsp;</span>
                </span></span>
            </div>
          </div>
  
          <div id="author-section">
            <h4>Artikel ini ditulis oleh</h4>
  
            <div class="profile-wrapper">
              <nuxt-img :preload="true" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                densities="x1 x2" format="webp" :alt="data.author.name" :src="getGravatar(data.author.email)" />
  
              <div class="profile-info">
                <h5 class="mb-2 align-items-center justify-content-center justify-content-lg-start d-flex gap-1 lh-1">
                  {{ data.author.name }}
  
                  <span data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Pengguna yang terverifikasi"
                    v-if="data.author.email === 'cakadi190@gmail.com'" class="text-primary"
                    style="font-size: 1rem; vertical-align: middle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      <path fill="currentColor"
                        d="M10.95 12.7L9.5 11.275Q9.225 11 8.813 11t-.713.3q-.275.275-.275.7t.275.7l2.15 2.15q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.287-.7t-.287-.7q-.3-.3-.712-.312t-.713.287zm-2.8 9.05L6.7 19.3l-2.75-.6q-.375-.075-.6-.387t-.175-.688L3.45 14.8l-1.875-2.15q-.25-.275-.25-.65t.25-.65L3.45 9.2l-.275-2.825q-.05-.375.175-.688t.6-.387l2.75-.6l1.45-2.45q.2-.325.55-.438t.7.038l2.6 1.1l2.6-1.1q.35-.15.7-.038t.55.438L17.3 4.7l2.75.6q.375.075.6.388t.175.687L20.55 9.2l1.875 2.15q.25.275.25.65t-.25.65L20.55 14.8l.275 2.825q.05.375-.175.688t-.6.387l-2.75.6l-1.45 2.45q-.2.325-.55.438t-.7-.038l-2.6-1.1l-2.6 1.1q-.35.15-.7.038t-.55-.438">
                      </path>
                    </svg>
                  </span>
                </h5>
                <p>{{ data.author.description }}</p>
              </div>
            </div>
          </div>
  
          <div id="comment-section">
            <h4>Komentar</h4>
  
            <div class="alert-info alert mb-0">
              Bagian ini masih tahap pengerjaan ya. Nanti bakalan hadir dalam waktu dekat.
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <aside class="sidebar-inner">
            <sidebar-widget-subscribe />
            <sidebar-widget-socmed />
            <sidebar-widget-donate />
            <sidebar-widget-recent-articles />
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { buildUrl, slugify, getGravatar, unslugify } from "#imports";

const props = defineProps<{
  data?: any;
}>();

const breadList = ref([
  { text: "Beranda", link: buildUrl("/") },
  {
    text: unslugify(props.data.category[0]),
    link: buildUrl(`/kategori/${slugify(props.data.category[0])}`),
  },
  {
    text: props.data.title,
    link: buildUrl(`/${slugify(props.data.category[0])}/${slugify(props.data.title)}`),
  },
]);
const items = breadList.value.map((item, index) => ({
  "@type": "ListItem",
  position: index + 1,
  item: {
    "@id": item.link,
    name: item.text,
  },
}));

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Disabling because error on type data
useJsonld({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  // @ts-ignore: Disabling because error on type data
  itemListElement: items,
});
</script>

<style lang="scss" scoped>
#post-single {
  .meta-header {
    padding-top: 7.5rem;

    .title {
      font-family: var(--blog-font-merriweather);
      line-height: 1.5;

      @media screen and (max-width: 992px) {
        font-size: 1.5rem;
      }
    }

    .image-wrapper {
      width: 100%;
      margin-bottom: 2rem;
      margin-top: 2rem;
      display: flex;
      aspect-ratio: 16 / 9;
      overflow: hidden;
      border-radius: var(--bs-border-radius);

      @media screen and (max-width: 992px) {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  #author-section {
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    padding-top: 2rem;
    border-top: 1px dashed rgba(var(--bs-body-color-rgb), .1);
    border-bottom: 1px dashed rgba(var(--bs-body-color-rgb), .1);

    .profile-wrapper {
      display: flex;
      align-items: center;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 10px;

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 20px;
        border: 3px dashed #ffffff;
      }

      .profile-info {
        flex: 1;

        h5 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 5px;
        }

        p {
          color: #666;
          line-height: 1.5;
          margin-bottom: 0;
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;

        img {
          margin-right: 0;
          margin-bottom: 15px;
        }
      }
    }
  }

  .meta-data {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: .75rem;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px dashed rgba(var(--bs-body-color-rgb), .1);

    @media screen and (max-width: 992px) {
      align-items: flex-start;
    }

    >* {
      vertical-align: middle;
      display: flex;
      align-items: center;
      gap: .325rem;


      a {
        text-decoration: none;
      }
    }
  }
}
</style>