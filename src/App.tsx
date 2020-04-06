import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { PutOutRecordInfo, CopyRightInfo, StatementInfo } from './modules/put-on-record/put-on-record';
import './modules/plugins/weather-plugins';
import { ItemHorizontalProps, ItemHorizontalComp } from './modules/items-list/items-list-horizontal';

// 主页顶部导航条容器
class NavBar extends React.Component {
  /**
   * 整理菜单数据方法
   */
  private initItemListData() {
    let itemList: ItemHorizontalProps = {
      items: [
        {
          text: '技术文章',
          click: () => {
            alert('内容正在建设中');
          }
        },
        {
          text: '后台管理',
          title: '未开放',
          disabled: true,
          click: () => {
            alert('暂时未开放！');
          }
        }
      ]
    }

    return itemList;
  }

  public render() {
    return (
      <div className="nav-bar">
        <span className="logo-box">
          <img width="150px" height="50px" alt="logo" src={logo} className="App-logo"></img>
        </span>
        <span className="item-box">
          <ItemHorizontalComp {...this.initItemListData()}></ItemHorizontalComp>
        </span>
      </div>
    )
  }
}

// 主页底部信息条
class BottomLayer extends React.Component {
  public render() {
    return (
      <div
        className="bottom-layer"
      >
        <StatementInfo></StatementInfo>
        <br />
        <CopyRightInfo></CopyRightInfo> | <PutOutRecordInfo></PutOutRecordInfo>
      </div>
    )
  }
}

class IndexMain extends React.Component {

  public render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="header-content">
            <NavBar></NavBar>

            <p>
              网站内容正在积极建设中，精彩内容稍后与您分享
            </p>

            <BottomLayer></BottomLayer>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexMain;
