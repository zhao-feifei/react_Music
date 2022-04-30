import React, { memo, useEffect } from 'react';
import { getTopBannersAction } from './store/actionCreators';
import { connect } from 'react-redux';

function HYRecommend(props) {
  const { getTopBanners, topBanners } = props;
  useEffect(() => {
    getTopBanners();
  }, [getTopBanners]);

  return <div>HYRecommend:{topBanners.length}</div>;
}

const mapStateToProps = (state) => ({
  topBanners: state.recommend.topBanners,
});

const mapDispatchToProps = (dispatch) => ({
  getTopBanners: () => {
    dispatch(getTopBannersAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));
