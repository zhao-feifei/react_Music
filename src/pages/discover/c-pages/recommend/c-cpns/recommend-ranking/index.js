import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import { RankingWrapper } from './style';
// import { getTopList } from '@/services/recommend';
import HYTopRanking from '@/components/top-ranking';
import { getTopListAction } from '../../store/actionCreators';

const HYRecommendRanking = memo(() => {
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'newRanking']),
      originRanking: state.getIn(['recommend', 'originRanking']),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单"></HYThemeHeaderRCM>
      <div className="tops">
        <HYTopRanking info={upRanking}></HYTopRanking>
        <HYTopRanking info={newRanking}></HYTopRanking>
        <HYTopRanking info={originRanking}></HYTopRanking>
      </div>
    </RankingWrapper>
  );
});

export default HYRecommendRanking;
