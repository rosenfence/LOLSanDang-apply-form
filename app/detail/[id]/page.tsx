import React from 'react';
import List from './List';

const Detail = (props: { params: string }) => {
  const id = props.params.id;

  return (
    <div>
      상세페이지
      <List id={id} />
    </div>
  );
};

export default Detail;
