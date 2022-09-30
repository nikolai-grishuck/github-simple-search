import apiService from "./apiService";

const repositoryService = {
  getRepositoryList(val) {
    return apiService.get(`/search/repositories?q=${val}`)
      .then((response) => response.data);
  },
  getRepositoryInfo({ repositoryOwner, repositoryName }) {
    return apiService.get(`/repos/${repositoryOwner}/${repositoryName}`)
      .then((response) => response.data);
  },
};

export default repositoryService