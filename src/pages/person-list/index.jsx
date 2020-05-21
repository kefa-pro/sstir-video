import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { message } from 'antd';

import Panel from '@/components/panel';
import PersonItem from '@/components/person-item';

import { getPersonList } from '@/services';
import { actionCreators as appActionCreators } from '@/stores/modules/app';

import css from './index.module.less';

function PersonList(props) {
  const {
    appActions: { showLoading, hideLoading }
  } = props;

  const [personList, setPersonList] = useState([]);

  const fetchPersonList = async () => {
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
      setPersonList(mapList);
      hideLoading();
    } catch (error) {
      message.error(error.toString());
      hideLoading();
    }
  };

  useEffect(() => {
    fetchPersonList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css['person-list-wrapper']}>
      <Panel title="所有嘉宾">
        {personList.map((video, index) => (
          <PersonItem key={index} {...video} />
        ))}
      </Panel>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    appActions: bindActionCreators(appActionCreators, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(PersonList);
