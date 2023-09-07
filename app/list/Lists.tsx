'use client';
import React from 'react';
import { ListType } from '@/interface/interface';
import { getLists } from '@/function/getLists';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

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

  const gameTypeChanger = (code: string) => {
    let result = new String();
    switch (code) {
      case 'SR':
        result = '소환사의 협곡';
        break;
      case 'HA':
        result = '칼바람 나락';
        break;
      case 'TFT':
        result = '전략적 팀 전투';
        break;
    }
    return result;
  };

  const dateChanger = (str: string) => {
    return str.substring(5);
  };

  return (
    <ul>
      {data?.map((list, i) => {
        return (
          <li key={i}>
            <Link href={`/detail/${list._id}`}>
              <span>{list.title}</span>
              <span>{gameTypeChanger(list.gameType)}</span>
              <span>{dateChanger(list.date)}</span>
              <span>{list.time}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Lists;
