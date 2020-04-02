import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import { PutOutRecordInfo, CopyRightInfo, StatementInfo } from './modules/put-on-record/put-on-record';
import './modules/plugins/weather-plugins';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          网站内容正在积极建设中，精彩内容稍后与您分享
        </p>

        <div
          className="bottom-layer"
        >
          <StatementInfo></StatementInfo>
          <br />
          <CopyRightInfo></CopyRightInfo> | <PutOutRecordInfo></PutOutRecordInfo>
        </div>
      </header>    
    </div>
  );
}

export default App;
