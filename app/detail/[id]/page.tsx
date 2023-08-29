import React from 'react';

const Detail = (props: { params: { id: string } }) => {
  console.log(props.params);
  return <div>상세페이지</div>;
};

export default Detail;
