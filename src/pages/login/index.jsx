import React from 'react';

import { Form, Button, Input, message } from 'antd';

import { setToken } from '@/utils/auth';

import css from './index.module.less';

export default function Login(props) {
  const {
    location: { state }
  } = props;
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };

  const onFinish = ({ username, password }) => {
    if (username === 'zliu' && password === '1046') {
      setToken(new Date() - 0);
      message.success('登录成功');
      if (state && state.from) {
        props.history.push(state.from);
      } else {
        props.history.push('/content/admin/list');
      }
    } else {
      message.error('密码错误,请不要乱来~~');
    }
  };

  return (
    <div className={css['login-wrapper']}>
      <Form {...layout} name="basic" onFinish={onFinish}>
        <Form.Item
          label="姓名"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
