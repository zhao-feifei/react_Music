import React, { memo } from 'react';
import HYTopBanner from './c-cpns/top-banner';
import HYHotRecommend from './c-cpns/hot-recommend';
import HYNewAlbum from './c-cpns/new-album';
import HYRecommendRanking from './c-cpns/recommend-ranking';

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style';

function HYRecommend(props) {
  return (
    <RecommendWrapper>
      <HYTopBanner></HYTopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HYHotRecommend></HYHotRecommend>
          <HYNewAlbum></HYNewAlbum>
          <HYRecommendRanking></HYRecommendRanking>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(HYRecommend);

//旧版本

// function HYRecommend(props) {
//   const { getTopBanners, topBanners } = props;
//   useEffect(() => {
//     getTopBanners();
//   }, [getTopBanners]);

//   return <div>HYRecommend:{topBanners.length}</div>;
// }

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getTopBanners: () => {
//     dispatch(getTopBannersAction());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));
