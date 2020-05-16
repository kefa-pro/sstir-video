import React from 'react';
import Footer from '@/components/footer';

export default function CommonLayout(props) {
  return (
    <div>
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
