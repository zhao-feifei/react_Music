import React, { memo, useEffect } from 'react';
import { dispatch, useDispatch, shallowEqual, useSelector } from 'react-redux';
import { HotRecommendWrapper } from './style';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYSongsCover from '@/components/songs-cover';
import { getHotRecommendAction } from '../../store/actionCreators';

const HYHotRecommend = memo(() => {
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  });
  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      ></HYThemeHeaderRCM>

      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return (
            <HYSongsCover key={item.id} info={item}>
              {item.title}
            </HYSongsCover>
          );
        })}
      </div>
    </HotRecommendWrapper>
  );
});

export default HYHotRecommend;
