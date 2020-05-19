import React from 'react';
import loadable from '@loadable/component';
import Loading from '@/components/loading';

export default function (module) {
  return loadable(() => module, {
    fallback: (
      <div>
        <Loading />
      </div>
    )
  });
}
