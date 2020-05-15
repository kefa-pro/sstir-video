import React from 'react';

import css from './index.module.less';

export default function PageFooter() {
  return (
    <footer className={css['footer-wrapper']}>
      <div className={css['container']}>
        <div className={css['content-wrapper']}>
          <div className={css['left']}>
            <div className={css['link-wrapper']}>
              <h5>科研妈妈讲故事发布平台</h5>

              <div className={css['link']}>上海科技创新数据中心</div>
              <div className={css['link']}>腾讯视频号</div>
              <div className={css['link']}>哔哩哔哩活动页</div>
            </div>
            <div className={css['related-wrapper']}>
              <h5>合作单位</h5>
              <div className={css['link']}>哔哩哔哩</div>
              <div className={css['link']}>腾讯视频</div>
              <div className={css['link']}>爱奇艺视频</div>
            </div>
          </div>
          <div className={css['right']}>
            <h5>联系我们</h5>
            <div className={css['tel']}>820-834-5114</div>
            <div className={css['qrcode']}></div>
          </div>
        </div>
        <div className={css['cpy']}>
          <div className={css['item']}>sstir&copy;2020</div>
          <div className={css['item']}>沪ICP备10209921号-B</div>
          <div className={css['item']}>上海市钦州路100号二号楼4楼</div>
        </div>
      </div>
    </footer>
  );
}
