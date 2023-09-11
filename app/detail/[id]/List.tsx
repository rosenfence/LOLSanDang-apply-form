'use client';
import React from 'react';
import { ListType } from '@/interface/interface';
import { getList } from '@/function/getList';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

const List = ({ id }: { id: string }) => {
  const { isLoading, error, data } = useQuery<ListType>({
    queryKey: ['list'],
    queryFn: getList(id),
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
    <Link href={`/detail/${list._id}`}>
      <span>{data?.title}</span>
      <span>{data?.content}</span>
      <span>{data?.gameType}</span>
    </Link>
  );
};

export default List;
