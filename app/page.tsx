import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex-center flex-col'>
      <h1>롤 같이 해요!</h1>
      <p>롤 땡기는데 같이 할 사람?</p>
      <Link href='/list'>
        <button className='button'>시작하기</button>
      </Link>
    </main>
  );
}
