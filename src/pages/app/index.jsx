import React from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';

import { getLoadingStatus } from '@/stores/modules/app';

function App(props) {
  const { isLoading } = props;
  return (
    <Spin spinning={isLoading}>
      <div>{props.children}</div>
    </Spin>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: getLoadingStatus(state)
  };
};

export default connect(mapStateToProps)(App);
