'use client';
import React from 'react';
import { ListType } from '@/interface/interface';
import { getLists } from '@/function/getLists';
import { useQuery } from '@tanstack/react-query';

const Lists = () => {
  const { isLoading, error, data } = useQuery<ListType[]>({
    queryKey: ['lists'],
    queryFn: getLists,
  });

  if (isLoading)
    return (
      <>
        <div>이미지</div>
        <p>로딩중. . .</p>
      </>
    );

  if (error)
    return (
      <>
        <div>이미지</div>
        <p>오류가 발생했어요</p>
      </>
    );

  return (
    <ul>
      {data?.map((list, i) => {
        return <li key={i}>{list.title}</li>;
      })}
    </ul>
  );
};

export default Lists;
