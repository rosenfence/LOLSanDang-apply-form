import React from 'react';
import Lists from './Lists';

const List = () => {
  return (
    <main>
      <h1>모집리스트</h1>
      <article>
        <Lists />
      </article>
      <button>새 모집하기</button>
    </main>
  );
};

export default List;
