import React from 'react';
import { ActivityIndicator } from 'antd-mobile';

function Loading({ isLoading }) {
  return (
    <ActivityIndicator
      toast
      test="努力加载中..."
      animating={isLoading}
    />
  );
}

export default Loading;
