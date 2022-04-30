import React, { memo, useEffect } from 'react';
import { DiscoverWrapper, TopMenu } from './style';
import { dicoverMenu } from '@/common/local-data';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import request from '@/services/request';

const HYDiscover = memo(function (props) {
  // useEffect(() => {
  //   request({
  //     url: '/banner',
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // });

  const { route } = props;

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  );
});

export default HYDiscover;
