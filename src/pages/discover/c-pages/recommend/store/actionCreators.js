import * as actionTypes from './constants';

import { getNewAlbums } from '@/services/recommend';

import { getTopBanners, getHotRecommends } from '@/services/recommend';

const changeTopBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums,
});

export const getTopBannersAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannersAction(res));
    });
  };
};

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};

export const getNewAlbumsAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      console.log(res);
      dispatch(changeNewAlbumAction(res));
    });
  };
};
