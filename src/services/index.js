import { AppGet, AppPost, AppDelete } from '@/utils/request';

// 获取首页内容
export function getHome() {
  return AppGet('/getActivityIndex');
}

// 获取所有视频列表
export function getVideoList() {
  return AppGet('/getContentList', {
    pageNum: 0,
    pageSize: 999
  });
}

// 新增视频
export function AddVideo(data) {
  return AppPost('/insertContent', data);
}

// 更新视频
export function UpdateVideo(data) {
  return AppPost('/updateContent', data);
}

// 删除视频
export function DelVideo(contentId) {
  return AppDelete('/deleteContent', { contentId });
}

// 获取嘉宾列表
export function getPersonList() {
  return AppGet('/getParticipantList', {
    pageNum: 0,
    pageSize: 999
  });
}

// 新增嘉宾
export function addPerson(data) {
  return AppPost('/insertParticipant', data);
}

// 更新嘉宾信息
export function updatePerson(data) {
  return AppPost('/updateParticipant', data);
}

// 删除嘉宾信息
export function deletePerson(participantId) {
  return AppDelete('/deleteParticipant', { participantId });
}

// 获取嘉宾详情
export function getPersonDetail(data) {
  return AppGet('/getParticipantInfoById', data);
}

// 点赞或取消
export function postLike(data) {
  return AppPost('/getALike', data);
}
