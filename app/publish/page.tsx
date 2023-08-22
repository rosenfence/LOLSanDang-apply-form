import React from 'react';
import PublishForm from './PublishForm';

const Publish = () => {
  return (
    <form className='flex-center flex-col'>
      <div>롤할 사람을 모집합시다</div>
      <PublishForm />
    </form>
  );
};

export default Publish;
