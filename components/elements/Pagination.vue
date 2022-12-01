<template>
  <div class="pagination">
    <a @click="paginate(-1)" class="prev">← Previous Page</a>
    <a @click="paginate(+1)" class="next">Next Page →</a>
    <!-- <a v-if="hasPreviousPage" @click="paginate(-1)" class="prev"
      >← Previous Page</a
    >
    <a v-if="hasNextPage" @click="paginate(+1)" class="next">Next Page →</a> -->
  </div>
</template>

<script setup>
const props = defineProps({
  posts: {
    type: Object,
  },
  postsQuery: {
    type: Object,
  },
  limit: {
    type: Number,
  },
  where: {
    type: Object,
  },
});

const firstStartCursor = props.posts.data.posts.pageInfo.startCursor;
const hasNextPage = props.posts.data.posts.pageInfo.hasNextPage;
const hasPreviousPage = false;
const first = null;
const last = null;
const startCursor = null;
const endCursor = null;

const paginate = async (i) => {
  if (i < 0) {
    first.value = null;
    last.value = props.limit;
    startCursor.value = props.posts.data.posts.pageInfo.startCursor;
    endCursor.value = null;
  } else if (i > 0) {
    first.value = props.limit;
    last.value = null;
    startCursor.value = null;
    endCursor.value = props.posts.data.posts.pageInfo.endCursor;
  }

  await this.$apolloProvider.defaultClient
    .query({
      query: props.postsQuery,
      variables: {
        first: props.first,
        last: props.last,
        endCursor: props.endCursor,
        startCursor: props.startCursor,
        where: props.where,
      },
    })
    .then((posts) => {
      props.$emit("updatePosts", posts);
      if (i < 0) {
        props.hasNextPage = true;
        props.hasPreviousPage =
          props.firstStartCursor == posts.data.posts.pageInfo.startCursor
            ? false
            : true;
      } else {
        props.hasPreviousPage = true;
        props.hasNextPage = posts.data.posts.pageInfo.hasNextPage;
      }
    });
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
};
</script>
