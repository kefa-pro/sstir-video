import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import VideoItem from '@/components/video-item';
import Panel from '@/components/panel';

import { getVideoList, AddVideo, UpdateVideo, DelVideo } from '@/services';
import { Button, Modal, Form, Input, InputNumber, Upload, message } from 'antd';
import { PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import appConfig from '@/config';

import css from './index.module.less';

import { actionCreators as appActionCreators } from '@/stores/modules/app';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};

function VideoAdmin(props) {
  const {
    appActions: { showLoading, hideLoading }
  } = props;
  // state
  const [list, setList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({
    id: null,
    img: '',
    category: null,
    title: '',
    url: ''
  });
  const [showEdit, setShowEdit] = useState(false);
  const [editConfirmLoading, setEditConfirmLoading] = useState(false);
  const [fileList, setFileList] = useState([]);

  const [form] = Form.useForm();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchList = async () => {
    try {
      showLoading();
      const { list } = await getVideoList();
      const mapList = list.map((item) => {
        return {
          id: item.contentId,
          img: item.imgUrl,
          category: item.issue,
          title: item.title,
          url: item.url
        };
      });
      setList(mapList);
      hideLoading();
    } catch (err) {
      message.error(err.toString())
      hideLoading()
    }
  };

  // 副作用
  useEffect(() => {
    fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    form.resetFields();
  }, [currentVideo, form]);

  // methods
  const onEditOKClick = async () => {
    try {
      setEditConfirmLoading(true);
      const values = await form.validateFields();
      const postData = Object.assign(values, {
        contentId: currentVideo.contentId,
        imgUrl: 'https://www.kepuchina.cn/zt/zb/wskxj20/01/202004/W020200416560373994581.jpg'
      });
      if (postData.contentId) {
        showLoading();
        await UpdateVideo(postData);
      } else {
        showLoading();
        await AddVideo(postData);
      }
      setEditConfirmLoading(false);
      setShowEdit(false);
      fetchList();
    } catch (err) {
      hideLoading();
      message.error(err.toString())
      console.log(err);
    }
  };

  const onEditCancelClick = () => {
    setShowEdit(false);
  };

  const onAddClick = () => {
    setCurrentVideo({
      id: null,
      img: '',
      category: null,
      title: '',
      url: ''
    });
    setShowEdit(true);
  };

  const onDelOkClick = async (id) => {
    try {
      showLoading();
      await DelVideo(id);
      fetchList();
    } catch (err) {
      message.error(err.toString())
      hideLoading()
    }
  };

  const onDelClick = (video) => {
    Modal.confirm({
      title: '删除确认',
      icon: <ExclamationCircleOutlined />,
      content: `是否确认删除${video.title}?`,
      okText: '确认',
      onOk: () => onDelOkClick(video.id),
      cancelText: '取消'
    });
  };

  const onEditClick = (video) => {
    setCurrentVideo({
      contentId: video.id,
      imgUrl: video.img,
      issue: video.category,
      title: video.title,
      url: video.url
    });
    setShowEdit(true);
  };

  const onUploadPicPreview = () => {};

  const onUploadPicChange = () => {};

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  return (
    <div className={css['video-admin-list']}>
      <div className={css['add-wrapper']}>
        <Button type="primary" onClick={onAddClick}>
          新增
        </Button>
      </div>
      <Panel title="视频列表">
        <div className={css['list']}>
          {list.map((video, index) => (
            <div key={index} className={css['video-item']}>
              <VideoItem key={index} {...video} />
              <div className={css['btn-wrapper']}>
                <Button type="primary" onClick={() => onEditClick(video)}>
                  编辑
                </Button>
                &nbsp;
                <Button danger onClick={() => onDelClick(video)}>
                  删除
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Panel>
      <Modal
        forceRender
        title="视频编辑"
        visible={showEdit}
        onOk={onEditOKClick}
        confirmLoading={editConfirmLoading}
        onCancel={onEditCancelClick}
      >
        <Form {...layout} form={form} initialValues={currentVideo}>
          <Form.Item
            label="标题"
            name="title"
            rules={[
              {
                required: true,
                message: '请输入标题!'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="期号"
            name="issue"
            rules={[
              {
                required: true,
                message: '请输入期号!'
              }
            ]}
          >
            <InputNumber min={1} step={1} />
          </Form.Item>
          <Form.Item
            label="视频地址"
            name="url"
            rules={[
              {
                required: true,
                message: '请输入视频地址!'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="视频封面" name="imgUrl">
            <Upload
              action={appConfig.uploadUrl}
              listType="picture-card"
              fileList={fileList}
              onPreview={onUploadPicPreview}
              onChange={onUploadPicChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    appActions: bindActionCreators(appActionCreators, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(VideoAdmin);
