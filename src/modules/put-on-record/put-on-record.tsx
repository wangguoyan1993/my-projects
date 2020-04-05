import React from "react";
import './put-on-record.scss';

export class PutOutRecordInfo extends React.Component {
    render() {
        return (
            <span
                className="info-box"
            >
                <a
                    title="http://beian.miit.gov.cn"
                    className="put-on-record"
                    href="http://beian.miit.gov.cn"
                    target="http://beian.miit.gov.cn"
                >
                    辽ICP备20002112号-1
                </a>
            </span>
        )
    }
}

export class CopyRightInfo extends React.Component {
    render() {
        return (
            <span
                className="info-box"
            >
                Copyright (c) 2020 migao.com 版权所有
            </span>
        )
    }
}

export class StatementInfo extends React.Component {
    render() {
        return (
            <span
                className="info-box"
            >
                本站资源来源于网络以及个人分享，仅供个人学习与交流 
            </span>
        )
    }
}