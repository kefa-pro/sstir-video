import { AppGet, AppPost } from '@/utils/request';

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
  return AppPost('/deleteContent', { contentId });
}
