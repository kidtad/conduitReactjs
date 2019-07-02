import { authHeader } from "../Helpers/authHeader";
import { API_ENDPOINTS, REGISTER, LOGIN } from "../Constants/index";
import axios from "axios";

export const Service = {
  logout,
  getAllTags,
  getListView,
  loginRegister,
  getFeed,
  createArticle,
  getArticle,
  getcomment,
  postComment,
  deleteComment,
  favoriteArticle,
  unFavoriteArticle,
  followArticle,
  unFollowArticle,
  getProfile,
  updateUser,
  editArticle,
  deleteArticle
};

function loginRegister(User, infor) {
  const patch = getPatch(infor);
  return axios.post(patch, User, authHeader()).then(res => {
    localStorage.setItem("user", JSON.stringify(res.data));
    return res.data;
  });
}
function getPatch(infor) {
  if (infor === LOGIN) {
    return API_ENDPOINTS.LOGIN.path;
  }
  if (infor === REGISTER) {
    return API_ENDPOINTS.CREATE_USERS.path;
  }
}

function logout() {
  localStorage.removeItem("user");
}

function getAllTags() {
  return axios
    .get(API_ENDPOINTS.GET_TAGS_LIST.path, authHeader())
    .then(response => {
      return response;
    });
}

function getListView(offset = 0, limit = 10, tag, author, favorited) {
  return axios.get(API_ENDPOINTS.GET_LIST_ARTICLE.path, {
    params: {
      offset,
      limit,
      tag,
      author,
      favorited
    },
    headers: authHeader()
  });
}

function getFeed(offset = 0, limit = 10) {
  return axios.get(API_ENDPOINTS.GET_MY_FEED.path, {
    params: {
      offset: offset,
      limit: limit
    },
    headers: authHeader()
  });
}
function createArticle(article) {
  return axios
    .post(API_ENDPOINTS.CREATE_ARTICLE.path, article, { headers: authHeader() })
    .then(res => {
      return res.data;
    });
}
function getArticle(slug) {
  const path = `${API_ENDPOINTS.GET_ARTICLE.path}${slug}`;
  return axios.get(path, { headers: authHeader() }).then(res => res.data);
}
function editArticle(article, slug) {
  const path = `${API_ENDPOINTS.GET_ARTICLE.path}${slug}`;
  return axios
    .put(path, article, { headers: authHeader() })
    .then(res => res.data);
}
function deleteArticle(slug) {
  const path = `${API_ENDPOINTS.DELETE_ARTICLE.path}${slug}`;
  return axios
    .delete(path, { headers: authHeader() })
    .then(res => res.data);
}
function favoriteArticle(slug) {
  const path = `${API_ENDPOINTS.GET_ARTICLE.path}${slug}/favorite`;
  return axios
    .post(path, null, { headers: authHeader() })
    .then(res => res.data);
}
function unFavoriteArticle(slug) {
  const path = `${API_ENDPOINTS.GET_ARTICLE.path}${slug}/favorite`;
  return axios.delete(path, { headers: authHeader() }).then(res => res.data);
}
function followArticle(username) {
  const path = `${API_ENDPOINTS.FOLLOW.path}${username}/follow`;
  return axios
    .post(path, null, { headers: authHeader() })
    .then(res => res.data);
}
function unFollowArticle(username) {
  const path = `${API_ENDPOINTS.FOLLOW.path}${username}/follow`;
  return axios.delete(path, { headers: authHeader() }).then(res => res.data);
}
function getcomment(slug) {
  const path = `${API_ENDPOINTS.GET_COMMENTS.path}${slug}/comments`;
  return axios.get(path, { headers: authHeader() }).then(res => res.data);
}
function postComment(slug, comment) {
  const path = `${API_ENDPOINTS.POST_COMMENTS.path}${slug}/comments`;
  return axios
    .post(path, comment, { headers: authHeader() })
    .then(res => res.data);
}
function deleteComment(slug, id) {
  const path = `${API_ENDPOINTS.POST_COMMENTS.path}${slug}/comments/${id}`;
  return axios.delete(path, { headers: authHeader() }).then(res => res.data);
}
function getProfile(user) {
  return axios.get(`${API_ENDPOINTS.GET_PROFILE.path}${user}`, {
    headers: authHeader()
  });
}
function updateUser(inforEdit) {
  return axios
    .put(API_ENDPOINTS.EDIT_USER.path, inforEdit, { headers: authHeader() })
    .then(res => {
      localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    });
}