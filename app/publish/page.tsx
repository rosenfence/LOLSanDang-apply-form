import React from 'react';
import PublishForm from './PublishForm';
import Link from 'next/link';

const Publish = () => {
  return (
    <form className='flex-center flex-col'>
      <div>롤할 사람을 모집합시다</div>
      <PublishForm />
      <button className='button'>작성하기</button>
      <Link href='/list'>
        <button className='button'>돌아가기</button>
      </Link>
    </form>
  );
};

export default Publish;
