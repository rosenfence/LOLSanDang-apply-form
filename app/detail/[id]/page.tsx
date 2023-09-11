import React from 'react';
import List from './List';

const Detail = (props: { params: string }) => {
  const id = props.params;

  return (
    <div>
      상세페이지
      <List id={id} />
    </div>
  );
};

export default Detail;
