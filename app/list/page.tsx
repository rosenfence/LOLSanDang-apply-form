import React from 'react';
import Lists from './Lists';
import Link from 'next/link';

const List = () => {
  return (
    <main>
      <h1>모집리스트</h1>
      <article>
        <Lists />
      </article>
      <Link href='/publish'>
        <button className='button'>새 모집하기</button>
      </Link>
    </main>
  );
};

export default List;
