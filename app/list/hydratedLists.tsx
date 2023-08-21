import { dehydrate, Hydrate } from '@tanstack/react-query';
import getQueryClient from '../getQueryClient';
import { getLists } from '@/function/getLists';
import Lists from './Lists';

export default async function HydratedPosts() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['lists'], getLists);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Lists />
    </Hydrate>
  );
}
