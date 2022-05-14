import axios from 'axios'

const GITHUB_API = axios.create({baseURL: "https://api.github.com/repos/Java-Discord/JavaBot"});

export const fetchGithubReleases = () => GITHUB_API.get('releases?state=all')
export const fetchGithubRequests = () => GITHUB_API.get('pulls?state=all')
export const fetchGithubIssues = () => GITHUB_API.get('issues?state=all');