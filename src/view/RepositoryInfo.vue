<template>
  <v-row class="mt-15" >
    <v-col cols="4">
      <v-card>
        <v-list-item three-line>
          <img
            class="mr-4"
            :src="getRepoInfo.owner.avatar_url"
            alt="user avatar"
            width="80"
            height="80"
          >
          <v-list-item-content>
            <div class="text-overline mb-4 text-uppercase">
              owner
            </div>
            <v-list-item-title class="text-h5 mb-1">
              {{ getRepoInfo.owner.login }}
            </v-list-item-title>
            <v-list-item-subtitle>
              id: {{ getRepoInfo.owner.id }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col cols="8">
      <v-card>
        <v-card-title>
          <div class="text-overline text-uppercase">
            project
          </div>
        </v-card-title>
        <v-card-title class="pt-0">
          {{ getRepoInfo.name }}
        </v-card-title>
        <v-card-text>
          <div>
            {{ getRepoInfo.description }}
          </div>
        </v-card-text>
        <v-divider class="mx-4"/>
        <v-card-title>Statistics</v-card-title>
        <v-card-text>
          <v-chip-group
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip>
              <v-icon small>
                mdi-star
              </v-icon>
              {{ getRepoInfo.watchers }} stars
            </v-chip>
            <v-chip>
              <v-icon small>
                mdi-eye
              </v-icon>
              {{ getRepoInfo.subscribers_count }} watching
            </v-chip>
            <v-chip>
              <v-icon small>
                mdi-source-fork
              </v-icon>
              {{ getRepoInfo.forks }} forks
            </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { ROUTERS } from "@/utils/constants";

export default {
  name: "RepositoryInfo",
  computed: {
    ...mapGetters({
      getRepoInfo: "GET_REPOSITORIES_INFO",
    }),
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    ...mapActions({
      fetchRepoInfo: "FETCH_REPO_INFO",
    }),
    async fetchData() {
      const { repository, owner } = this.$route.params;
      if (repository && owner) {
        await this.fetchRepoInfo({
          repositoryName: repository,
          repositoryOwner: owner
        })
      }
      if (!this.getRepoInfo) {
        this.$router.push({ name: ROUTERS.MAIN.name})
      }
    }
  },
};
</script>
