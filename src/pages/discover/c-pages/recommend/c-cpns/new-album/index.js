import React, { memo, useEffect, useRef } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

import { Carousel } from 'antd';
import { getNewAlbums } from '@/services/recommend';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import { getNewAlbumsAction } from '../../store/actionCreators';
import { AlbumWrapper } from './style';
import HYAlbumCover from '@/components/album-cover';

const HYNewAlbum = memo(() => {
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(['recommend', 'newAlbums']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  //other hooks
  const pageRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumsAction(10));
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架"></HYThemeHeaderRCM>
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return (
                      <HYAlbumCover
                        key={iten.id}
                        info={iten}
                        size={100}
                        width={118}
                        bgp="-570px"
                      ></HYAlbumCover>
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  );
});

export default HYNewAlbum;
