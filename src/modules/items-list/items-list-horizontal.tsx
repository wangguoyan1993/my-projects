/*
 * Filename: e:\projects\my-projects\src\modules\tabs\tab-horizontal.tsx
 * Path: e:\projects\my-projects
 * Created Date: Sunday, April 5th 2020, 3:27:18 pm
 * Author: wangguoyan
 * 
 * Copyright (c) 2020 migao.pub
 * 
 * Description: 横向tab页组件
 */
import './items-list-horizontal.scss';
import React from "react";

// 横向目录组件 成员类 参数接口
interface ItemHorizontalMemberProps {
    text: string;
    title?: string;
    icon?: string;
    disabled?: boolean;
    click: () => any;
}

// 横向目录组件 参数接口
export interface ItemHorizontalProps {
    items: Array<ItemHorizontalMemberProps>
}

// 横向目录组件 成员类
class ItemHorizontalMember extends React.Component {
    public props: ItemHorizontalMemberProps;

    public constructor(props: Readonly<ItemHorizontalMemberProps>) {
        super(props);
        this.props = props;
    }

    public render() {
        return (
            <span
                className="item item-horizontal-member"
                title={this.props.title || this.props.text}
                onClick={this.props.click}
                {...() => { return this.props.disabled ? 'disabled' : '' }}
            >
                {
                    () => {
                        // 根据传入的配置 icon 是否渲染 icon
                        if (this.props.icon) {
                            return (
                                <span
                                    className="icon"
                                >
                                    {this.props.icon}
                                </span>
                            )
                        }
                    }
                }

                <text
                    className="item item-horizontal-member-text"
                >
                    {this.props.text}
                </text>
            </span>
        )
    }
}

// 横向目录组件
export class ItemHorizontalComp extends React.Component {
    public props: Readonly<ItemHorizontalProps>

    public constructor(props: Readonly<ItemHorizontalProps>) {
        super(props);
        this.props = props;
    }

    public render() {
        return (

            <span
                className="item item-horizontal"
            >
                {
                    this.props.items.map((item) => {
                        return (
                            <ItemHorizontalMember {...item}></ItemHorizontalMember>
                        )
                    })
                }
            </span>
        );
    }
}
