import React, { memo } from 'react';
import HYTopBanner from './c-cpns/top-banner';
import { RecommendWrapper } from './style';

function HYRecommend(props) {
  return (
    <RecommendWrapper>
      <HYTopBanner></HYTopBanner>
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
