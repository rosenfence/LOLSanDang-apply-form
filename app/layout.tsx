import './globals.css';
import type { Metadata } from 'next';
import Provider from './Provider';

export const metadata: Metadata = {
  title: '롤산당 롤인원 모집',
  description: '만국의 게이머여, 단결하라!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body className='flex justify-center bg-[rgba(137,59,255,1)]'>
        <div className='flex-center w-full max-w-xl h-[100dvh] bg-white'>
          <Provider>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
