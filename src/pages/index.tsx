import * as React from 'react'

import config from '../site-config';

import Header from '../components/header';
import ProfileCard from '../components/profile-card';
import PostList from '../components/post-list';

export default () => {
    return [
            <Header title={config.title} />,
            <ProfileCard />,
            <PostList />,
    ]
}
