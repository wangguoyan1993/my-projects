/*
 * Filename: e:\projects\my-projects\src\modules\info-area\news.tsx
 * Path: e:\projects\my-projects
 * Created Date: Tuesday, April 7th 2020, 11:59:57 pm
 * Author: wangguoyan
 * Description: 新闻组件
 * 
 * Copyright (c) 2020 migao.pub
 */

import "./news.scss";
import React from 'react';
import { ItemHorizontalComp } from '../items-list/items-list-horizontal';

// 单条新闻参数接口
interface NewsSingleInterface {
    title: string;
    url: string;
}

// 新闻组件参数接口
interface NewsAreaCompPropInterface {
    title: string;
    content: Array<NewsSingleInterface>;
}

// 新闻组件
class NewsAreaComp extends React.Component {
    public state: NewsAreaCompPropInterface;

    public constructor(props: Readonly<NewsAreaCompPropInterface>) {
        super(props);
        this.state = props;
    }

    public render() {
        return (
            <span
                className="news-box"
            >
                <span
                    className="news-title"
                >
                    { this.state.title }
                </span>

                <span
                    className="news-list"
                >
                    {
                        this.state.content.map((item) => {
                            return (
                                <a
                                    className="news-single"
                                    title={item.title}
                                    href={item.url}
                                    target={item.url}
                                >
                                    {item.title}
                                </a>
                            )
                        })
                    }
                </span>

            </span>
        )
    }
}