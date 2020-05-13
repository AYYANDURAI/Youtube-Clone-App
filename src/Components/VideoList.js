import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

    const listofvideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} video={video} key={id} />);

    return (
        <Grid container spacing={10}>
            {listofvideos}
        </Grid>
    );
}

export default VideoList;