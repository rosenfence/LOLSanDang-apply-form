import './globals.css';
import type { Metadata } from 'next';
import Provider from './Provider';
import Nav from './Nav';

export const metadata: Metadata = {
  title: '롤산당 롤인원 모집',
  description: '만국의 게이머여, 단결하라!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body className='flex justify-center bg-[rgba(137,59,255,1)]'>
        <div className='relative pt-5 w-full max-w-xl wrapper overflow-scroll bg-white px-8'>
          <Provider>{children}</Provider>
          <Nav />
        </div>
      </body>
    </html>
  );
}
