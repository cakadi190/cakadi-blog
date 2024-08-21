<template>
  <div class="search-modal" v-if="isMounted" :class="{ open: isOpen }">
    <div class="container">
      <div class="search-wrapper">
        <div class="icon">
          <i class="fas fa-search"></i>
        </div>
        <input type="text" class="search-input" placeholder="Cari Sesuatu Disini" v-model="searchValue" />
        <button class="close-button" @click="toggle" aria-label="Cari Artikel">
          <i class="fas fa-x"></i>
        </button>
      </div>
  
      <div class="section" id="recent-post">
        <h3 class="title">Artikel Terkini</h3>
  
        <div class="mt-3 row position-relative">
          <ContentList path="/articles" :query="{ where: { draft: { $eq: false } }, limit: 4, sort: { date: -1 } }">
            <template #default="{ list }">
              <div class="col-md-3" @click="toggle" v-for="data in list" :key="data._id">
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
  
      <div class="section" id="categories">
        <h3 class="title">Cari Berdasarkan Topik</h3>
  
        <ul class="categories-list">
          <li v-for="category in defaultCategories" :key="category.slug">
            <nuxt-link :to="`/kategori/${category.slug}`" class="category" @click="toggle">
              {{ category.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { buildUrl } from '#imports';

const { toggle, isOpen } = useSearchModal();
const isMounted = ref(false);
const searchValue = ref<string | null>(null);

onMounted(() => {
  isMounted.value = true;
});

const defaultCategories = ref([
  { name: "Teknologi", slug: "teknologi" },
  { name: "Desain Grafis", slug: "desain-grafis" },
  { name: "Coding", slug: "coding" },
  { name: "Pramuka", slug: "pramuka" },
  { name: "Pengalaman Hidup", slug: "pengalaman-hidup" },
  { name: "Kuliah", slug: "kuliah" },
]);

function sortByDate(list: any[]) {
  return list.slice().sort((a, b) => {
    const dateA = new Date(a.updated_at || a.created_at).getTime();
    const dateB = new Date(b.updated_at || b.created_at).getTime();
    return dateB - dateA;
  });
}
</script>

<style lang="scss" scoped>
.search-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bs-body-bg);
  z-index: 1000;
  transform: translateY(-100%);
  transition: ease-in-out 0.3s;
  opacity: 0;
  // transform: scale(0);
  z-index: 1200;

  &.open {
    transform: translateY(0);
    opacity: 1;
    // transform: scale(1);
  }
}

.search-wrapper {
  position: relative;
  transition: ease-in-out 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 992px) {
    margin-top: 1rem;
  }

  .icon,
  .close-button {
    width: 4rem;
    height: 4rem;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    font-size: 1.5em;
    z-index: 2;
    background: transparent;
    transition: all 0.3s;
    border: 0;
    color: var(--bs-body-color-rgb);
    border-radius: 99rem;
    flex-shrink: 0;

    @media screen and (max-width: 992px) {
      width: 3rem;
      height: 3rem;
      font-size: 1em;
    }
  }

  .close-button {
    border: 1px solid var(--bs-primary);
    color: var(--bs-primary);

    &:hover {
      background: var(--bs-primary);
      color: var(--bs-white);
      cursor: pointer;
    }
  }

  .search-input {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 2rem 6rem;
    z-index: 1;
    border: 0;
    font-size: 1.25rem;
    border-bottom: 1px solid rgba(var(--bs-body-color-rgb), 0.125);
    outline: 0;
    color: var(--bs-body-color-rgb);
    transition: all 0.3s;
    position: absolute;
    background: transparent;
    left: 0;
    right: 0;
    bottom: 0;

    @media screen and (max-width: 992px) {
      padding: 1rem 4.5rem;
    }

    &:focus {
      border-color: var(--bs-primary);
    }
  }
}

.section {
  margin-bottom: 2rem;

  .title {
    font-weight: 600;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: "";
      width: 0.75rem;
      height: 0.75rem;
      background: var(--bs-primary);
      border-radius: 99rem;
    }
  }
}

#categories {
  .categories-list {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-top: 1.5rem;
    gap: 0.5rem;
    flex-wrap: wrap;

    @media screen and (max-width: 992px) {
      margin-top: 1rem;
    }

    li {
      a {
        text-decoration: none;
        padding: 0.75rem 1.5rem;
        font-size: 1.25em;
        display: flex;
        align-items: center;
        color: var(--bs-body-color);
        border: 1px solid rgba(var(--bs-body-color-rgb), 0.125);
        border-radius: var(--bs-border-radius-lg);
        transition: all 0.2s;

        @media screen and (max-width: 992px) {
          font-size: 1em;
          padding: 0.5rem 1rem;
        }

        &:hover {
          background: var(--bs-primary);
          color: var(--bs-white);
          border-color: var(--bs-primary);
        }
      }
    }
  }
}
</style>