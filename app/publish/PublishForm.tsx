'use client';
import React, { useState } from 'react';

const PublishForm = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [type, setType] = useState<string>('');

  const [nickname, setNickname] = useState<string>('');
  const [tier, setTier] = useState<string>('C');
  const [position, setPosition] = useState<string[]>([]);

  const handleChangeForInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.id;
    switch (target) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'content':
        setContent(e.target.value);
        break;
      case 'date':
        setDate(e.target.value);
        break;
      case 'time':
        setTime(e.target.value);
        break;
      case 'nickname':
        setNickname(e.target.value);
        break;
    }
  };

  const handleClickForInput = (e: React.MouseEvent<HTMLInputElement>) => {
    setType((e.target as HTMLInputElement).value);
  };

  const handleChangeForSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTier(e.target.value);
  };

  return (
    <>
      <div className='form-div'>
        <label htmlFor='title'>제목</label>
        <input
          onChange={(e) => handleChangeForInput(e)}
          id='title'
          type='text'
          placeholder='제목'
        />
      </div>
      <div className='form-div'>
        <label htmlFor='content'>내용</label>
        <input
          onChange={(e) => handleChangeForInput(e)}
          id='content'
          type='text'
          placeholder='내용'
        />
      </div>
      <div className='form-div'>
        <label htmlFor='date'>날짜</label>
        <input onChange={(e) => handleChangeForInput(e)} id='date' type='date' min='' max='' />
      </div>
      <div className='form-div'>
        <label htmlFor='time'>시간</label>
        <input id='time' type='time' />
      </div>
      <div className='form-div'>
        <p>게임 타입</p>
        <span>
          <input
            onClick={(e) => handleClickForInput(e)}
            name='type'
            id='SR'
            value='SR'
            type='radio'
          />
          <label htmlFor='SR'>소환사의 협곡</label>
        </span>
        <span>
          <input
            onClick={(e) => handleClickForInput(e)}
            name='type'
            id='HA'
            value='HA'
            type='radio'
          />
          <label htmlFor='HA'>칼바람 나락</label>
        </span>
        <span>
          <input
            onClick={(e) => handleClickForInput(e)}
            name='type'
            id='TFT'
            value='TFT'
            type='radio'
          />
          <label htmlFor='TFT'>전략적 팀 전투</label>
        </span>
      </div>
      <div className='form-div'>
        <span>
          <label htmlFor='nickname'>닉네임</label>
          <input type='text' id='nickname' placeholder='닉네임' />
        </span>
        <span>
          <label htmlFor='tier'>티어</label>
          <select onChange={(e) => handleChangeForSelect(e)} name='tier' id='tier'>
            <option value='C'>챌린저</option>
            <option value='GM'>그랜드마스터</option>
            <option value='M'>마스터</option>
            <option value='D'>다이아몬드</option>
            <option value='E'>에메랄드</option>
            <option value='P'>플래티넘</option>
            <option value='G'>골드</option>
            <option value='S'>실버</option>
            <option value='B'>브론즈</option>
            <option value='I'>아이언</option>
            <option value='U'>언랭</option>
          </select>
        </span>
        <span>
          <h3>포지션</h3>
          <span>
            <input type='checkbox' id='TOP' name='TOP' />
            <label htmlFor='TOP'>탑</label>
          </span>
          <span>
            <input type='checkbox' id='JUG' name='JUG' />
            <label htmlFor='JUG'>정글</label>
          </span>
          <span>
            <input type='checkbox' id='MID' name='MID' />
            <label htmlFor='MID'>미드</label>
          </span>
          <span>
            <input type='checkbox' id='ADC' name='ADC' />
            <label htmlFor='ADC'>원딜</label>
          </span>
          <span>
            <input type='checkbox' id='SUP' name='SUP' />
            <label htmlFor='SUP'>서포터</label>
          </span>
        </span>
      </div>
    </>
  );
};

export default PublishForm;
