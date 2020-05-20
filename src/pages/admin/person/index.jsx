import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Modal, Form, Input, Upload, message } from 'antd';
import { PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

import appConfig from '@/config';

import PersonItem from '@/components/person-item';
import Panel from '@/components/panel';

import { actionCreators as appActionCreators } from '@/stores/modules/app';

import { getPersonList, addPerson, updatePerson, deletePerson } from '@/services';

import css from './index.module.less';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};

function PersonAdmin(props) {
  const {
    appActions: { showLoading, hideLoading }
  } = props;

  const [list, setList] = useState([]);
  const [currentPerson, setCurrentPerson] = useState({
    id: null,
    name: '',
    title: '',
    img: '',
    desc: ''
  });
  const [showEdit, setShowEdit] = useState(false);
  const [editConfirmLoading, setEditConfirmLoading] = useState(false);
  const [fileList, setFileList] = useState([]);

  const [form] = Form.useForm();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchList = async () => {
    try {
      showLoading();
      const { list } = await getPersonList();
      const mapList = list.map((item) => {
        return {
          id: item.participantId,
          name: item.name,
          img: item.imgUrl,
          title: item.title,
          introduction: item.introduction
        };
      });
      setList(mapList);
      hideLoading();
    } catch (err) {
      message.error(err.toString());
      hideLoading();
    }
  };

  useEffect(() => {
    fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    form.resetFields();
  }, [currentPerson, form]);

  const onAddClick = () => {
    setCurrentPerson({
      id: null,
      name: '',
      title: '',
      introduction: ''
    });
    setShowEdit(true);
  };

  const onEditClick = (person) => {
    setCurrentPerson({
      participantId: person.id,
      name: person.name,
      imgUrl: person.img,
      title: person.title,
      introduction: person.introduction
    });
    setShowEdit(true);
  };

  const onDelOkClick = async (id) => {
    try {
      showLoading();
      await deletePerson(id);
      fetchList();
    } catch (err) {
      message.error(err.toString());
      hideLoading();
    }
  };

  const onDelClick = (person) => {
    Modal.confirm({
      title: '删除确认',
      icon: <ExclamationCircleOutlined />,
      content: `是否确认删除${person.title}?`,
      okText: '确认',
      onOk: () => onDelOkClick(person.id),
      cancelText: '取消'
    });
  };

  const onEditOKClick = async () => {
    try {
      setEditConfirmLoading(true);
      const values = await form.validateFields();
      const postData = Object.assign(values, {
        participantId: currentPerson.participantId,
        imgUrl: 'https://www.kepuchina.cn/zt/zb/wskxj20/01/202004/W020200416560373994581.jpg'
      });
      console.log(postData);
      if (postData.participantId) {
        showLoading();
        await updatePerson(postData);
      } else {
        showLoading();
        await addPerson(postData);
      }
      setEditConfirmLoading(false);
      setShowEdit(false);
      fetchList();
    } catch (err) {
      hideLoading();
      message.error(err.toString());
      console.log(err);
    }
  };

  const onEditCancelClick = () => {
    setShowEdit(false);
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
    <div className={css['person-admin-list']}>
      <div className={css['add-wrapper']}>
        <Button type="primary" onClick={onAddClick}>
          新增
        </Button>
      </div>
      <Panel title="嘉宾列表">
        <div className={css['list']}>
          {list.map((person, index) => (
            <div key={index} className={css['person-item']}>
              <PersonItem key={index} {...person} />
              <div className={css['btn-wrapper']}>
                <Button type="primary" onClick={() => onEditClick(person)}>
                  编辑
                </Button>
                &nbsp;
                <Button danger onClick={() => onDelClick(person)}>
                  删除
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Panel>
      <Modal
        forceRender
        title="嘉宾编辑"
        visible={showEdit}
        onOk={onEditOKClick}
        confirmLoading={editConfirmLoading}
        onCancel={onEditCancelClick}
      >
        <Form {...layout} form={form} initialValues={currentPerson}>
          <Form.Item
            label="姓名"
            name="name"
            rules={[
              {
                required: true,
                message: '请输入姓名!'
              }
            ]}
          >
            <Input />
          </Form.Item>
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
          <Form.Item label="封面" name="imgUrl">
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
          <Form.Item
            label="简介"
            name="introduction"
            rules={[
              {
                required: true,
                message: '请输入简介!'
              }
            ]}
          >
            <Input.TextArea autoSize={{ minRows: 5 }} />
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

export default connect(null, mapDispatchToProps)(PersonAdmin);
