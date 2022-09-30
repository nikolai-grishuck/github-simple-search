<template>
  <div>
    <SearchBar
      class="mb-5 mt-15"
      @onSearch="getList"
    />
    <div class="d-flex mb-4" v-if="getRepoList.length">
      <v-autocomplete
        v-model="selectedUser"
        class="mr-2"
        :items="getFilters.userNameList"
        solo
        outlined
        label="Filter by owner"
        :disabled="!getRepoList.length"
        hide-details
      />
      <v-text-field
        v-model="minStarsFilter"
        class="ml-2"
        :disabled="!getRepoList.length"
        label="Filter by stars"
        type="number"
        hide-details
        placeholder="Input stars..."
        solo
        outlined
        background-color="white"
      />
    </div>

    <v-list
      v-if="getRepoList.length"
      class="rounded-xl overflow-hidden pa-0"
      outlined
    >
      <RepositoryListItem
        v-for="repository in filteredList"
        :key="repository.id"
        :repository="repository"
        @click="() => openRepoInfo(repository)"
      />
    </v-list>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import SearchBar from "@/components/SearchBar";
import RepositoryListItem from "@/components/RepositoryListItem";

export default {
  name: "RepositoryList",
  components: { RepositoryListItem, SearchBar },
  data() {
    return {
      selectedUser: '',
      minStarsFilter: null,
    };
  },
  computed: {
    ...mapGetters({
      getFilters: "GET_FILTERS",
      getRepoList: "GET_REPOSITORIES_LIST",
    }),
    filteredList() {
      return (this.selectedUser || this.minStarsFilter) ? this.getRepoList.filter(({ owner, watchers }) => {
        if (this.minStarsFilter && this.selectedUser) {
          return this.minStarsFilter <= watchers && owner.login === this.selectedUser;
        }
        if (this.selectedUser) {
          return owner.login === this.selectedUser;
        }
        if (this.minStarsFilter) {
          return this.minStarsFilter <= watchers;
        }
      }) : this.getRepoList;
    },
  },
  beforeDestroy() {
    this.setRepositoriesList([]);
  },
  methods: {
    ...mapMutations({
      setRepository: 'SET_REPOSITORY_INFO',
      setRepositoriesList: 'SET_REPOSITORIES_LIST',
    }),
    ...mapActions({
      fetchRepoList: "FETCH_REPOSITORIES_LIST",
    }),
    getList(search) {
      this.selectedUser = '';
      this.minStarsFilter = null;
      this.fetchRepoList(search);
    },
    redirectToInfoPage({ repository, owner }) {
      this.$router.push({ name: 'info', params: { repository, owner } });
    },
    openRepoInfo(repo) {
      this.setRepository(repo);
      this.redirectToInfoPage({
        repository: repo.name,
        owner: repo.owner.login,
      });
    },
  },
};
</script>

