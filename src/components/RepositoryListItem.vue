<template>
  <v-list-item
    link
    class="pr-10"
    @click="$emit('click')"
  >
    <v-list-item-icon
      class="d-flex flex-column align-center"
      style="width: 150px"
    >
      <img
        class="rounded-circle"
        :src="repository.owner.avatar_url"
        alt="user avatar"
        width="60px"
        height="60px"
      >
      <v-subheader>
        {{ repository.owner.login }}
      </v-subheader>
    </v-list-item-icon>

    <v-list-item-content align="left">
      <v-list-item-title>
        {{ repository.name }}
      </v-list-item-title>
      <v-list-item-subtitle>
        {{ repository.description }}
      </v-list-item-subtitle>
    </v-list-item-content>
    <div class="d-flex align-center">
      <v-icon small>
        mdi-star
      </v-icon>
      <span>
        {{ repository.stargazers_count }}
      </span>
    </div>
  </v-list-item>
</template>

<script>
export default {
  name: "RepositoryListItem",
  props: {
    repository: {
      type: Object,
      required: true,
    },
  },
};
</script>

