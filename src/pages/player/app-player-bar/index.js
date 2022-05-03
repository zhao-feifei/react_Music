import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils';
import {
  getSongDetailAction,
  // changeSequenceAction,
  // changeCurrentIndexAndSongAction,
  // changeCurrentLyricIndexAction,
} from '../store/actionCreator';

import { message } from 'antd';
import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';
import { PlaybarWrapper, Control, PlayInfo, Operator } from './style';

const HYAppPlayerBar = memo(() => {
  const { currentSong } = useSelector((state) => ({
    currentSong: state.getIn(['player', 'currentSong']),
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  const picUrl = currentSong.al && currentSong.al.picUrl;
  const singerName = currentSong.ar && currentSong.ar[0].name;
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, 'mm:ss');

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play"></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="now-time"></span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio />
    </PlaybarWrapper>
  );
});

export default HYAppPlayerBar;
