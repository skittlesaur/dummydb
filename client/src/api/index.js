import axios from 'axios'

const GITHUB_API = axios.create({baseURL: "https://api.github.com/repos/skittlesaur/dummydb"});
const API = axios.create({baseURL: "https://dummydb-server.vercel.app/"});

export const fetchGithubReleases = () => GITHUB_API.get('releases?state=all')
export const fetchGithubRequests = () => GITHUB_API.get('pulls?state=all')
export const fetchGithubIssues = () => GITHUB_API.get('issues?state=all');

export const fetchCategories = () => API.get('generate/types');
export const fetchType = (type) => API.get(`generate/types/${type}`);
export const fetchOutputs = () => API.get('generate/output');
export const createRecords = (n, type, data) => API.post(`generate?n=${n}`, {type, data});