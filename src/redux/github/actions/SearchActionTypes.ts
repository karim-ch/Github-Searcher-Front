import { AxiosError } from 'axios';

export const SEARCH_LOADING = 'SEARCH_LOADING';
export const SEARCH_FAIL = 'SEARCH_FAIL';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export interface ClearSearch {
  type: typeof CLEAR_SEARCH;
}

export interface SearchLoading {
  type: typeof SEARCH_LOADING;
}

export interface SearchFail {
  type: typeof SEARCH_FAIL;
  payload: AxiosError;
}

export interface SearchSuccess {
  type: typeof SEARCH_SUCCESS;
  payload: GithubSearch;
}

export type SearchDispatchTypes = ClearSearch | SearchFail | SearchLoading | SearchSuccess;

export type User = {
  login: string;
  id: number;
  nodeId: number;
  avatarUrl: string;
  gravatarId: string;
  url: string;
  htmlUrl: string;
  followersUrl: string;
  followingUrl: string;
  gistsUrl: string;
  starredUrl: string;
  subscriptionsUrl: string;
  organizationsUrl: string;
  reposUrl: string;
  eventsUrl: string;
  receivedEventsUrl: string;
  type: string;
  siteAdmin: boolean;
  score: number;

  name: string;
  company: null;
  blog: string;
  location: string;
  email: string;
  hireable: null;
  bio: string;
  twitterUsername: string;
  publicRepos: number;
  publicGists: number;
  followers: number;
  following: number;
  createdAt: string;
  updatedAt: string;
};

export type Repository = {
  id: number;
  nodeId: string;
  name: string;
  fullName: string;
  private: boolean;
  owner: User;
  htmlUrl: string;
  description: string;
  fork: boolean;
  url: string;
  forksUrl: string;
  keysUrl: string;
  collaboratorsUrl: string;
  teamsUrl: string;
  hooksUrl: string;
  issueEventsUrl: string;
  eventsUrl: string;
  assigneesUrl: string;
  branchesUrl: string;
  tagsUrl: string;
  blobsUrl: string;
  gitTagsUrl: string;
  gitRefsUrl: string;
  treesUrl: string;
  statusesUrl: string;
  languagesUrl: string;
  stargazersUrl: string;
  contributorsUrl: string;
  subscribersUrl: string;
  subscriptionUrl: string;
  commitsUrl: string;
  gitCommitsUrl: string;
  commentsUrl: string;
  issueCommentUrl: string;
  contentsUrl: string;
  compareUrl: string;
  mergesUrl: string;
  archiveUrl: string;
  downloadsUrl: string;
  issuesUrl: string;
  pullsUrl: string;
  milestonesUrl: string;
  notificationsUrl: string;
  labelsUrl: string;
  releasesUrl: string;
  deploymentsUrl: string;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  gitUrl: string;
  sshUrl: string;
  cloneUrl: string;
  svnUrl: string;
  homepage: string;
  size: number;
  stargazersCount: number;
  watchersCount: number;
  language: string;
  hasIssues: boolean;
  hasProjects: boolean;
  hasDownloads: boolean;
  hasWiki: boolean;
  hasPages: boolean;
  forksCount: number;
  mirrorUrl: null;
  archived: boolean;
  disabled: boolean;
  openIssuesCount: number;
  license: {
    key: string;
    name: string;
    spdxId: string;
    url: string;
    nodeId: string;
  };
  forks: number;
  openIssues: number;
  watchers: number;
  defaultBranch: string;
  permissions: {
    admin: number;
    push: number;
    pull: number;
  };
  score: number;
  type: string;
};

export enum SearchType {
  repositories = 'repositories',
  users = 'users',
}

export interface SearchQuery {
  query: string;
  type: SearchType;
}

export type GithubSearch = {
  totalCount: number;
  incompleteResults: boolean;
  items: (User | Repository)[];
};
